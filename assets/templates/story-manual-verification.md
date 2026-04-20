# Manual Verification -- Story [NN]: [Title]

<!--
Records what was actually checked against the running system after implementation.
Goal: produce evidence that the story's Validation section in story.md is satisfied.
Concrete numbers, quoted output, and observed state matter -- "Pass/Fail" alone is not enough.
-->

## Status

<!-- Examples: "Verified [date]", "Partial -- 1 issue open", "Re-verified after fix on [date]" -->

[Status, with date]

## Prerequisites

<!--
Environment, tools, fixtures, and credentials approach needed to reproduce the verification.
Language- and stack-agnostic: name the kind of dependency, not a specific tool.
Examples:
  - A running instance of the application reachable at <url>
  - Test fixtures from `<path-to-fixtures>`
  - Credentials loaded via `<safe-loading-pattern>` (no secrets committed here)
-->

- [Prerequisite 1]
- [Prerequisite 2]

## Verification Path

<!--
State whether verification was performed locally, in a deployed environment, or both.
If a path was chosen over another (e.g., deployed-only because the story changes deployment behavior),
explain why.
-->

[Local | Deployed-<env> | Both] -- [reason if relevant]

## Executed Steps

<!--
Numbered list. Each step must be reproducible: actual command, URL, UI action, or API call.
Use <placeholder> for project-specific values. Examples (any could apply):
  1. Run `<project test command>` from repo root.
  2. Open `<deployed-url>/<route>` in a browser.
  3. POST to `<api-endpoint>` with payload `<fixture-name>`.
  4. Trigger `<job-name>` from the scheduler.
-->

1. [Step]
2. [Step]
3. [Step]

## Actual Results

<!--
Per step or per group: observed outcome with specific numbers, quoted text, or concrete state.
Not just "Pass" -- e.g., "returned 30 items, 25 matched the filter criteria".
-->

| Step | Expected | Observed (concrete) | Status |
|------|----------|---------------------|--------|
| 1 | [expected] | [actual: numbers, quoted output, screenshot ref] | Pass / Fail |
| 2 | [expected] | [actual] | Pass / Fail |

## Issues Found

<!--
For each issue discovered during verification, capture the full loop.
If no issues, replace this section with: "No issues found."
-->

### Issue 1: [short title]

- **Symptom:** [what was observed]
- **Cause:** [root cause identified]
- **Fix Applied:** [what was changed, with file/module references]
- **Re-verified:** [confirmation the fix resolved the issue, with date]

## Evidence

<!--
Paths or links to screenshots, logs, JSON summaries, terminal output dumps.
Note: transient evidence (e.g., one-off run logs) should not be committed unless the project
requires permanent test evidence. Prefer summarizing inline and linking to durable artifacts.
-->

- [path or link]
- [path or link]

## Known Limitations

<!--
What remains out of scope for this verification, and what could not be tested and why.
This is the honest boundary statement: prevents readers from assuming more was covered than was.
-->

- [Limitation, with reason]
