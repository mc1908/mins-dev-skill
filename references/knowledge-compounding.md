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
- **Yes** -- repo-level
- **No, it's specific to this feature's domain** -- feature-level
- **Both** -- put it in repo-level and reference it from feature-level

## Knowledge Document Structure

### Index File (`knowledge/README.md`)

Every knowledge directory has a README index. Include the Knowledge Index Maintenance Rules
(below) as a preamble in every index so contributors see them on every visit.

```markdown
# Knowledge Index -- [Scope Name]

## Maintenance Rules (read before adding or editing entries)

- **No secrets or tokens.** Use placeholders (`<token_placeholder>`) or safe-loading command
  patterns (`$(load-secret-for ...)`).
- **Prefer runnable commands** with `<placeholder>` values the reader can substitute. Make
  every example copy-paste ready.
- **Mark environment scope.** State whether a behavior is local-only, staging-only,
  production-only, cloud-provider-specific, OS-specific, etc.
- **Mark time-sensitive findings** with the verification date (e.g., "Verified 2026-04-20").
  Stale knowledge is worse than missing knowledge.
- **Note tool/API versions** when a behavior is specific to a particular version (e.g.,
  "Behavior observed in <tool> v1.4; v2.0 changes the API").
- **Update the index every time** a knowledge doc is created OR extended -- not only on
  creation. The index reflects current contents, not historical ones.

## Lessons

| # | Topic | File | Stories | Summary |
|---|-------|------|---------|---------|
| 1 | [topic] | [filename.md] | Story NN, NN | [one-line summary] |
```

### Individual Knowledge Document

Use the template at `assets/templates/knowledge-doc.md`. The template includes a History
field so contributing stories accumulate over time, and an optional Anti-Patterns section
for "do not X because Y" warnings.

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
1. Recognize the pattern -- "I've seen this before in another feature"
2. Move the knowledge from feature-level to repo-level
3. Generalize the description to be feature-independent
4. Reference the repo-level doc from both feature knowledge indexes

## Organizing Multiple Knowledge Docs

Once a scope (or repo) accumulates more than two or three knowledge docs, organization matters
as much as content. The two-level model (feature-level + repo-level) still applies; this
guidance is about organization *within* each level.

- **Organize by concern domain, not by story.** Name docs after the topic
  (e.g., `deployment-patterns.md`, `testing-setup.md`, `external-integrations.md`,
  `runtime-and-config.md`) rather than the story that discovered the lesson. This makes docs
  reusable across stories.
- **Grow docs incrementally across stories.** When Story 03 discovers a testing pattern,
  append it to the existing `testing-setup.md` rather than creating
  `story-03-testing-lesson.md`. Mark new additions with the contributing story number for
  traceability (the knowledge-doc template's History field captures this).
- **Include inline anti-patterns.** Each doc should contain "Do not X because Y" warnings
  alongside positive guidance. Anti-patterns are often the most reusable lessons because
  they prevent regression.
- **Include runnable commands with placeholders.** Not "run the deploy command" but the actual
  command structure with secrets replaced by safe-loading patterns. Make it copy-paste ready
  with substitution.
- **Cross-reference explicitly.** Story docs should name the knowledge docs in their
  Implementation References. Knowledge docs should name the files and modules they discuss.
  The README index should link every doc.

### Domain-neutral example topic names

Use whatever fits the project. These work across most stacks:

- `deployment-and-release.md` -- build, deploy, rollback, packaging patterns
- `testing-patterns.md` -- test setup, runners, fixtures, gotchas across languages
- `external-integrations.md` -- API contracts, auth patterns, error handling
- `runtime-and-config.md` -- environment behavior, config rollout, debugging
- `data-and-storage.md` -- schema patterns, migrations, query gotchas
- `tooling-and-cli.md` -- repo-specific commands, scripts, dev-loop shortcuts

## Anti-Patterns

- **Capturing everything** -- only capture what is non-obvious or repeatedly useful
- **Capturing too late** -- capture while the context is fresh, not at the end of the project
- **Duplicating between levels** -- reference, don't copy
- **Writing novels** -- keep knowledge docs concise and scannable
