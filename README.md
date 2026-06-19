# Brandon Walowitz — Art &amp; Science

Personal portfolio site. A single, self-contained `index.html` with a live WebGL
shader background, a custom-GLSL morphing 3D object, a cinematic HUD overlay, and
a type system built around the "Art &amp; Science" idea (Fraunces serif + JetBrains Mono).

No build step. No dependencies to install. Three.js loads from a CDN at runtime.

---

## View it locally

Just open `index.html` in any modern browser. That's it.

If your browser blocks the CDN font/script over `file://`, run a tiny local server:

```bash
# Python 3
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## Put it on GitHub + go live (GitHub Pages)

### Option A — No terminal (easiest)

1. On GitHub, click **New repository**. Name it (e.g. `art-and-science`). Create it.
2. On the empty repo page, click **uploading an existing file**.
3. Drag in `index.html`, `README.md`, and `.nojekyll`. Commit.
4. Go to **Settings → Pages**. Under **Build and deployment**, set
   **Source: Deploy from a branch**, **Branch: `main` / `root`**. Save.
5. Wait ~1 minute. Your site is live at
   `https://YOUR-USERNAME.github.io/art-and-science/`.

### Option B — Terminal (git history already initialized in this folder)

```bash
# from inside this folder
git remote add origin https://github.com/YOUR-USERNAME/art-and-science.git
git branch -M main
git push -u origin main
```

Then enable Pages as in step 4 above.

> The initial commit author is a placeholder. To use your own identity:
> `git config user.name "Your Name" && git config user.email "you@email.com"`
> then `git commit --amend --reset-author --no-edit` before pushing.

### Custom domain (optional)

In **Settings → Pages → Custom domain**, add your domain and follow the DNS steps.
GitHub creates a `CNAME` file for you.

---

## Customize

Everything lives in `index.html`.

| What | Where | Notes |
|------|-------|-------|
| Contact email | search `b@brandonwalowitz.com` | appears twice (button + `mailto:`) |
| Social links | `<footer>` | LinkedIn |
| Disciplines | `const DISCIPLINES` (top of `<script>`) | edit names + descriptions |
| Credits marquee | `const CREDITS` | add/remove client names |
| About facts | `.facts` block in HTML | plain text |
| Colors | `:root` CSS variables | `--bg`, `--ink`, accents |
| Share preview image | `og:image` meta (commented in `<head>`) | add once you have a 1200×630 image |

## Projects &amp; case studies

The gallery under the client scroll and the individual project pages are driven by
one array called `PROJECTS`, kept identical in **two files**: the top of the
`<script>` in `index.html` and the top of the `<script>` in `project.html`. They're
inlined (not one shared file) so the site renders with zero setup on any host and
over `file://`.

**To add or edit a project:** copy one `{ ... }` block, change the fields, and paste
the same block into the array in *both* files. Keep each `slug` unique — it's the
URL id (`project.html?id=your-slug`).

| Field | Used by | Notes |
|-------|---------|-------|
| `slug` | both | URL id, lowercase-with-dashes |
| `title`, `category`, `year`, `summary` | gallery + page | |
| `accent: ["#hex","#hex"]` | both | gradient for placeholder cover/frames |
| `cover: "img/x.jpg"` | both | optional real cover image; replaces the gradient |
| `intro`, `body: [...]`, `details: [["k","v"]]` | page only | the case-study copy |
| `shots: [{image:"img/a.jpg"},{image:"img/b.jpg",wide:true}]` | page only | optional; omitted → 3 gradient frames generated |

Seed projects are **examples** — swap the copy and drop in real images later. For
images, make an `img/` folder, commit your files, and reference them as
`cover:"img/synergy.jpg"`, `shots:[{image:"img/01.jpg"}]`, etc.

> Want one source of truth instead of two arrays? Say the word and I'll switch you to
> a shared `projects.js` (one file to edit; needs a local server for `file://` preview).

### Shader / 3D tuning (for the curious)

- Background field: `bgFrag` GLSL — palette + domain-warp amounts.
- 3D object: `blobVert` controls displacement (`disp`), `blobFrag` controls the
  iridescent fresnel coloring. Mesh detail auto-lowers on mobile in `initGL()`.

---

## Tech

- Vanilla HTML/CSS/JS, no framework
- Three.js r128 (CDN) for WebGL + custom shaders
- Graceful fallback to a gradient background if WebGL is unavailable
- Respects `prefers-reduced-motion`; pauses rendering when the tab is hidden

Built in-house. © Brandon Walowitz — Art &amp; Science.
