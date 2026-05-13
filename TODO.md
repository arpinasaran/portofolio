# Portfolio TODO

Quick-pass update done. Below is what still needs work before this portfolio is "good enough" for sharing in CV/applications.

## High Priority (do before sharing the link)

- [ ] **Project images** — current page uses `/images/nusantap-app.png` and `/images/jaki-app.jpg` for old projects only. New projects (Merdesa, SRIKANDI, NutriAI, Satria Data, Bobobu, Polyglot) have no images. Either:
  - (a) Add screenshots/cover images per project (recommended)
  - (b) Keep text-only cards (current state — acceptable but plain)
- [ ] **Project links** — once you have a Google Drive folder of decks/PPTs, add an "Open Deck" button per project linking to the relevant PDF/PPT. Pattern: `<Link href="https://drive.google.com/..." target="_blank">View Deck</Link>` inside each project card.
- [ ] **Testimonials** — `<TestimonialCarousel />` is still using whatever placeholder data exists. Decide: keep testimonials, replace with new ones, or remove the section entirely.
- [ ] **Profile photo** — `/images/arvin-photo.jpg` is the existing one. Replace if you want.

## Medium Priority

- [ ] **Verify volunteer entries** — "Vice Project Director — Referendum TSA UI", "Jakarta Mengabdi", "GDGOC Academic Team / KRITIS" are kept from old version. Confirm these are still accurate, or remove.
- [ ] **Add Leximate** if you want it back — old portfolio mentioned "Leximate, an app for dyslexic individuals" as the Mawapres project. Currently not in CV/portfolio. Add if relevant.
- [ ] **About section copy** — first paragraph (Indonesian NLP framing) is solid. Second paragraph (leadership) is light. Consider adding a personal story / origin paragraph if you want warmth.
- [ ] **Add Skills section** — current portfolio has no Skills section. CV has 7 grouped rows. Consider adding a brief Skills section (icons or tags) between Achievements and Projects, OR drop entirely since cards already mention tech stack.
- [ ] **Future section** — currently very short. Either expand with a vision paragraph, or remove (the section adds little).

## Nice to Have

- [ ] **Resume download button** in intro — `<Button asChild><Link href="/CV_ArvinWijayanto.pdf">Download CV</Link></Button>` after dropping the latest PDF in `public/`.
- [ ] **Dark mode polish** — currently uses theme provider but theme toggle isn't visible.
- [ ] **SEO** — set proper `metadata` in `app/layout.tsx` (title, description, OG image).
- [ ] **Analytics** — `@vercel/analytics` is already in dependencies; verify it's wired up in layout.
- [ ] **404 page** — Next 15 will show a default 404; consider customizing.
- [ ] **Deploy URL alignment** — confirm `arvinwijayanto.vercel.app` points to this repo. Update DNS / Vercel project link if needed.

## Content Verifications

- [ ] **Pintarly dates** — currently "Dec 2025 — Feb 2026". Confirm exact start month.
- [ ] **Tanoto Foundation Scholarship** — when did this start? Add year if relevant.
- [ ] **ICPC Regional Asia-Jakarta** — confirm year 2024.
- [ ] **Coursework** — relevant courses listed in Education match CV (AI, Data Science, IR, Statistics, Database, Big Data). Confirm.

## Stack / Maintenance Notes

- Built on Next.js 15 + Tailwind CSS + Radix UI (shadcn).
- All sections are in a single `app/page.tsx` (~570 lines). If it grows further, consider splitting into per-section components under `components/sections/`.
- Project cards are currently inline JSX — for easier maintenance, consider extracting a `<ProjectCard>` component with props.
- Achievement cards likewise — `<AchievementCard rank="1st" title="..." desc="..." />` would be cleaner.

## When You Have Google Drive Decks Ready

Once you've uploaded PPTs/PDFs to a Drive folder (view-only sharing):

1. Add a "View Deck" / "View Proposal" button inside each relevant project card. Example:
   ```tsx
   <Link
     href="https://drive.google.com/file/d/..."
     target="_blank"
     className="text-sm text-cream-beige underline mt-2 inline-block"
   >
     View Deck →
   </Link>
   ```
2. Optionally add a single top-level "Portfolio Decks" button in the intro section linking to the Drive folder.
3. Update CV to reference this portfolio URL when applications ask for it.
