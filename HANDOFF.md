# HANDOFF — RisingAloha Debunker

## What was shipped this pass

- Expo (SDK 52) + TypeScript (strict) + NativeWind scaffold at repo root.
- Expo Router with a tabbed shell: Feed, Search, Submit. Detail route at
  `/debunk/[slug]`.
- Typed data layer (`lib/debunks.ts`, `types/debunk.ts`) over a JSON seed
  (`data/debunks.json`) — 5 entries, including the mRNA / chromosome-19
  fact-check from the first merged PR.
- Reusable components: `DebunkCard`, `VerdictBadge`, `SearchBar`, `SourceList`.
- Jest tests (`__tests__/debunks.test.ts`) covering search, lookup, filter,
  sorting, and shape of every seed entry.
- Legacy K9 static page moved to `legacy/kennel/` so nothing is lost.
- `.env.example` with the variables each TODO integration will need.

## What is NOT done — deliberately

These need credentials, money, legal review, or an owner sign-off. **Do not
provision them without Audrey's say-so.**

1. **Supabase backend.**
   - Tables needed: `debunks`, `submissions`, `sources`, `profiles`,
     `subscriptions`.
   - Replace `lib/debunks.ts` static reads with Supabase queries; keep the same
     function signatures so screens don't need to change.
   - `app/(tabs)/submit.tsx` currently sets local state only — wire the submit
     handler to `supabase.from('submissions').insert(...)`.
   - Auth: Supabase Auth with `expo-secure-store` for session persistence
     (already in deps).
2. **Stripe subscription.**
   - Needs the publishable + secret keys in env; see `.env.example`.
   - Build `app/(tabs)/subscribe.tsx` and a `lib/stripe.ts` client. Payment
     sheet via `@stripe/stripe-react-native` (not yet added).
3. **SEO / keyword discovery.**
   - Comment in the merged PR asks to source claims from what people are
     actually searching. Candidates: Google Trends (free), DataForSEO (paid),
     Ahrefs API (paid). Add a nightly job that writes top queries into a
     `candidate_claims` table for human review before fact-checking.
4. **Research pipeline.**
   - The comment asks for "swarms and sub-agents" that scrape the web and
     generate draft debunks. That is a separate repo (a Node worker calling
     an LLM API), not an app concern. Keep the app as the publication surface.
5. **Domain + hosting.**
   - No domain registered. Suggested: `risingaloha.com` or
     `alohadebunker.com`. Register under the midnghtsapphire org account.
   - Web: static export (`npx expo export -p web`) → Cloudflare Pages or
     Netlify.
   - Mobile: `eas build --platform all`, then `eas submit`. Apple Developer and
     Google Play accounts needed.
6. **Icons & splash.** `app.json` references no icons yet — add `assets/icon.png`
   (1024×1024) and `assets/splash.png` once a logo exists.
7. **"revvel-standards".** No public definition found; ask Audrey what this
   refers to before implementing.

## Verify locally

```bash
npm install          # first time, pulls Expo + RN + NativeWind
npm run typecheck    # strict TS
npm test             # Jest – data-layer tests
npm run web          # smoke-test in a browser
```

## Known trade-offs

- Pinned Expo SDK 52. If `npm install` resolves a newer SDK, run `npx expo
  install --fix` to realign peer deps.
- `legacy/kennel/index.html` is static and irrelevant to the app; delete when
  convenient.
- `components/SearchBar.tsx` uses an inline hex placeholder color because
  NativeWind doesn't drive `placeholderTextColor`; keep it in sync with
  `tailwind.config.js` `ink.500`.
