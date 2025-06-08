# Ali Benrami's Portfolio

This portfolio is built with [Next.js](https://nextjs.org), showcasing my projects and professional experience.

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Environment Variables

This project requires Supabase credentials to function. Create a `.env.local` file in the project root and add the following variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
```

These values configure the Supabase client used in `src/app/util/supabase.ts`.

## Features

- Modern responsive design
- Project showcase
- Skills and experience section
- Contact information
- Built with Next.js and TypeScript

## Technologies

- [Next.js](https://nextjs.org) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Geist Font](https://vercel.com/font) - Typography

## Deployment

Deployed on [Vercel](https://vercel.com) at [portfolio-url.com](https://portfolio-url.com)

## Contact

Feel free to reach out at [abenrami06@gmail.com](mailto:abenrami06@gmail.com)
