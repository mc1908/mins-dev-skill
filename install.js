#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const os = require('os');

const SKILL_NAME = 'mins-dev-skill';

// These files are installer infrastructure ? not part of the skill itself
const EXCLUDE = new Set([
  'package.json',
  'install.js',
  'README.md',
  'node_modules',
  '.git',
  '.gitignore',
  '.npmignore',
]);

function printHelp() {
  console.log('Usage: npx mins-dev-skill [options]');
  console.log('');
  console.log('Options:');
  console.log('  --location project   Install to ./.agents/skills/ in current directory (default)');
  console.log('  --location personal  Install to ~/.agents/skills/ for cross-project use');
  console.log('  --path <dir>         Install to a custom parent directory');
  console.log('  --help               Show this help');
  console.log('');
  console.log('Examples:');
  console.log('  npx mins-dev-skill                        # project install');
  console.log('  npx mins-dev-skill --location personal    # personal install');
}

function parseArgs() {
  const args = process.argv.slice(2);
  let location = 'project';
  let customPath = null;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--help' || args[i] === '-h') {
      printHelp();
      process.exit(0);
    } else if (args[i] === '--location' && args[i + 1]) {
      location = args[++i];
      if (location !== 'project' && location !== 'personal') {
        console.error(`Error: --location must be "project" or "personal", got "${location}"`);
        process.exit(1);
      }
    } else if (args[i] === '--path' && args[i + 1]) {
      customPath = args[++i];
    }
  }
  return { location, customPath };
}

function getTargetDir({ location, customPath }) {
  if (customPath) {
    return path.resolve(customPath, SKILL_NAME);
  }
  if (location === 'personal') {
    return path.join(os.homedir(), '.agents', 'skills', SKILL_NAME);
  }
  return path.join(process.cwd(), '.agents', 'skills', SKILL_NAME);
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    if (EXCLUDE.has(entry.name)) continue;
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const { location, customPath } = parseArgs();
const sourceDir = __dirname;
const targetDir = getTargetDir({ location, customPath });

console.log(`\nInstalling ${SKILL_NAME}...`);
console.log(`  Target: ${targetDir}`);

if (fs.existsSync(targetDir)) {
  console.log('  Note: directory already exists ? overwriting existing skill files.');
}

try {
  copyDir(sourceDir, targetDir);
} catch (err) {
  console.error(`\nError: failed to install skill ? ${err.message}`);
  process.exit(1);
}

console.log('\nInstalled successfully.');
console.log('\nThe skill is now available at:');
console.log(`  ${targetDir}`);
console.log('\nAgents that pick it up automatically:');
console.log('  GitHub Copilot (agent mode), OpenAI Codex CLI, Claude Code');
console.log('\nTo also install for personal use across all projects:');
console.log('  npx mins-dev-skill --location personal');
