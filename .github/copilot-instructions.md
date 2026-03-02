# Copilot playbook for `bali-breeze-builder`

## Big picture

- Single-page marketing site rendered by `App.tsx`, with routing handled by `react-router-dom` (currently only `/` mapped to `pages/Index.tsx` and a `NotFound`).
- `Index.tsx` stitches together section components under `src/components`, each responsible for a self-contained slice of the landing page.
- Global providers live in `App.tsx`: `QueryClientProvider` (ready for future data fetching), custom toast provider (`components/ui/toaster.tsx` + `hooks/use-toast.ts`), the Sonner toaster, and `TooltipProvider`.

## Build & run

- Install deps with `npm install`; run the dev server via `npm run dev` (Vite serves on port `8080` per `vite.config.ts`).
- Build with `npm run build`; preview production bundle with `npm run preview`.
- Lint with `npm run lint` (ESLint 9 + flat config).

## Styling & design system

- Tailwind + shadcn-ui drive styling. Utility helpers live in `components/ui`, relying on `cn` from `src/lib/utils.ts`.
- Global design tokens are declared as CSS variables in `src/index.css`; colors **must** be HSL. Custom utility classes like `.container-custom`, `.section-padding`, and `.gradient-text` form the layout rhythm.
- Tailwind is configured in `tailwind.config.ts` with custom fonts (`Playfair Display`, `Lato`) and animation utilities (`tailwindcss-animate`). Use existing tokens instead of ad-hoc colors.

## Interaction patterns

- Section navigation is ID-based (`Navigation.tsx` calls `scrollIntoView`); always add matching `id` attributes when introducing new sections to keep smooth scrolling intact.
- WhatsApp CTAs (`Hero`, `Contact`, `FloatingWhatsApp`) share the same hard-coded phone number. If you update it, change all three locations or centralize it in a constant.
- Toast notifications use `hooks/use-toast.ts`, which enforces a single active toast (`TOAST_LIMIT = 1`). Trigger feedback via `const { toast } = useToast()`.
- `components/ui/sonner.tsx` reads the theme via `next-themes`; if you introduce dark-mode toggling, wrap the app with an actual `ThemeProvider` from `next-themes`.

## Data & content conventions

- Static copy, imagery, and icon selections are embedded directly in each section component (e.g., feature arrays in `Services.tsx`, testimonial data in `Testimonials.tsx`). Keep data colocated unless it becomes shared.
- Static assets live under `src/assets`; import them with the `@` alias defined in `vite.config.ts`.

## Extension & integration notes

- Prefer building new UI atoms by following the shadcn pattern inside `components/ui` so they inherit existing variants and typography.
- React Query is initialized but unused; when adding real data fetching, create hooks in `src/hooks` that use `useQuery` / `useMutation` and rely on the shared `QueryClient` in `App.tsx`.
- The dev-only `lovable-tagger` plugin in `vite.config.ts` tags components for Lovable’s editor—keep it enabled when editing through Lovable.

## Quality checks

- There are no automated tests; rely on `npm run lint` and manual browser smoke tests.
- Before shipping, verify responsive breakpoints (mobile nav toggles below 768px) since several effects depend on scroll and viewport width (`use-mobile.tsx`).
