# Prerna Kakkar — Portfolio

Built with Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Before you deploy — things to personalise

1. **Your photo** — drop a headshot at `public/photo.jpg` (square-ish, at
   least 300x300px works best). The `Avatar` component automatically
   detects it and switches from the "PK" placeholder to your real photo,
   in both the nav and the About section. No code changes needed, just
   add the file.
2. **Contact details** — `lib/data.ts`, the `contact` object: email,
   LinkedIn, and GitHub are already filled in with your real details.
3. **Live link for AI Governance Console** — `lib/data.ts`, `caseStudies`,
   the `ai-governance-console` entry: replace the placeholder Vercel URL
   with the actual live URL once you confirm it.
4. **Resume** — drop your resume PDF at `public/resume.pdf`. The "Resume"
   button in the nav links there directly.
5. **Jinn Live / Ylytic links** — currently no external links since those
   are enterprise/private products. Add them to the `links` array in
   `lib/data.ts` if you ever have something public to point to (e.g. a
   case-study write-up).
6. Proofread every case study summary and metric one more time before
   this goes live and public.

## Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Deploy to Vercel

**Option A — via GitHub (recommended, gives you auto-deploys on every push):**

1. Create a new empty repo on GitHub (e.g. `prerna-portfolio`).
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/kakkarprerna/prerna-portfolio.git
   git push -u origin main
   ```
3. Go to [vercel.com/new](https://vercel.com/new), import the repo, keep
   the default Next.js build settings, and deploy.
4. Optional: add a custom domain under Project → Settings → Domains.

**Option B — Vercel CLI (fastest, no GitHub repo needed first):**

```bash
npm install -g vercel
vercel
```

Follow the prompts. Running `vercel --prod` after ships it to your
production URL.

## Project structure

```
app/            Root layout, global styles, the single page route
components/     Nav, Hero, Work, CaseStudyCard, Principles, About, Contact
lib/data.ts     All editable content — case studies, principles, bio, contact
```

Everything you'll want to update lives in `lib/data.ts` — you shouldn't
need to touch the components to change copy, add a project, or update a
metric.
