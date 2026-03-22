# CLAUDE.md

## What

SPA that displays paginated commits and pull requests from the Facebook/React GitHub repository. Features client-side pagination (5 items/page), search/filter, dark mode toggle, and graceful fallback to mock data when GitHub API rate limits are hit.

## Tech Stack

- **React 19** + **TypeScript** + **Vite 5**
- **React Router DOM 6** for routing
- **Tailwind CSS 3** for styling (dark mode via `[data-mode="dark"]` selector)
- **MSW 2** for API mocking in tests
- **Vitest 2** + **React Testing Library** for unit/component tests
- **Playwright** for e2e tests
- **pnpm** as package manager

## Project Structure

```
src/
├── components/List/     # Main list with pagination & filtering
├── Pages/               # Route-level components (Commits, Prs)
├── CustomHooks/         # useFetchData hook + mock JSON fallback data
├── Layout/              # Header, SideNav, Footer
├── Contexts/            # LayoutCtx (theme/nav state)
├── models/              # TypeScript interfaces
└── utils/               # Data processing helpers
e2e/                     # Playwright tests
tests/                   # Vitest setup
```

## Commands

```bash
pnpm install       # Install dependencies
pnpm start         # Dev server → http://localhost:5173
pnpm build         # Type-check + production build (tsc && vite build)
pnpm serve         # Preview production build
pnpm test          # Unit tests (watch mode)
pnpm test:ci       # Unit tests (single run, for CI)
pnpm e2e:ui        # E2e tests with Playwright UI
```

## Key Conventions

- **Feature folders**: each component lives in its own directory with an `index.ts` barrel export and colocated `.test.tsx` files
- **GitHub API**: fetches from `https://api.github.com/repos/facebook/react/{commits|pulls}`; falls back to `CustomHooks/mockCommits.json` / `mockPr.json` if rate-limited
- **No `.env` required**: app works out of the box with public API endpoints
- **CI**: GitHub Actions runs unit tests (Node 21) and Playwright on push
