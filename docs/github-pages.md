# GitHub Pages deployment

The Pages workflow performs a static export only when `GITHUB_PAGES=true`. Normal local development and Vercel builds keep Next.js server behavior unchanged.

For `estehtian.github.io/future-casa`, set Pages to **GitHub Actions** and push to `main`. The workflow builds `out/` and deploys it. The Next.js base path is added automatically because the site URL contains `github.io`.

If a custom domain is configured under Settings → Pages, change `NEXT_PUBLIC_SITE_URL` in the workflow to that domain. Then remove the `github.io` URL so the base path is omitted. Static assets are emitted as static files and Next.js image optimization is disabled only for the Pages export.
