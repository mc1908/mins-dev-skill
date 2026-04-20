---
name: mins-dev-skill
description: Lightweight development workflow skill for AI-assisted feature delivery. This skill should be used when starting new feature work, breaking down user stories, implementing with a structured SOP, running validation loops, or extracting reusable knowledge. Triggers on requests like implement feature, break down stories, dev workflow, implementation SOP, knowledge doc, start new feature, or when beginning multi-story development work. Also useful for individual steps like scoping, story sizing, or post-implementation knowledge capture.
---

# Min's Dev Skill

Lightweight, guided development workflow for AI-assisted feature delivery. Not a heavy framework. No gated processes, global configuration, or forced architecture. Only load context when it is relevant.

**Core loop:** Clarify the problem, structure the work, implement one story, test, deploy, validate live, capture lessons, repeat.

**Announce at start:** "I'm using the mins-dev-skill to guide this development workflow."

## Invocation Modes

This skill supports both full lifecycle and individual step invocation.

### Full Lifecycle

Start from rough intent and drive through the complete workflow:

1. Scope clarification
2. Story breakdown
3. Story-by-story implementation via SOP
4. Validation
5. Knowledge capture

To invoke: "Help me build [feature] from scratch" or "Start the dev workflow for [feature]."

### Individual Steps

Invoke any single phase directly:

| Mode | Trigger | What it does |
|------|---------|-------------|
| Scope clarification | "Help me scope [feature]" | Interactive exploration to define intent, boundaries, decisions |
| Story breakdown | "Break down [feature] into stories" | Decompose a defined scope into right-sized stories |
| Implementation SOP | "Implement story [N]" or "Run the SOP for [story]" | Execute the standard implementation loop for one story |
| Validation | "Validate story [N]" or "Run live validation" | Execute the appropriate validation layers |
| Knowledge capture | "Extract lessons from [story/feature]" | Capture and organize reusable knowledge |

## Artifact Directory

All skill artifacts live in a single directory at the project root. This keeps the skill least intrusive to existing project docs.

### Containment Rule

**All planning, tracking, and knowledge artifacts produced by this skill MUST be created inside `mins-dev-skill-docs/` only.** Never create skill artifacts (scope docs, story plans, technical designs, checklists, verification docs, knowledge docs, handoff packages) anywhere else in the project. Removing `mins-dev-skill-docs/` must leave the project file system clean with no orphaned skill artifacts.

This rule does not apply to actual source code, tests, configuration, or deployment files ? those belong wherever the project's conventions dictate.

### Setup

On first use, initialize the artifact directory:

```
<project-root>/mins-dev-skill-docs/
```

Consider adding `mins-dev-skill-docs/` to the project's `.gitignore` if these artifacts should not be committed, or commit them if the team benefits from shared visibility.

### Scope Naming Convention

Each scope uses the pattern `<scope-level>-<name>`:
- `feature-flexflow-portal`
- `story-auth-refactor`
- `product-billing-v2`

Scope levels: `feature`, `story`, `product`, or any descriptive level.

### Directory Structure

```
mins-dev-skill-docs/
  <scope-level>-<name>/
    scope.md                          # From template: assets/templates/feature-scope.md
    story-plan.md                     # From template: assets/templates/story-plan.md
    stories/
      story-01/
        story.md                      # From template: assets/templates/story-doc.md
        review-and-gaps.md            # From template: assets/templates/story-review-and-gaps.md
        clarifying-questions.md       # From template: assets/templates/story-clarifying-questions.md
        technical-design.md
        impl-checklist.md             # From template: assets/templates/story-impl-checklist.md
        manual-verification.md        # From template: assets/templates/story-manual-verification.md
      story-02/
        ...
    knowledge/
      README.md                       # Knowledge index for this scope
      <topic>.md                      # From template: assets/templates/knowledge-doc.md
  repo-knowledge/
    README.md                         # Cross-feature, repo-level lessons
    <topic>.md
```

To initialize a new scope, copy the templates from `assets/templates/` into the appropriate locations.

## Phase 1: Scope Clarification

Goal: Turn rough notes and incomplete context into a clear, bounded scope.

### Process

1. **Gather existing context** -- Read any rough notes, design docs, reference code, or prior discussions the user points to.
2. **Explore the repo** -- Look at existing code structure, related features, deployment setup, and configuration to ground the scope in reality.
3. **Ask clarifying questions** -- Identify ambiguity, missing decisions, or conflicting requirements. Ask targeted questions. Do not overwhelm with too many questions at once; start with the most important ones.
4. **Resolve open questions** -- Work through answers interactively until the scope is concrete.
5. **Write scope.md** -- Capture intent, boundaries, decisions, integration points, and environment notes using the template.

### What Good Scoping Looks Like

- Source of truth is identified (where does authoritative data live?)
- In-scope vs out-of-scope vs post-MVP is explicit
- Key integration points are named
- Ambiguous terms are given concrete definitions
- Environment and deployment approach is understood

## Phase 2: Story Breakdown

Goal: Decompose the scope into right-sized, ordered, testable stories.

**Load `references/story-breakdown-guide.md` for detailed guidance.**

### Key Principle

Break stories so they are not too small that you cannot validate a milestone end to end, nor too big that they are too complex to finish in a clean scope. Plan the right order and ensure full coverage of scope requirements.

### Quick Process

1. Read `scope.md` and identify major functional areas
2. Identify the foundation story (minimum viable skeleton)
3. Layer remaining stories by dependency order
4. Verify full coverage of scope requirements
5. Write `story-plan.md` using the template

## Phase 3: Story Implementation SOP

Goal: Execute a single story from ready to complete with full validation.

**Load `references/impl-sop.md` for the detailed step-by-step procedure.**

### The Loop

```
Review -> Clarify -> Design -> Checklist -> Implement -> Test -> Deploy -> Validate -> Learn -> Update Status
```

Key outputs per story (all under `mins-dev-skill-docs/<scope>/`):
- `stories/story-NN/story.md` (scope guard, dependencies, Implementation References, acceptance criteria)
- `stories/story-NN/review-and-gaps.md`
- `stories/story-NN/clarifying-questions.md`
- `stories/story-NN/technical-design.md`
- `stories/story-NN/impl-checklist.md`
- `stories/story-NN/manual-verification.md`

For trivial stories, `review-and-gaps.md` and `clarifying-questions.md` may be collapsed
into a brief section at the top of `technical-design.md`. Optional per-story artifacts
(`status-notes.md`, `risk-log.md`, `test-evidence.md`) exist for complex stories -- see
`references/impl-sop.md`.

### Standing Rules

- No source file longer than 1000 lines (hard limit). Aim for ~600 lines.
- Run the full test suite after every story, not just new tests.
- Test all languages and runtimes used in the project, not just the primary one.
- If a story reveals a process improvement, update the SOP docs immediately.

## Phase 4: Validation

Goal: Confirm the story works in real conditions.

**Load `references/validation-patterns.md` for detailed patterns.**

### Validation Layers (use the minimum set that gives confidence)

1. **Unit tests** -- Core logic in isolation, all project languages
2. **Integration tests** -- Boundary behavior with external services
3. **Deployment** -- Deploy to dev/staging, verify environment-specific behavior
4. **Live validation** -- Real credentials, real endpoints, documented checks
5. **Cross-repo validation** -- Handoff packages with patches, context, and validation plans

### When live validation exposes issues

Diagnose, fix, re-validate, document the lesson. Let live evidence change the design.

## Phase 5: Knowledge Compounding

Goal: Capture reusable lessons so insights compound across stories and features.

**Load `references/knowledge-compounding.md` for detailed guidance.**

### Two Levels

- **Feature-level** (`mins-dev-skill-docs/<scope>/knowledge/`) -- Lessons specific to the current scope
- **Repo-level** (`mins-dev-skill-docs/repo-knowledge/`) -- Lessons that apply across features in this repo

### When to Capture

After every story that encounters a non-obvious lesson: deployment gotchas, environment behaviors, refactoring patterns, debugging approaches, cross-repo coordination patterns.

### Decision Rule

"Would this help someone working on a different feature in this repo?" If yes, repo-level. If no, feature-level.

## Reference Files

| File | When to load | What it contains |
|------|-------------|-----------------|
| `references/story-breakdown-guide.md` | During story decomposition | Sizing heuristics, decomposition patterns, ordering principles |
| `references/impl-sop.md` | During story implementation | Step-by-step SOP: review, design, checklist, implement, test, deploy, validate, learn |
| `references/validation-patterns.md` | During testing and validation | Unit test, deployment, live validation, cross-repo handoff patterns |
| `references/knowledge-compounding.md` | After story completion | Knowledge extraction, organization, and promotion patterns |

## Asset Templates

Templates in `assets/templates/` are copied into the user's artifact directory:

| Template | Copied to | Purpose |
|----------|-----------|---------|
| `feature-scope.md` | `<scope>/scope.md` | Define intent, boundaries, decisions |
| `story-plan.md` | `<scope>/story-plan.md` | Track stories, dependencies, coverage, planning principles |
| `story-doc.md` | `<scope>/stories/story-NN/story.md` | Per-story scope guard, dependencies, Implementation References |
| `story-review-and-gaps.md` | `<scope>/stories/story-NN/review-and-gaps.md` | SOP Step 1a output |
| `story-clarifying-questions.md` | `<scope>/stories/story-NN/clarifying-questions.md` | SOP Step 1b output |
| `story-impl-checklist.md` | `<scope>/stories/story-NN/impl-checklist.md` | Per-story implementation tracking with Completion Summary |
| `story-manual-verification.md` | `<scope>/stories/story-NN/manual-verification.md` | Live validation evidence |
| `knowledge-doc.md` | `<scope>/knowledge/<topic>.md` | Individual knowledge entries (organized by concern domain) |
| `external-handoff-package/` | `<scope>/stories/story-NN/handoff-<name>/` | Self-contained package for cross-repo work |

## Resuming Work

When returning to an in-progress feature or when context has been lost:

1. Read `mins-dev-skill-docs/<scope>/scope.md` to restore the intent and boundaries
2. Read `mins-dev-skill-docs/<scope>/story-plan.md` to see current progress and next story
3. If a story is in progress, read its `technical-design.md` and `impl-checklist.md` to pick up where work stopped
4. Check `knowledge/` for lessons from completed stories that affect the current work
