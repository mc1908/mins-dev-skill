# Agent Prompt -- [Task Title]

<!--
Copy-paste ready prompt for the agent receiving this handoff.
Designed to be language- and stack-agnostic: works whether the receiving agent is in a
Python repo, a Java repo, a Go repo, a JS repo, or anything else.
-->

## Context

You are working in [target repo name]. The team maintaining a related upstream/downstream
component has prepared this handoff package so you do not need access to their repo history.
Everything you need to understand the change is in this directory.

## Task

[1-2 sentence task description. State the change being requested in implementation terms.]

## Key Constraints

- [Constraint 1 -- e.g., "Do not change the public interface of `<module>`"]
- [Constraint 2 -- e.g., "Preserve backward compatibility with callers using the old payload shape"]
- [Constraint 3 -- e.g., "Add new behavior behind a feature flag if the project supports flags"]

## Acceptance Criteria

- [ ] [Concrete, verifiable condition 1]
- [ ] [Concrete, verifiable condition 2]
- [ ] All checks in `validation-and-test-plan.md` pass

## Required Reading Before Changing Code

Read the rest of this package before modifying anything in the target repo:

1. `integration-context.md` -- what behavior is expected and why
2. `validation-and-test-plan.md` -- how completion is verified
3. `fixtures/` -- sample data and configuration for reproduction

## Reporting Back

When the change is complete (or blocked):
- Summarize what was changed and where
- Report the result of every check in `validation-and-test-plan.md`
- List any deviations from the contract in `integration-context.md` and the reason
- Surface any new questions that arose during implementation
