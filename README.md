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

## License

All rights reserved. Owned by Audrey Evans (midnghtsapphire).
