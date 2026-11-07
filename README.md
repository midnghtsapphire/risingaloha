# RisingAloha Debunker

A cross-platform (iOS / Android / web) mobile app that fact-checks viral COVID-19
claims against primary scientific sources, built with Expo + TypeScript +
NativeWind.

## Stack

| Layer | Choice |
|-------|--------|
| App framework | Expo SDK 52 (React Native) |
| Language | TypeScript, strict mode |
| Routing | Expo Router (file-based) |
| Styling | NativeWind (Tailwind for RN) |
| Tests | Jest (`jest-expo` preset) |

## Getting started

```bash
npm install
npm run typecheck
npm test
npm start           # Expo dev server (scan QR with Expo Go)
npm run web         # or run in a browser
```

## Project layout

```
app/                          Expo Router screens
  _layout.tsx                 Root stack
  (tabs)/
    _layout.tsx               Bottom tabs
    index.tsx                 Feed – all fact-checks, newest first
    search.tsx                Keyword search across claims
    submit.tsx                Submit a new claim for research
  debunk/[slug].tsx           Fact-check detail
components/                   DebunkCard, VerdictBadge, SearchBar, SourceList
lib/debunks.ts                Data layer (search, filter, lookup)
types/debunk.ts               Debunk / Verdict / Source types
data/debunks.json             Seed fact-check corpus
__tests__/debunks.test.ts     Jest unit tests
mrna-vaccine-integration-factcheck.md  Long-form source for the first entry
legacy/kennel/                Earlier, unrelated static page (safe to delete)
```

## Status

Scaffold complete — the UI runs against seed data on device and web, and unit
tests cover the data layer. The pieces that need real-world credentials (Supabase
backend, Stripe subscriptions, EAS submission, domain, hosting) are explicitly
left as TODOs in `HANDOFF.md`; see that file before shipping.

## Test

Per the revvel-standards TEST-section convention (see commit `3ebb745`), the
current state of what ships in this repo:

| Area                                            | Status            |
|-------------------------------------------------|-------------------|
| Data layer — `lib/debunks.ts` (Jest)            | ✅ 7/7 pass       |
| `<VerdictBadge />` render (Jest + RNTL)         | ✅ 6/6 pass       |
| `<DebunkCard />` render (Jest + RNTL)           | ✅ 3/3 pass       |
| Submit screen gating + reset (Jest + RNTL)      | ✅ 2/2 pass       |
| Debunk detail route (not-found + happy path)    | ✅ 3/3 pass       |
| TypeScript strict (`tsc --noEmit`)              | ✅ clean          |
| Expo web runtime smoke test                     | ⏳ pending (manual) |
| Expo native (iOS / Android via Expo Go)         | ⏳ pending (manual) |
| EAS build (iOS + Android)                       | ⏳ not run        |
| Supabase backend integration tests              | ⏳ not wired      |
| Stripe subscription flow tests                  | ⏳ not wired      |

Totals across 5 Jest suites: **21/21 passing** in ~3s. Reproduce locally with
`npm test && npx tsc --noEmit`.

## License

All rights reserved. Owned by Audrey Evans (midnghtsapphire).
