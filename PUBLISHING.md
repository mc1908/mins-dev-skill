# Publishing Guide

## Prerequisites

- GitHub account with an org or personal namespace
- Git installed
- Node.js installed (for local testing of the installer)

---

## Step 1: Create a Public GitHub Repo

Create a new repository on GitHub:

- **Name:** `mins-dev-skill`
- **Visibility:** **Public** ? required so teammates can install without GitHub authentication
- Do not initialize with a README (the zip already contains one)

---

## Step 2: Extract and Push

```bash
# Extract the zip
unzip mins-dev-skill-repo.zip -d mins-dev-skill

cd mins-dev-skill

# Replace your-org with your actual GitHub org or username (in README.md)
# Edit README.md: change "your-org" -> "your-actual-org"

git init
git add .
git commit -m "Initial release v1.0.0"
git remote add origin https://github.com/your-org/mins-dev-skill.git
git push -u origin main
```

---

## Step 3: Tag a Release (Recommended)

```bash
git tag v1.0.0
git push origin v1.0.0
```

This lets teams pin to a specific version:

```bash
npx github:your-org/mins-dev-skill#v1.0.0
```

---

## Step 4: Share the Install Command

Because the repo is **public**, no GitHub login is required. Anyone with Node.js can install:

```bash
# Project-level install (run from project root)
npx github:your-org/mins-dev-skill

# Personal install (available across all projects)
npx github:your-org/mins-dev-skill -- --location personal
```

Share this command with your team. No npm account, no registry, no authentication needed.

---

## What Gets Installed

```
.agents/skills/mins-dev-skill/
  SKILL.md
  LICENSE.txt
  references/
    impl-sop.md
    knowledge-compounding.md
    story-breakdown-guide.md
    validation-patterns.md
  assets/templates/
    feature-scope.md
    story-plan.md
    story-impl-checklist.md
    knowledge-doc.md
```

---

## Verifying the Install

After running the install command, confirm the skill is active:

1. Check that `.agents/skills/mins-dev-skill/SKILL.md` exists in the project
2. In GitHub Copilot (agent mode) or Codex, ask: _"help me break down this feature into stories"_ ? the skill should activate automatically

---

## Updating the Skill

To release a new version:

```bash
# Make changes, then:
git add .
git commit -m "Update: <description>"
git tag v1.1.0
git push origin main --tags
```

Teams re-run the install command to update:

```bash
npx github:your-org/mins-dev-skill
```

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `npx` command not found | Install Node.js from nodejs.org |
| Skill not picked up by agent | Restart the agent / IDE after install |
| Permission denied writing to `~/.agents` | Run with `sudo` or use `--path` to specify a writable location |
| Want to install to `.github/skills/` for Copilot only | `npx github:your-org/mins-dev-skill -- --path .github/skills` |
