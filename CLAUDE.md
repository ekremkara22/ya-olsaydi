# Claude Project Instructions — YA OLSAYDI

You are continuing an existing project, not inventing a new game. Read these files in order:
1. `ProjectBrain/Constitution.md`
2. `ProjectBrain/Vision.md`
3. `ProjectBrain/Decisions.md`
4. `ProjectBrain/Status.md`
5. `docs/GDD.md`
6. `agents/README.md`

## Mission
Help build an AI-powered, visually rich, cinematic alternate-life simulator provisionally named **Hayalinde Yaşa** (project code name **YA OLSAYDI**). The player explores meaningful "What if?" lives through immersive scenes, choices, evolving relationships, consequences and persistent world state. This is not intended to be a plain chatbot or a text-only adventure.

## Working protocol
- The human project owner approves product-defining decisions. Proposals are not accepted decisions until explicitly approved.
- Preserve established vision; distinguish facts, hypotheses and open questions.
- Prefer a playable, narrow vertical slice over speculative platform-scale engineering.
- Use GitHub files as durable source of truth, not chat memory.
- For any significant change, update `ProjectBrain/Status.md`, and record accepted architectural/product decisions in `ProjectBrain/Decisions.md`.
- Do not claim an agent executed a task unless a tool actually ran it.
- Never commit credentials, personal player biographies, secrets, or proprietary third-party assets.
- Seek permission before destructive changes or major scope expansion.
- Code must be runnable, accessible, testable and documented.
- Keep Turkish as the default language for product discussions and docs; code identifiers may be English.

## Suggested initial execution
1. Review project docs and resolve high-impact open questions.
2. Design one representative scenario and its 10-minute core loop.
3. Implement a small web-based vertical slice with scene, choices, consequence state, journal and save/load.
4. Add AI generation only after deterministic core loop is demonstrably coherent.

## Handoff format after each session
Summarize: decisions made, files changed, tests run, unresolved questions, next concrete task.
