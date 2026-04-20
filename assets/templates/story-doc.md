# Story [NN]: [Story Title]

<!--
Per-story scope and tracking document.
Lives at: mins-dev-skill-docs/<scope>/stories/story-NN/story.md
This is the single source of truth for what this story delivers and what it does NOT deliver.
The In Scope and Out of Scope sections act as scope guards during implementation:
if work in progress drifts beyond In Scope, stop and either revise the story doc or defer to a follow-up.
-->

## Status

<!-- One of: Not Started | In Progress | Ready for Validation | Complete -->

Not Started

## Objective

<!-- 1-2 sentences in implementation terms (what gets built / changed), not just user-facing intent. -->

[What this story delivers, in concrete implementation terms.]

## Why This Story Size Is Right

<!--
Required. Defend the sizing decision against the heuristics in references/story-breakdown-guide.md.
Address two questions explicitly:
  - Why is this story not smaller? (would produce non-demoable fragments, would not validate a milestone, etc.)
  - Why is this story not larger? (would cross too many integration boundaries, would blur completion criteria, etc.)
This paragraph is the contract that prevents scope creep AND prevents over-decomposition.
-->

[Justification paragraph.]

## In Scope

<!--
Explicit list of what this story delivers. This is the scope guard.
During implementation, anything not on this list should be refused or deferred to a follow-up story.
Be concrete: name modules, behaviors, surfaces, integrations.
-->

- [Item 1]
- [Item 2]

## Out of Scope

<!--
Explicit list of what is deferred. For each item, name the future story or backlog entry that owns it
when known (e.g., "Owned by Story 04" or "Backlog: post-MVP hardening").
This list prevents scope creep by giving deferred work a visible home.
-->

- [Item] -- [where it is owned, if known]
- [Item] -- [where it is owned, if known]

## Dependencies

<!-- Which prior stories must be complete before this one starts. Reference by story number and title. -->

- Story [NN]: [title] -- [why this dependency matters]

## Implementation References

<!--
The forward-link that makes knowledge compounding actually work.
List every knowledge doc, prior-story artifact, or external reference the agent MUST review
before writing the technical design. Without this list, lessons from prior stories are write-only.
Examples:
  - mins-dev-skill-docs/<scope>/knowledge/deployment-patterns.md
  - mins-dev-skill-docs/<scope>/stories/story-02/review-and-gaps.md
  - mins-dev-skill-docs/repo-knowledge/runtime-and-config.md
  - <external URL or file path the agent should consult>
-->

- [path or URL]
- [path or URL]

## Deliverables

<!--
Named list of concrete outputs. Language- and framework-agnostic:
modules, services, endpoints, CLI commands, configs, schemas, tests, scripts, patches, docs, etc.
Do not assume a specific stack.
-->

- [Deliverable 1]
- [Deliverable 2]

## Acceptance Criteria

<!--
Verifiable conditions for story completion. Each criterion should be testable or demonstrable.
Prefer concrete observable conditions over vague intent.
-->

- [ ] [Criterion 1]
- [ ] [Criterion 2]

## Validation

<!--
Describe what the validation PROVES (the milestone evidence), not just what checks to run.
Distinguish automated from manual validation where applicable.
Example:
  Automated: full test suite passes; integration tests for the new boundary pass.
  Manual: end-to-end run against deployed instance proves a complete <X> can be performed without <Y>.
-->

- Automated: [what the automated checks prove]
- Manual: [what the manual verification proves]

## Scope Coverage

<!--
Bidirectional link back to scope.md or the scope's coverage matrix.
Name the requirements from the scope doc that this story satisfies.
This is how Phase 2's coverage matrix stays accurate as stories complete.
-->

- Satisfies scope requirement: [requirement label or row from scope.md coverage matrix]
- Satisfies scope requirement: [...]
