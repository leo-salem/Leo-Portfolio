# My portfolio

Source for my personal site. I'm Mohamed Salem — fresh CS grad from Menofia
University, Java backend dev based in Cairo.

It's plain HTML and CSS, no framework, no build step. The reason: I read a
survey of 60+ hiring managers that basically said "stop wasting time on
portfolio websites, just make something that loads fast and tells your
story." That stuck. The whole thing is around 20 KB before the photo.

## Live site

Will be at **https://leo-salem.github.io** once I push this to the
`leo-salem.github.io` repo on GitHub. Until then you can open it locally.

## Run it locally

Open `index.html` in any browser. That's the entire setup.

```
start index.html
```

If you'd rather have a local server (better paths, optional):

```
python -m http.server 8000
```

Then visit http://localhost:8000.

## What's in here

```
portfolio/
├── index.html              the page
├── style.css               dark theme, mobile-first
├── app.js                  tiny — sets the footer year and last-updated stamp
├── assets/
│   ├── profile.jpg
│   └── Mohamed_Salem_CV.pdf
└── README.md               you are here
```

## Deploying to GitHub Pages

I'm going with a user-site: name the repo `<your-username>.github.io` and
GitHub auto-publishes it at `https://<your-username>.github.io`. Steps:

1. Rename (or create) the repo so it's literally `<your-username>.github.io`.
2. Push to `main`.
3. In Settings → Pages, confirm source is `main` / root.
4. Wait about a minute. Done.

For a normal project-site instead, just enable Pages in Settings and the
URL becomes `https://<user>.github.io/<repo-name>/`.

## Custom domain (later)

If I buy one, I'll drop a `CNAME` file in the root containing just the
domain, point a DNS record at GitHub Pages, and GitHub auto-issues an
HTTPS cert within a few minutes.

## Updating

Edit, commit, push. GitHub Pages re-deploys in about 30 seconds.

---

If you're a recruiter or fellow engineer reading this, feel free to poke
around — my contact info is on the site.
