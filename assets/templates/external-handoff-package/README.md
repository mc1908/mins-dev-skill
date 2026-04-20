# External Handoff Package -- [Description]

This directory is a self-contained package describing a change that another repository (or
another agent working in another repo) must implement on behalf of this story.

The package is intentionally self-contained: the receiving agent should not need access to
the source repo's history to understand what is expected.

## Contents

| File | Purpose |
|------|---------|
| `README.md` | This file. Package contents and recommended usage workflow. |
| `agent-prompt.md` | Copy-paste ready prompt for the receiving agent. |
| `integration-context.md` | Background, behavior contract, acceptance criteria, interface specs. |
| `validation-and-test-plan.md` | Validation expectations, test cases, command checklist, definition of done. |
| `fixtures/` | Sample payloads, test data, mock responses, configuration examples. |

## Recommended Usage Workflow

1. **Source-side preparation** -- author each file in this package; populate `fixtures/` with
   anything the receiving agent needs to reproduce the integration scenario.
2. **Patch generation** (if a code patch is included) -- follow the Patch Generation
   Discipline in `references/validation-patterns.md` (Layer 5). Verify the patch applies
   cleanly against the target repo before handoff.
3. **Handoff** -- transmit the entire directory. The receiving agent reads `agent-prompt.md`
   first, which directs them to the rest of the package.
4. **Receiver-side execution** -- the receiving agent reads the prompt, then
   `integration-context.md`, then `validation-and-test-plan.md` before changing code.
5. **Validation feedback** -- the receiving agent reports validation results back; the source
   side records the outcome in the originating story's `manual-verification.md`.

## Expected Outcome

A successful handoff produces:
- Code changes in the target repo that match the contract in `integration-context.md`
- Passing validation per `validation-and-test-plan.md`
- A traceable evidence trail back to the originating story in this skill's tracking artifacts
