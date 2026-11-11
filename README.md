# SHONGO

Bengali restaurant landing page — Next.js (App Router) + Tailwind CSS v4 + TypeScript.

```bash
npm install
npm run dev
```

Design tokens (colors, fonts, radius, shadows) live in `src/app/globals.css` under `@theme`.
Place exported images in `public/images/*` (see folder structure).

## ছবি বদলানো

সব ছবির লিংক `src/data/images.ts` ফাইলে। নিজের ছবি `public/images/...` এ আপলোড করে পাথ বদলাও,
অথবা সরাসরি `https://...` লিংক দাও। ফাঁকা `""` রাখলে প্লেসহোল্ডার দেখাবে।
