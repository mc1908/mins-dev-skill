# Validation and Test Plan

<!--
Concrete validation expectations for the receiving agent.
Stack-agnostic: use <placeholder> for the target repo's actual commands.
-->

## Definition of Done

The change is done when ALL of the following are true:

- [ ] Code changes match the contract in `integration-context.md`
- [ ] All commands in the Command Checklist below succeed
- [ ] Recommended test cases pass
- [ ] No regression in the target repo's existing test suite
- [ ] No real secrets, tokens, or credentials introduced into committed files

## Command Checklist

<!--
Substitute the target repo's actual commands. Examples:
  - `<target repo install command>`
  - `<target repo build command>`
  - `<target repo test command>`
  - `<target repo lint/format command>`
  - Apply patch from `patches/` if provided: `<patch apply command>`
-->

- [ ] `<install dependencies>`
- [ ] `<build>`
- [ ] `<run full test suite>`
- [ ] `<run any integration tests>`
- [ ] `<run lint/format checks>`

## Recommended Test Cases

| # | Scenario | Input (fixture or value) | Expected Outcome |
|---|----------|--------------------------|------------------|
| 1 | [happy path] | [fixture path or inline value] | [expected behavior] |
| 2 | [error path] | [fixture path or inline value] | [expected error / fallback] |
| 3 | [edge case] | [fixture path or inline value] | [expected behavior] |

## Manual Verification (if applicable)

<!--
If the change has a user-visible or runtime-observable surface, list manual checks here.
Use the same concrete-results discipline as the skill's manual-verification template:
record observed numbers, quoted output, or state -- not just Pass/Fail.
-->

1. [Step]
2. [Step]

## Reporting Format

When reporting back, include:
- Exact commands run and their outcomes
- Test pass/fail counts
- Any deviation from the contract and the reason
- Any new questions or follow-up items
