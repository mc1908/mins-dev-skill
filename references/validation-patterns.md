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
- Keep tests fast ? if a test needs network or database, mock it

### Common Gaps to Watch For

- Only testing Python when the project also has JavaScript
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
- Document exactly what was checked and the observed result

### Manual Verification Document Structure

```markdown
# Manual Verification ? Story NN

## Environment
- Target: [environment name and URL]
- Date: [verification date]

## Checks
| # | Check | Expected | Observed | Status |
|---|-------|----------|----------|--------|
| 1 | [description] | [expected behavior] | [what happened] | Pass/Fail |

## Issues Found
- [issue description and resolution]

## Evidence
- [screenshots, logs, or links to artifacts]
```

## Layer 5: Cross-Repo Validation

### When to Use

Stories that require changes in an external repository.

### Patterns

Create a handoff package that includes:

1. **Context document** ? What the change achieves and why
2. **Exact file targets** ? Which files and functions need modification
3. **Patch or diff** ? If possible, a ready-to-apply patch
4. **Unit test expectations** ? What tests the external repo should run
5. **Validation plan** ? How to verify the change works in integration
6. **Integration context** ? What the calling repo expects from the external repo

### Handoff Document Template

```markdown
# External Repo Handoff ? [Description]

## Goal
[One sentence: what this change achieves]

## Files to Modify
- [file path]: [what to change]

## Patch
[inline patch or reference to patch file]

## Testing
- [ ] [unit test expectation]
- [ ] [integration test expectation]

## Validation
- [ ] [how to verify in isolation]
- [ ] [how to verify in integration with the calling repo]
```

## When Validation Finds Problems

1. **Diagnose before fixing** ? read logs, inspect state, understand the root cause
2. **Fix the root cause** ? not just the symptom
3. **Re-validate** ? run the same checks that found the problem
4. **Document the lesson** ? add to knowledge docs so future stories avoid the same issue
5. **Update the SOP if needed** ? if the problem reveals a process gap
