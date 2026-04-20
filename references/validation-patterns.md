# Validation Patterns

## Purpose

This reference is loaded when setting up or running validation for a story. It provides patterns for unit testing, deployment validation, live environment checks, and cross-repo coordination.

## Validation Layers

Effective validation uses multiple layers. Each layer catches different classes of problems:

```
Unit Tests ? Integration Tests ? Deployment ? Live Validation ? Cross-Repo Validation
```

Not every story needs all layers. Use the minimum set that gives confidence the story works.

## Layer 1: Unit Tests

### When to Use

Every story that adds or modifies logic.

### Patterns

- Test core logic in isolation, independent of external services
- Cover both happy paths and meaningful edge cases
- Test all languages in the project (not just the primary one)
- Keep tests fast -- if a test needs network or database, mock it

### Common Gaps to Watch For

- Only testing the primary language when the project is multi-language
- Only testing happy paths
- Not running the full test suite after changes (regression)

### Checklist

- [ ] Unit tests written for new logic
- [ ] Existing tests still pass
- [ ] All project languages have test coverage

## Layer 2: Integration Tests

### When to Use

Stories that touch integration boundaries (APIs, databases, external services).

### Patterns

- Test the boundary behavior, not the internals
- Use test fixtures or staging environments
- Verify error handling at the boundary (timeouts, auth failures, bad data)

## Layer 3: Deployment Validation

### When to Use

Any story that needs to be deployed to verify behavior.

### Patterns

- Deploy to the dev/staging environment using the project's standard mechanism
- Verify the deployment itself succeeded (pod running, routes accessible, health checks passing)
- Check for environment-specific issues (mixed content, TLS, DNS)

### Common Issues Caught at This Layer

- Static assets blocked by mixed-content policies (HTTP vs HTTPS)
- Environment variables not set or misconfigured
- Container image not built with latest changes
- Route/ingress configuration mismatches

## Layer 4: Live Validation

### When to Use

Stories with user-facing behavior or external service integration.

### Patterns

- Execute the manual verification steps documented for the story
- Use real credentials and real service endpoints (not mocks)
- Verify both the success path and at least one error path
- Document exactly what was checked and the observed result with concrete numbers, quoted output, or state -- not just Pass/Fail

### Manual Verification Document

Use the template at `assets/templates/story-manual-verification.md` and write the output to
`mins-dev-skill-docs/<scope>/stories/story-NN/manual-verification.md`. The template enforces
concrete observed results, an Issues Found loop (symptom / cause / fix / re-verified), and a
Known Limitations statement.

## Layer 5: Cross-Repo Validation

### When to Use

Stories that require changes in an external repository.

### Handoff Package

Use the directory template at `assets/templates/external-handoff-package/`. Copy the entire directory into the originating story's tracking folder (`mins-dev-skill-docs/<scope>/stories/story-NN/handoff-<short-name>/`) and populate each file. The package is intentionally self-contained: the receiving agent should not need access to this repo's history to do the work.

The package contains:

| File | Purpose |
|------|---------|
| `README.md` | Package contents and recommended usage workflow |
| `agent-prompt.md` | Copy-paste ready prompt for the receiving agent |
| `integration-context.md` | Background, behavior contract, acceptance criteria, interface specs |
| `validation-and-test-plan.md` | Validation expectations, test cases, command checklist, definition of done |
| `fixtures/` | Sample payloads, test data, mock responses, configuration examples |

Track the handoff status in the originating story's `manual-verification.md`.

### Patch Generation Discipline

When the handoff includes a code patch (diff for the target repo to apply):

- **Snapshot the original state** before modification so the diff is reproducible.
- **Generate diffs with paths relative to the target repo root**, not the source repo root.
- **Verify the patch applies cleanly** in the target repo before handoff (`git apply --check`, `patch --dry-run`, or the project's equivalent).
- **Watch for transient or generated files** that can pollute the patch: build artifacts, caches, lockfile churn unrelated to the change, editor metadata, OS metadata. Strip them before handoff.
- **Semantic correctness over patch cleanliness.** If the target repo has diverged, a clean-applying patch matters less than describing the change clearly enough that the receiver can re-implement it. Prefer a precise `integration-context.md` over a brittle patch.
- **Tool-agnostic.** The patch can be a `git diff`, a directory comparison, a unified-diff text file, or a set of file-level diffs -- whichever fits the project. Document which format was used.

## When Validation Finds Problems

1. **Diagnose before fixing** ? read logs, inspect state, understand the root cause
2. **Fix the root cause** ? not just the symptom
3. **Re-validate** ? run the same checks that found the problem
4. **Document the lesson** ? add to knowledge docs so future stories avoid the same issue
5. **Update the SOP if needed** ? if the problem reveals a process gap
