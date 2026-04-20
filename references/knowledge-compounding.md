# Knowledge Compounding

## Purpose

This reference is loaded when extracting and organizing lessons learned from completed work. It defines how to capture knowledge at feature and repo levels so insights compound across stories and features.

## Why This Matters

Without deliberate knowledge capture:
- The same deployment gotcha is debugged again in the next story
- The same refactoring pattern is rediscovered from scratch
- Configuration lessons are lost when the person who learned them moves on
- Cross-repo coordination patterns are reinvented each time

Knowledge compounding turns one-time problem solving into permanent team capability.

## When to Capture Knowledge

- After every story that encounters a non-obvious lesson
- After debugging a deployment or live validation issue
- After discovering an environment-specific behavior
- After refactoring or establishing a new code pattern
- After coordinating changes across repositories
- When the implementation SOP itself is improved

## Two Levels of Knowledge

### Feature-Level Knowledge

Stored in: `mins-dev-skill-docs/<scope>/knowledge/`

These are lessons specific to the current feature or product scope:
- Integration patterns with specific external services
- Configuration requirements for specific environments
- Debugging approaches for specific failure modes
- Workarounds for known issues in the feature's domain

### Repo-Level Knowledge

Stored in: `mins-dev-skill-docs/repo-knowledge/`

These are lessons that apply across features in this repository:
- Deployment procedures and environment setup
- Common shell commands and CLI patterns
- Code organization standards
- Testing patterns and frameworks
- CI/CD pipeline behaviors
- Cross-repo coordination patterns

## How to Decide Which Level

Ask: "Would this knowledge help someone working on a different feature in this repo?"
- **Yes** ? repo-level
- **No, it's specific to this feature's domain** ? feature-level
- **Both** ? put it in repo-level and reference it from feature-level

## Knowledge Document Structure

### Index File (`knowledge/README.md`)

```markdown
# Knowledge Index ? [Scope Name]

## Lessons

| # | Topic | File | Story | Summary |
|---|-------|------|-------|---------|
| 1 | [topic] | [filename.md] | Story NN | [one-line summary] |
```

### Individual Knowledge Document

```markdown
# [Topic]

## Context
[What situation led to this knowledge]

## Lesson
[The reusable insight]

## Details
[Commands, configuration, code patterns, or debugging steps]

## Applies To
[When future work should reference this]
```

## Knowledge Capture Checklist

After each story:
- [ ] Review what was learned during implementation
- [ ] Review what was learned during validation
- [ ] Review what was learned during debugging
- [ ] Write or update knowledge docs for non-obvious insights
- [ ] Update the knowledge index
- [ ] Reference knowledge docs in the SOP or story plan if they affect future work

## Promoting Knowledge

When a pattern repeats across multiple features:
1. Recognize the pattern ? "I've seen this before in another feature"
2. Move the knowledge from feature-level to repo-level
3. Generalize the description to be feature-independent
4. Reference the repo-level doc from both feature knowledge indexes

## Anti-Patterns

- **Capturing everything** ? only capture what is non-obvious or repeatedly useful
- **Capturing too late** ? capture while the context is fresh, not at the end of the project
- **Duplicating between levels** ? reference, don't copy
- **Writing novels** ? keep knowledge docs concise and scannable
