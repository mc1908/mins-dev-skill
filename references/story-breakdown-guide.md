# Story Breakdown Guide

## Purpose

This reference is loaded when decomposing a feature scope into implementation stories. It provides sizing heuristics, decomposition patterns, and ordering principles.

## Story Sizing Heuristic

The core principle: break stories so they are **not too small that you cannot validate a milestone end to end, nor too big that they are too complex to finish in a clean scope**.

### Signs a Story Is Too Small

- Cannot be deployed and validated independently
- Has no meaningful acceptance criteria beyond "file was changed"
- Cannot demonstrate a user-visible or system-observable behavior change
- Would require combining with another story before any testing is possible

### Signs a Story Is Too Big

- Touches more than 3 distinct integration boundaries (e.g., UI + API + external service + database)
- Cannot be described in one sentence without conjunctions
- Requires more than one deployment cycle to validate
- Has acceptance criteria that span multiple independent behaviors
- Would take more than one focused agent session to implement and validate

### The Sweet Spot

A well-sized story:
- Produces a deployable, testable increment
- Has 2-5 concrete acceptance criteria
- Can be implemented, tested, and validated in one focused session
- Leaves the codebase in a clean state (no half-done features)

## Decomposition Process

### 1. Start From the Scope Document

Read the scope doc (`scope.md`) and identify the major functional areas. Each functional area is a candidate story group.

### 2. Identify the Foundation Story

The first story should establish the minimum viable skeleton:
- Project setup, directory structure, entry points
- Core data flow without edge cases
- Deployable to at least a dev environment
- Enough surface area for the first live validation

### 3. Layer Stories by Dependency Order

Each subsequent story should build on the foundation:
- Stories should be ordered so each one can be validated independently
- Avoid stories that require another unfinished story to be testable
- If two stories have no dependency, prefer the one that validates more assumptions

### 4. Ensure Full Coverage

After decomposition, verify:
- Every requirement in the scope doc maps to at least one story
- No orphaned requirements exist
- The combined stories cover all acceptance criteria

### 5. Identify Cross-Cutting Concerns

Some concerns span multiple stories:
- Refactoring and module-size discipline (add to SOP, not as a separate story)
- Knowledge capture (built into each story's completion step)
- Deployment and environment configuration (addressed in the first story that needs it)

## Story Plan Document Structure

The story plan document (`mins-dev-skill-docs/<scope>/story-plan.md`, from `assets/templates/story-plan.md`) should include:

1. **Planning Principles** -- project-specific principles discovered during scope clarification, written before listing stories so the decomposition has a stated rationale
2. **Story list** -- numbered, with one-line summary AND a Primary Outcome (the milestone the story delivers)
3. **Story Granularity Rationale** -- per story, why it is not smaller and not larger
4. **Validation Strategy By Story** -- one line per story stating what validation proves at that milestone
5. **Dependency order and graph** -- which stories must complete before others, including an explicit graph (text or mermaid)
6. **Coverage matrix** -- mapping from scope requirements to stories
7. **Deliverables to create** -- the per-story documents and tracking directories that this plan implies
8. **Status tracking** -- current state of each story (not started / in progress / complete)

## Per-Story Document

Every story produced during decomposition gets its own story document at `mins-dev-skill-docs/<scope>/stories/story-NN/story.md`, created from `assets/templates/story-doc.md`. The story doc is the single source of truth for that story's scope, dependencies, Implementation References (the forward-link to knowledge), deliverables, acceptance criteria, and validation. Each story doc must include a **Why This Story Size Is Right** paragraph that defends the sizing decision against the heuristics above (why not smaller, why not larger).

## Ordering Principles

1. Foundation first ? establish the skeleton and deployment pipeline
2. Highest-risk integrations early ? validate external dependencies before building on assumptions
3. User-visible behavior before internal plumbing ? get feedback loops running
4. Refactor as you go ? absorb structural improvements into the story that discovers the need
