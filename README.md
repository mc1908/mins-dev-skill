# mins-dev-skill

Lightweight AI-assisted development workflow skill. Guides feature delivery from rough notes to deployed, validated software ? without a heavy framework or gated process.

**Core loop:** Clarify the problem ? structure the work ? implement one story ? test ? deploy ? validate live ? capture lessons ? repeat.

## Install

**Project-level** (one repository, run from the project root):

```bash
npx github:your-org/mins-dev-skill
```

**Personal** (available across all projects):

```bash
npx github:your-org/mins-dev-skill -- --location personal
```

Installed locations:
- Project: `./.agents/skills/mins-dev-skill/`
- Personal: `~/.agents/skills/mins-dev-skill/`

## Supported Platforms

Works with any agent that follows the [Agent Skills Spec](https://agentskills.io/):

| Platform | Discovery path |
|----------|---------------|
| GitHub Copilot (agent mode) | `.agents/skills/`, `.github/skills/` |
| OpenAI Codex CLI | `.agents/skills/`, `~/.agents/skills/` |
| Claude Code | `.claude/skills/`, `.agents/skills/` |

## Manual Install

Download this repo and copy the skill directory to one of the locations above. No build step needed.

## What It Does

The skill provides five guided workflow phases:

1. **Scope clarification** ? Turn rough notes and incomplete context into a clear, bounded scope
2. **Story breakdown** ? Decompose a scope into right-sized, ordered, testable stories
3. **Implementation SOP** ? Step-by-step procedure from design to deployed, validated code
4. **Validation** ? Unit tests, deployment, live validation, and cross-repo handoffs
5. **Knowledge compounding** ? Capture and organize reusable lessons at feature and repo levels

All planning and tracking artifacts are created in `mins-dev-skill-docs/` at your project root. Removing that directory leaves the project clean.

## License

Apache 2.0 ? see [LICENSE.txt](LICENSE.txt).
