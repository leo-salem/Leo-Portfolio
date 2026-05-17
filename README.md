# Mohamed Salem - Portfolio

Personal portfolio site. Pure HTML + CSS + a single line of JS. No build step,
no framework, no dependencies. Loads in well under a second.

## Files

```
portfolio/
  index.html                    main page
  style.css                     dark theme, mobile-responsive
  app.js                        single line: sets the current year in the footer
  assets/
    profile.jpg                 hero photo
    Mohamed_Salem_CV.pdf        downloadable CV
  README.md                     this file
```

## View locally

Just open `index.html` in any browser. No server required.

```
start index.html
```

Or, for proper paths if you prefer a local server:

```
python -m http.server 8000
```

Then visit http://localhost:8000.

## Deploy to GitHub Pages (recommended)

1. Create a new repo on GitHub named **leo-salem.github.io** (this exact name
   gives you a free user-site at `https://leo-salem.github.io`).
2. Push this folder's contents to that repo:

```
cd C:\Users\PC\Desktop\portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/leo-salem/leo-salem.github.io.git
git push -u origin main
```

3. In the repo's Settings -> Pages, confirm the source is `main` branch / `/ (root)`.
4. Wait ~1 minute. The site goes live at https://leo-salem.github.io.

If you'd rather use a project-site (e.g. `leo-salem/portfolio` rather than the
user-site), the URL becomes `https://leo-salem.github.io/portfolio/` and you
need to enable Pages in the repo settings.

## Custom domain (optional)

If you buy a domain later (e.g. `mohamedsalem.dev`):

1. In the repo, create a file called `CNAME` containing only `mohamedsalem.dev`.
2. At your domain registrar, add a CNAME record pointing the apex (or `www`)
   to `leo-salem.github.io`.
3. GitHub Pages will auto-issue an HTTPS certificate within a few minutes.

## Updating

Just edit `index.html` (or `style.css`), commit, and push. GitHub Pages
re-deploys within ~30 seconds.

## What it includes

- Hero with photo, name, role, tagline, bio, CTAs, and social links
- About section with education and what you're open to
- 4 project cards: Poly-Clinic-System, E-Commerce-API, Gitlet,
  PathFinder Visualizer - each with problem statement, technical decisions,
  stack badges, and a GitHub link
- Skills grouped by category
- Achievements (ECPC, Codeforces, problem count)
- Contact section with email, LinkedIn, GitHub, Codeforces, phone, location
- Sticky nav with smooth scroll
- Open Graph + Twitter Card meta tags for nice LinkedIn / Twitter previews

## Design rationale

Based on 2026 best-practice surveys: no heavy animations, no three.js,
no particles, no JS frameworks. Recruiters open portfolios on phones, so
mobile-first. Content needs to be visible in under a second. The projects
section does ~80% of the heavy lifting in landing interviews, so each card
explains the problem solved, the technical decisions made, and the stack
used - not just "I built X."
