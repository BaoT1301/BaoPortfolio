# Bao Tran Portfolio

A motion focused developer portfolio for Bao Tran, a software engineer and AI builder based in Washington, DC.

## Stack

Next.js 16, React 19, TypeScript, GSAP, Three.js, and Tailwind CSS.

## Local development

Node.js 20.9 or newer is required.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Production checks

```bash
npm run lint
npm run build
```

## Vercel deployment

The repository includes a Vercel configuration that selects the Next.js framework and uses the locked npm dependency tree.

Pushes to the production branch deploy automatically after the GitHub repository is connected to Vercel. A direct production deployment can also be created with:

```bash
npx vercel@latest --prod
```

Set `NEXT_PUBLIC_SITE_URL` when a specific canonical domain should be used for social previews. When it is not set, Vercel uses the project production URL.
