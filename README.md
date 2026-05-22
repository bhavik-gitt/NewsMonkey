# NewsMonkey

NewsMonkey is a React-based news web app that displays the latest headlines with infinite scroll.

## Features

- Clean Bootstrap-based UI
- Infinite scrolling news feed
- Loading progress bar and spinner
- Production-ready environment variable setup for API keys

## Tech Stack

- React (Create React App)
- Bootstrap 5
- [NewsAPI](https://newsapi.org/)

## Prerequisites

- Node.js 18+
- npm
- A NewsAPI key

## Getting Started

1. Clone the repository
2. Install dependencies:

   ```bash
   npm ci
   ```

3. Configure environment variables:

   ```bash
   cp .env.example .env.local
   ```

4. Add your NewsAPI key in `.env.local`:

   ```env
   REACT_APP_NEWS_API=your_newsapi_key_here
   ```

5. Start development server:

   ```bash
   npm start
   ```

## Available Scripts

- `npm start` – start dev server
- `npm test -- --watchAll=false` – run tests once
- `npm run build` – create production build

## Deployment (Live)

This app is ready for static hosting providers like **Vercel**, **Netlify**, **GitHub Pages**, **Cloudflare Pages**, or **Firebase Hosting**.

### Required environment variable

Set this in your hosting provider project settings:

- `REACT_APP_NEWS_API` = your NewsAPI key

> `REACT_APP_` prefix is required for Create React App client-side environment variables.

### Build settings

- Build command: `npm run build`
- Output directory: `build`

### Important notes

- Never commit real API keys.
- `.env.local` and environment-specific local files should remain uncommitted.
- If the API key is missing, the app now shows a clear setup message instead of failing silently.

## Troubleshooting

- If no articles load, verify `REACT_APP_NEWS_API` is set correctly.
- If build fails in CI, run locally:

  ```bash
  npm ci
  npm run build
  ```

## License

This project is open source and available under the MIT License.
