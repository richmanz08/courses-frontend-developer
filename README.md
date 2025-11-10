# courses-frontend-developer

A modern frontend development course project built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 16.0.1** - React framework with App Router
- **React 19.2.0** - Latest version of React
- **TypeScript 5.x** - Type-safe development
- **Tailwind CSS 4.x** - Utility-first CSS framework
- **ESLint 9.x** - Code linting and quality

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
courses-frontend-developer/
├── src/
│   └── app/
│       ├── globals.css      # Global styles with Tailwind CSS
│       ├── layout.tsx        # Root layout component
│       └── page.tsx          # Home page component
├── public/                   # Static assets
├── next.config.ts            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
├── postcss.config.mjs        # PostCSS configuration for Tailwind
└── eslint.config.mjs         # ESLint configuration

```

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)