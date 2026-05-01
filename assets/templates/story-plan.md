# Story Plan: [scope name]

## Overview

[One sentence describing what this story plan delivers.]

## Overall Status

<!--
This is the canonical overall progress tracker for the scope.
Keep it short and current. Update it whenever any story changes status.
Suggested contents:
  - Completed / In Progress / Blocked / Not Started counts
  - Current active story
  - Next recommended story
Example:
  - Completed: 1
  - In Progress: 1
  - Blocked: 0
  - Not Started: 8
  - Active Story: Story 02
  - Next Recommended Story: Story 03
-->

- Completed: [count]
- In Progress: [count]
- Blocked: [count]
- Not Started: [count]
- Active Story: [story number or "None"]
- Next Recommended Story: [story number or rationale]

## Planning Principles

<!--
Project-specific principles discovered during scope clarification.
Write these BEFORE listing stories so the decomposition has a stated rationale.
Replace the examples below with principles that fit this scope. Domain-neutral examples:
  - Validate the highest-risk integration boundary in the earliest possible story
  - Each story must end in a demoable milestone (not just code merged)
  - Keep changes to external systems isolated to dedicated stories with handoff packages
  - Foundation story establishes the deployment pipeline and at least one live data path
  - Refactors absorb into the story that discovers the need; no standalone refactor stories
-->

- [Principle 1]
- [Principle 2]
- [Principle 3]

## Stories

<!--
Primary Outcome is distinct from Summary: it states what the story DELIVERS as a milestone,
not just what it does. Example:
  Summary: "Wire up the data fetch and selection UI"
  Primary Outcome: "Deployable foundation with real data query and environment selection"
-->

| # | Story | Summary | Primary Outcome | Dependencies | Status |
|---|-------|---------|-----------------|--------------|--------|
| 1 | [story name] | [one-line description] | [milestone delivered] | -- | Not Started |
| 2 | [story name] | [one-line description] | [milestone delivered] | Story 1 | Not Started |

<!--
The Status column above is the canonical story-by-story progress roll-up for the scope.
Update it whenever a story changes state. Recommended values:
  - Not Started
  - In Progress
  - Blocked
  - Ready for Validation
  - Complete
-->

## Story Granularity Rationale

<!--
For each story (or each natural group), state:
  - Why it is not smaller (would produce non-demoable fragments / cannot validate a milestone)
  - Why it is not larger (would cross too many boundaries / blur completion criteria)
This is the planning-level mirror of the "Why This Story Size Is Right" section in each story doc.
-->

- **Story 1:** Not smaller because [...]. Not larger because [...].
- **Story 2:** Not smaller because [...]. Not larger because [...].

## Validation Strategy By Story

<!--
One line per story stating what the validation PROVES at that milestone.
Example:
  Story 02 validation: a complete plan can be built and validated end-to-end without dispatch.
-->

- **Story 1:** Validation proves [...].
- **Story 2:** Validation proves [...].

## Dependency Graph

<!--
Explicit graph of inter-story dependencies (do not rely on the table column alone).
Use a bullet list, a simple text graph, or a mermaid diagram. Example text form:
  Story 1 -> Story 2 -> Story 3
                    \-> Story 4 -> Story 5
-->

```
Story 1 -> Story 2
Story 2 -> Story 3
Story 2 -> Story 4
```

## Coverage Matrix

| Scope Requirement | Stories |
|-------------------|---------|
| [requirement from scope.md] | Story 1, Story 2 |

## Ordering Rationale

1. Story 1 -- [why this goes first]
2. Story 2 -- [why this follows]

## Deliverables To Create

<!--
Explicit list of files/artifacts to generate from this plan.
Typically one story doc per story, plus per-story tracking directories.
Helps the agent set up the directory tree before implementation begins.
-->

- `mins-dev-skill-docs/<scope>/stories/story-01/story.md`
- `mins-dev-skill-docs/<scope>/stories/story-01/` (tracking directory for review, design, checklist, verification)
- `mins-dev-skill-docs/<scope>/stories/story-02/story.md`
- `mins-dev-skill-docs/<scope>/stories/story-02/`
- ... (one entry per story)

## Notes

- [Any sizing or dependency notes that affect the plan]
