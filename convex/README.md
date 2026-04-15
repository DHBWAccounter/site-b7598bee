# Convex backend scaffold

This directory contains the tenant app's Convex backend.

Krin deploys production Convex backends outside this repo. For local development and codegen refresh,
run `npx convex dev` (or `CONVEX_AGENT_MODE=anonymous npx convex dev --once` for a one-shot refresh)
from the project root.

Scaffold conventions:

- `NEXT_PUBLIC_CONVEX_URL` is the browser-facing environment variable used by the frontend.
- `convex/_generated/*` stays checked in, but should be refreshed during local verification.
- `CONVEX_DEPLOY_KEY` is not part of the tenant repo contract.
- Replace the neutral scaffold in `schema.ts` and `myFunctions.ts` with app-specific tables, queries, and mutations.

Use the Convex CLI to regenerate helpers and inspect the project:

- `npx convex dev`
- `npx convex dev --once`
- `npx convex docs`
