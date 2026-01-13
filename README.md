# PhD Research Portfolio (Vite + React + Tailwind v4)

This project is a PhD-application focused research portfolio using the **same styling system** as your main site
(Tailwind v4 + your existing `index.css`).

## 1) Run locally

> **Windows tip:** Avoid installing inside OneDrive-synced folders (can cause EPERM file-lock issues).
> Use a path like `C:\dev\phd-research-portfolio`.

```bash
npm install
npm run dev
```

If your network is flaky and `npm install` fails with ECONNRESET, try:
- switch network / hotspot, or
- `pnpm install` (after `npm i -g pnpm`)

## 2) Add your documents (PDFs)

Put your PDFs here:

```
public/docs/
  Jithendra_Kantharaju_CV.pdf
  Resume_JK_PHD.pdf
  SOP_USF_CE.pdf
  Selected_Publication_1.pdf
```

They will be accessible as:
- `/docs/Jithendra_Kantharaju_CV.pdf` etc.

## 3) Configure contact form (optional)

Copy `.env.example` to `.env` and fill EmailJS keys:
```bash
copy .env.example .env
```

## 4) Build & deploy to subdomain

```bash
npm run build
```

Upload **all files inside** `dist/` to your subdomain document root
(e.g., cPanel subdomain folder).

`vite.config.js` uses `base: "./"` to keep asset paths working on static hosts.

## Sections

- Home (Hero)
- Research Interest
- Education
- Skills
- Experience
- Contact
