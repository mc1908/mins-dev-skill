# Integration Context

<!--
Self-contained background. The receiving agent should not need to read the source repo to
understand what is expected. Do not assume shared vocabulary -- define terms.
-->

## Background

[Why this change is needed. What problem it solves. What system or feature triggered it.]

## Behavior Contract

[Describe the expected behavior of the target repo after the change, independent of how the
source repo uses it. Use concrete examples, not abstractions.]

### Inputs

| Input | Shape / Type | Example | Notes |
|-------|--------------|---------|-------|
| [name] | [type or schema] | [example value or fixture reference] | [constraints, optionality] |

### Outputs

| Output | Shape / Type | Example | Notes |
|--------|--------------|---------|-------|
| [name] | [type or schema] | [example value or fixture reference] | [constraints] |

### Error / Edge-Case Behavior

- [Condition] -- expected behavior: [...]
- [Condition] -- expected behavior: [...]

## Interface Specification

<!--
Use whatever applies: function signatures, REST endpoint definitions, message schemas,
CLI flags, config keys, library API surface. Stack-agnostic.
-->

[Concrete interface description.]

## Acceptance Criteria

- [Condition 1]
- [Condition 2]

## Out of Scope

<!--
What this handoff does NOT ask for. Prevents the receiving agent from over-implementing.
-->

- [Item not requested]

## Source-Side Reference (informational only)

<!--
Optional: brief note pointing to the originating story for traceability. The receiving agent
does not need to access this to do the work; it is for audit only.
-->

- Originating story: [scope name / story number / title]
- Originating skill artifact: `mins-dev-skill-docs/<scope>/stories/story-NN/`
