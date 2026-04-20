# Implementation SOP

## Purpose

This reference is loaded when implementing a story. It defines the standard operating procedure for taking a story from "ready" to "complete" with full validation.

## Artifact Containment

All tracking artifacts (technical designs, checklists, verification docs, knowledge docs, handoff packages) MUST be created inside `mins-dev-skill-docs/<scope>/`. Never create these artifacts elsewhere in the project. Actual source code, tests, and deployment files go wherever the project's conventions dictate.

## The Implementation Loop

For each story, execute these steps in order:

```
Review ? Design ? Checklist ? Implement ? Test ? Deploy ? Validate ? Learn ? Update Status
```

### Step 1: Review

Before touching code:
- Read the story description and acceptance criteria
- Read the scope doc for surrounding context
- Explore relevant existing code and documentation in the repo
- Identify any gaps, inconsistencies, or ambiguities
- Ask clarifying questions if anything is unclear
- Check the knowledge docs from previous stories for relevant lessons

**Output:** Confirmed understanding. Any clarification questions resolved.

### Step 2: Technical Design

Document a technical design for the story:
- What files will be created or modified
- What the data flow looks like
- What integration points exist
- What edge cases need handling
- What the testing approach will be

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
- Review whether docs need updates based on what was learned
- Check if the next story's prerequisites are met

**Output:** Updated `mins-dev-skill-docs/<scope>/story-plan.md`.

## Cross-Story Discipline

### Module Size Enforcement

After every story that adds or modifies code, verify:
- No file exceeds 1000 lines
- Files approaching 600 lines should be considered for splitting
- If a file needs splitting, do it in the current story, not "later"

### Regression Testing

After every story, run the full test suite ? not just the tests for the current story.

### Documentation Freshness

After every story, review whether any earlier documentation (scope doc, technical designs, knowledge docs) needs updating based on what was learned.

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
