# NewsMonkey

NewsMonkey is a modern React-based news web application for browsing real-time headlines with a clean, fast, and responsive reading experience.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap&logoColor=white)
![NewsAPI](https://img.shields.io/badge/API-NewsAPI-1E90FF)
![Status](https://img.shields.io/badge/Status-Active-success)

## Use Cases

- **Daily news browsing**: Quickly scan top headlines in one place.
- **Category-based reading**: Follow focused topics like business, technology, sports, and entertainment.
- **Smooth long-form feed consumption**: Read continuously with infinite scrolling.
- **Frontend portfolio/demo project**: Showcase API integration, state management, and polished UI behavior in React.

## Features

- Clean Bootstrap-based interface with responsive layouts
- Infinite scrolling news feed for uninterrupted reading
- Top loading bar + spinner feedback for better perceived performance
- API-key based environment setup with clear missing-key guidance
- Reusable card-based article presentation for scannable content

## Tech Stack

| Layer | Technology | Purpose |
| --- | --- | --- |
| Frontend Framework | React (Create React App) | Component-based UI and state-driven rendering |
| Styling System | Bootstrap 5 | Responsive grid, spacing, and visual consistency |
| Data Source | [NewsAPI](https://newsapi.org/) | Fetching latest headlines and category news |
| UI Utilities | react-top-loading-bar, react-infinite-scroll-component | Loading feedback and seamless content flow |

## UI/UX Highlights

- **Readable visual hierarchy** with clear headlines, metadata, and article summaries.
- **Progressive loading feedback** through loading bar and spinner states.
- **Mobile-friendly responsiveness** for smooth usage across devices.
- **Card-based design language** for quick content scanning and interaction clarity.
- **Focused interaction flow** from category selection to article exploration.

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

## Deployment (Live)

This app is ready for static hosting providers like **Vercel**, **Netlify**, **GitHub Pages**, **Cloudflare Pages**, or **Firebase Hosting**.

### Required environment variable

Set this in your hosting provider project settings:

- `REACT_APP_NEWS_API` = your NewsAPI key

> `REACT_APP_` prefix is required for Create React App client-side environment variables.

### Important notes

- Never commit real API keys.
- `.env.local` and environment-specific local files should remain uncommitted.
- For true production security, route NewsAPI requests through your own backend/proxy so the API key is not exposed in browser network logs.
- If the API key is missing, the app now shows a clear setup message instead of failing silently.

## Troubleshooting

- If no articles load, verify `REACT_APP_NEWS_API` is set correctly.

## License

This project is open source and available under the MIT License.
