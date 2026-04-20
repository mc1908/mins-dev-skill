# Publishing Guide

## Prerequisites

- GitHub account (org or personal namespace)
- Git installed
- Node.js installed (for local testing of the installer)

---

## Step 1: Create a Public GitHub Repo

Create a new repository on GitHub:

- **Name:** `mins-dev-skill`
- **Visibility:** **Public** -- required so anyone can install without GitHub authentication
- Do not initialize with a README (the local copy already contains one)

---

## Step 2: Push to GitHub

```bash
cd mins-dev-skill

# Replace mc1908 with your actual GitHub org or username
# Edit README.md: change "mc1908" -> your actual org/username

git init
git add .
git commit -m "Initial release v1.0.0"
git remote add origin https://github.com/mc1908/mins-dev-skill.git
git push -u origin main
```

---

## Step 3: Tag a Release (Recommended)

```bash
git tag v1.0.0
git push origin v1.0.0
```

Tagging lets consumers pin to a specific version:

```bash
# Skills CLI (pinned)
npx skills add mc1908/mins-dev-skill@v1.0.0

# Direct npx (pinned)
npx github:mc1908/mins-dev-skill#v1.0.0
```

---

## Step 4: Share the Install Command

Once the repo is public, anyone with Node.js can install the skill. There are two equivalent methods -- share whichever suits your team.

### Skills CLI (recommended)

```bash
# Project-level install (run from project root)
npx skills add mc1908/mins-dev-skill

# Global install (available across all projects)
npx skills add mc1908/mins-dev-skill -g
```

The Skills CLI (`npx skills`) is the standard package manager for the open agent skills ecosystem. No npm account or registry needed -- it works directly from the public GitHub repo.

### Direct npx (no extra tooling)

```bash
# Project-level install (run from project root)
npx github:mc1908/mins-dev-skill

# Personal install (available across all projects)
npx github:mc1908/mins-dev-skill -- --location personal
```

---

## Optional: Submit to the Skills Registry

To make the skill discoverable via `npx skills find`, submit it to [skills.sh](https://skills.sh/). This is optional -- the install commands above work without registration.

---

## What Gets Installed

The installer copies all skill content to `.agents/skills/mins-dev-skill/` (or the chosen path), excluding `package.json`, `install.js`, `README.md`, and `.git`:

```
.agents/skills/mins-dev-skill/
  SKILL.md
  PUBLISHING.md
  LICENSE.txt
  references/
    impl-sop.md
    knowledge-compounding.md
    story-breakdown-guide.md
    validation-patterns.md
  assets/templates/
    feature-scope.md
    story-plan.md
    story-doc.md
    story-review-and-gaps.md
    story-clarifying-questions.md
    story-impl-checklist.md
    story-manual-verification.md
    knowledge-doc.md
    external-handoff-package/
      README.md
      agent-prompt.md
      integration-context.md
      validation-and-test-plan.md
      fixtures/.gitkeep
```

---

## Verifying the Install

After running either install command, confirm the skill is active:

1. Check that `.agents/skills/mins-dev-skill/SKILL.md` exists in the project
2. In GitHub Copilot (agent mode), Codex CLI, or Claude Code, ask:
   _"help me break down this feature into stories"_ -- the skill should activate automatically

---

## Updating the Skill

To release a new version:

```bash
# Make your changes, then:
git add .
git commit -m "Update: <description>"
git tag v1.1.0
git push origin main --tags
```

Consumers re-run their install command to get the update. There is no automatic update push.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `npx` not found | Install Node.js from nodejs.org |
| `npx skills` not found | Node.js is required; `npx skills` downloads on first use |
| Skill not picked up by agent | Restart the agent / IDE after install |
| Permission denied writing to `~/.agents` | Use `--path` to specify a writable location, or run with elevated permissions |
| Want to install to `.github/skills/` for Copilot only | `npx github:mc1908/mins-dev-skill -- --path .github/skills` |
