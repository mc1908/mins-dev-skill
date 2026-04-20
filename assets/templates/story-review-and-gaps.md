# Review and Gaps -- Story [NN]: [Title]

<!--
Produced during SOP Step 1a (Review), before any technical design work.
Output of: load Implementation References from story.md, explore the repo, identify gaps.
For trivial stories with no integration risk this file may be collapsed into a brief section
at the top of technical-design.md instead of a separate file.
-->

## Story

Story [NN]: [title] -- link to `story.md`

## Reviewed Inputs

<!--
Every document loaded during review. At minimum this should include the story doc and every
entry from its Implementation References section. Add the scope doc, prior-story artifacts,
and any external references consulted.
-->

- `mins-dev-skill-docs/<scope>/scope.md`
- `mins-dev-skill-docs/<scope>/stories/story-NN/story.md`
- [each Implementation Reference from story.md]
- [other docs reviewed]

## Relevant Code and Docs Reviewed

<!--
Actual files, paths, modules, or external URLs explored in the repo or elsewhere.
Language-agnostic: list whatever exists -- source files, configs, schemas, API specs, dashboards.
-->

- [path/to/file] -- [why it was reviewed]
- [path/to/file] -- [why it was reviewed]

## Implementation Summary

<!--
Translate the story from WHAT to HOW. Describe the approach in implementation terms
without committing to a full design yet. 1-3 short paragraphs.
-->

[Approach summary.]

## Architecture and Extension Points

<!--
What already exists that can be reused, what must be created, what integration points exist.
Framework-neutral: this works for a microservice, CLI tool, library, UI component, infra module, etc.
Use whatever component vocabulary fits the project.
-->

- **Reusable:** [existing modules, services, helpers, configs that this story can extend]
- **To create:** [new components/modules/files this story will introduce]
- **Integration points:** [where this story touches other systems, internal or external]

## Gaps and Risks

<!--
Numbered list. Each entry: what is missing or uncertain, and why it matters for this story.
A gap that does not affect this story's completion belongs in the project backlog, not here.
-->

1. [Gap or risk] -- why it matters: [...]
2. [Gap or risk] -- why it matters: [...]

## Assumptions

<!--
Numbered list. Each entry: the assumption, why it matters, and the disposition
(proceed-with-assumption, or block-until-resolved-via-clarifying-questions).
-->

1. [Assumption] -- matters because [...] -- disposition: [proceed | block]
2. [Assumption] -- matters because [...] -- disposition: [proceed | block]
