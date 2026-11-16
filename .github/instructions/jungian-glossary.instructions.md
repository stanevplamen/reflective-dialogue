---
description: "Use when creating or editing English or Bulgarian blog articles, especially when mentioning Jungian psychology concepts, glossary terms, or clickable definitions."
applyTo: "src/*Article.tsx"
---
# Jungian glossary in articles

- For every new or edited article, check its English and Bulgarian text for Jungian concepts already defined in `src/glossary.ts`. Wrap meaningful explanatory uses in the existing `GlossaryTerm` component from `src/components.tsx`, using the matching `GlossaryTermKey` and the article language (`EN` or `BG`).
- Link terms where the concept is being explained or used in a Jungian sense. Do not mark every incidental or generic use of a word just because it resembles a glossary term.
- When a relevant Jungian concept used in an article has no glossary entry, add one bilingual English/Bulgarian definition to `src/glossary.ts` and use it in the applicable localized articles. Keep definitions concise (about 2–3 sentences), accurate, contextual, and clear that interpretive concepts are not fixed or universal meanings.
- Preserve the author’s supplied article wording unless asked to edit it; add the component around the existing term without otherwise changing the text.
- Follow `AGENTS.md` and `ARTICLE_PUBLISHING.md` for the rest of the article workflow. Run the project build after changing article or glossary code.
