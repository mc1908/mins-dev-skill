# Implementation SOP

## Purpose

This reference is loaded when implementing a story. It defines the standard operating procedure for taking a story from "ready" to "complete" with full validation.

## Artifact Containment

All tracking artifacts (technical designs, checklists, verification docs, knowledge docs, handoff packages) MUST be created inside `mins-dev-skill-docs/<scope>/`. Never create these artifacts elsewhere in the project. Actual source code, tests, and deployment files go wherever the project's conventions dictate.

## Progress Tracking Rule

- Treat `mins-dev-skill-docs/<scope>/story-plan.md` as the canonical overall progress tracker for the scope.
- When a story changes state, update the `Status` column in `story-plan.md` immediately.
- Keep per-story execution progress in `stories/story-NN/impl-checklist.md` and per-story completion evidence in `stories/story-NN/manual-verification.md`.
- Do not repurpose `scope.md` or knowledge docs as progress trackers.

## The Implementation Loop

For each story, execute these steps in order:

```
Review -> Clarify -> Design -> Checklist -> Implement -> Test -> Deploy -> Validate -> Learn -> Update Status
```

### Step 1a: Review

Before touching code:
- Read the story document (`stories/story-NN/story.md`, structure defined by `assets/templates/story-doc.md`) including its **In Scope**, **Out of Scope**, and **Implementation References** sections
- **Load every doc listed in Implementation References** (knowledge docs, prior-story artifacts, external references) before continuing
- Read the scope doc for surrounding context
- Explore relevant existing code and documentation in the repo
- Identify gaps, inconsistencies, ambiguities, and assumptions
- If multiple interpretations exist, document them and identify the recommended one
- State assumptions explicitly; block if an assumption would materially change the implementation
- Note the simplest viable approach and any tradeoff it makes
- Check the knowledge docs from previous stories for relevant lessons

**Output:** `mins-dev-skill-docs/<scope>/stories/story-NN/review-and-gaps.md` (from `assets/templates/story-review-and-gaps.md`).

### Step 1b: Clarification

Based on the review:
- Capture every blocking and non-blocking question with its impact
- Resolve all blocking questions before proceeding to design (ask the user, look up references, or escalate)
- For non-blocking questions, record the working assumption and proceed
- If there are no questions, still produce the file with an explicit "no clarification questions" statement -- this confirms the review was thorough

**Output:** `mins-dev-skill-docs/<scope>/stories/story-NN/clarifying-questions.md` (from `assets/templates/story-clarifying-questions.md`).

**Lightweight option:** For trivial stories with no integration risk, Steps 1a and 1b may be collapsed into a brief Review and Clarifications section at the top of `technical-design.md` instead of separate files.

### Step 2: Technical Design

Document a technical design for the story:
- What files will be created or modified
- What the data flow looks like
- What integration points exist
- What edge cases need handling
- What the testing approach will be
- The simplest approach that satisfies the acceptance criteria
- Why broader abstractions, extra configuration, or speculative flexibility are not needed

**Output:** `mins-dev-skill-docs/<scope>/stories/story-NN/technical-design.md`

### Step 3: Implementation Checklist

Based on the technical design, create a step-by-step checklist:
- Each step should be a concrete, verifiable action
- Include validation steps inline (not just at the end)
- Include deployment steps if the story requires live validation
- Order steps so partial progress leaves the codebase clean

**Output:** `mins-dev-skill-docs/<scope>/stories/story-NN/impl-checklist.md`

### Step 4: Implement

Execute the checklist step by step:
- Update the checklist as each step completes
- If a step reveals a new requirement, add it to the checklist before continuing
- Touch only what the story requires
- Match existing project style, even if a different style would be preferred
- Do not clean up unrelated code, comments, or formatting
- Remove imports, variables, functions, and files made unused by this change only
- Follow module organization standards:
  - No source file longer than 1000 lines (hard limit)
  - Aim for ~600 lines per file
  - Organize code in logical modules

**Output:** Working code changes. Checklist updated with completion status.

### Step 5: Automated Tests

Write and run tests for the implemented behavior:
- Unit tests for core logic (all languages in the project)
- Integration tests if the story touches integration boundaries
- Regression tests to confirm existing behavior is preserved
- Tests should prove the story's acceptance criteria. For bug fixes, write or identify a failing check that reproduces the issue before fixing when practical.

Run the full test suite, not just new tests.

**Output:** Passing test suite. Test files committed.

### Step 6: Deploy

Deploy to the appropriate environment:
- Use the project's existing deployment mechanism
- If this is the first deployment, establish the deployment pipeline as part of this story
- Verify the deployment succeeded before proceeding to validation

**Output:** Deployed artifact in target environment.

### Step 7: Live Validation

Validate the deployed behavior:
- Execute manual verification steps against the live environment
- Document what was checked and what was observed
- If validation exposes issues, loop back to Step 4

**Output:** `mins-dev-skill-docs/<scope>/stories/story-NN/manual-verification.md`

### Step 8: Knowledge Capture

After the story is complete and validated:
- Document any reusable knowledge, commands, patterns, or gotchas
- Organize in the knowledge directory
- Update the SOP itself if a process improvement was discovered
- Reference knowledge docs in future stories

**Output:** Updated `mins-dev-skill-docs/<scope>/knowledge/` docs. SOP updated if needed.

### Step 9: Update Status

- Mark the story as complete in `story-plan.md`
- Update the `story-plan.md` Overall Status summary so completed / in-progress / not-started counts and next recommended story stay current
- Review whether docs need updates based on what was learned
- Check if the next story's prerequisites are met

**Output:** Updated `mins-dev-skill-docs/<scope>/story-plan.md`.

## Minimum Content Expectations Per Artifact

These are the minimum sections each artifact must contain. Agents may add sections as the story demands; these are floors, not ceilings. All expectations are intentionally language- and framework-agnostic.

### `story.md`

Sections defined by `assets/templates/story-doc.md`: Status, Objective, Why This Story Size Is Right, In Scope, Out of Scope, Dependencies, Implementation References, Deliverables, Acceptance Criteria, Validation, Scope Coverage.

### `review-and-gaps.md`

Story id and title; Reviewed Inputs (including every Implementation Reference from the story doc); Relevant Code and Docs Reviewed (concrete paths/URLs); Implementation Summary (what-to-how translation); Interpretation and Tradeoffs; Architecture and Extension Points; Gaps and Risks; Assumptions.

### `clarifying-questions.md`

Resolution status; Questions list with blocking / non-blocking classification, working assumption (if proceeding), and resolution. If there are no questions, the file must explicitly state "No clarification questions at this stage" -- absence is not the same as confirmed absence.

### `technical-design.md`

Objective; Scope and Out-of-Scope (mirrors the story doc); Simplest viable approach; Architecture and data flow; Component design for each major system area (use whatever component vocabulary fits the project -- "service", "library", "module", "frontend", "backend", "job", etc.); Contracts and interfaces with other components; Configuration and secret-handling approach; Validation and test strategy; File and module change plan with a size-limit check (no source file over 1000 lines, target ~600).

### `impl-checklist.md`

Prerequisites (story dependencies, Implementation References reviewed, review/clarifications produced, design reviewed, success criteria explicit, simplest viable approach identified, change boundary identified); Ordered actionable checkboxes grouped by implementation phase; Inline validation items (not deferred to the end); Completion Summary with validation commands run, validation outcomes, scope changes discovered, and knowledge findings to capture.

### `manual-verification.md`

Prerequisites; Verification Path (local / deployed / both); Executed Steps with reproducible actions; Actual Results with concrete numbers, quoted output, or observed state (not just Pass/Fail); Issues Found loop (Symptom / Cause / Fix Applied / Re-verified); Evidence; Known Limitations.

## Cross-Story Discipline

### Module Size Enforcement

After every story that adds or modifies code, verify:
- No file exceeds 1000 lines
- Files approaching 600 lines should be considered for splitting
- If a file needs splitting, do it in the current story, not "later"

### Regression Testing

After every story, run the full test suite -- not just the tests for the current story.

### Documentation Freshness

After every story, review whether any earlier documentation (scope doc, technical designs, knowledge docs) needs updating based on what was learned.

### Deployment Artifact Cleanliness

Do not ship story-internal labels, placeholder text, debug wording, or tracking identifiers in user-facing surfaces or deployed artifacts. When a story adds local tooling, generated files, or test assets under a deployable directory, update the relevant package-exclude file (e.g., `.gitignore`, `.dockerignore`, `.helmignore`, `.npmignore`, or the project's equivalent packaging-exclusion mechanism) so release packaging excludes those assets. Applies to any deployment mechanism: containers, serverless functions, VMs, static hosting, package publishing, etc.

### Runtime Config Rollout

When a story changes runtime configuration -- whether through environment variables, config files, secret stores, feature flags, or equivalent mechanisms -- verify whether the change takes effect in running instances automatically or requires a manual restart, redeploy, or cache invalidation. If manual action is required, document it in the story tracking and in reusable knowledge docs. If the lack of automatic rollout is a release concern, add the follow-up to the current story scope or to a hardening story.

### Split-Credential Integrations

When an integration uses separate credentials for different operations (for example, one token for writes and another for reads, separate auth for different external APIs, or distinct service accounts for different environments), document and validate both paths explicitly. Do not assume one credential works for all operations -- verify each.

### Secret Handling in Artifacts

No real tokens, passwords, API keys, or connection strings in committed docs, exported configs, story tracking artifacts, or knowledge docs. Use placeholders (`<token_placeholder>`) or safe-loading patterns (`$(command-to-load-secret)`, environment-variable references, secret-manager lookups). This rule applies equally to story docs, knowledge docs, manual verification docs, and external handoff packages.

## When Things Go Wrong

### Live validation fails

1. Diagnose the issue using logs, environment inspection, and debugging
2. If the fix is small, apply it and re-validate
3. If the fix reveals a design gap, update the technical design before fixing
4. Document the failure and resolution in knowledge docs

### External repo changes needed

1. Create a focused handoff document inside the story directory (`mins-dev-skill-docs/<scope>/stories/story-NN/`) with:
   - What needs to change and why
   - The exact files and functions involved
   - A patch or diff if possible
   - Validation steps the other repo should run
   - Context the other agent needs to understand the integration
2. Track the handoff status in the story's manual verification doc

### Story scope creep

1. If a story grows beyond its original acceptance criteria, stop
2. Split the new work into a follow-up story
3. Complete the original story's scope first
4. Add the follow-up story to the story plan

## Optional Per-Story Artifacts

The required artifacts (`story.md`, `review-and-gaps.md`, `clarifying-questions.md`,
`technical-design.md`, `impl-checklist.md`, `manual-verification.md`) cover most stories.
For complex or long-running stories, the following optional artifacts can be added inside
the story directory. Use them when the story warrants it -- most stories need only the
required artifacts.

- **`status-notes.md`** -- running log of scope changes, blockers, decisions made during
  implementation. Useful when a story spans multiple sessions or involves external
  coordination. Keeps the implementation checklist focused on actions rather than narrative.
- **`risk-log.md`** -- tracked risks with likelihood, impact, and mitigation status. Useful
  for stories with high integration uncertainty or external dependencies.
- **`test-evidence.md`** -- detailed test output, command logs, or screenshots when the
  Completion Summary section in `impl-checklist.md` would otherwise become too long. Keeps
  the checklist scannable while preserving the evidence trail.

These files are opt-in. Adding them to a story that does not need them adds noise without
value.
