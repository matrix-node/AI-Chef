
# AI-Chef
Web App made to help fork to get the right recipe for their food preparation
=======
# Claude Chef

>A modern, minimal recipe explorer built with React and Vite — includes optional integrations for generative AI-assisted recipe suggestions.

---

## Table of contents

- About
- Features
- Tech stack
- Getting started
	- Prerequisites
	- Install
	- Development
	- Build & Preview
- Environment variables (optional)
- Project structure
- Contributing
- License
- Contact

---

## About

`claude-chef` is a small React + Vite application for browsing and viewing recipes. The project is structured to be lightweight and easy to extend. It includes components for site header, main listing, and individual recipe views. The repository also contains dependencies for optionally integrating generative AI services (see Environment variables).

## Features

- Clean, component-driven React UI
- Fast dev feedback with Vite
- Optional generative AI helper for recipe ideas (via provider SDKs)
- Linting configured with ESLint

## Tech stack

- React 19
- Vite
- Tailwind CSS (installed as dependency)
- ESLint
- Optional: Google Generative AI SDKs (dependencies included but usage is opt-in)

## Getting started

### Prerequisites

- Node.js (recommended v18+)
- npm or Yarn

### Install

1. Install dependencies:

```bash
npm install
```

### Development

Start the dev server (Vite):

```bash
npm run dev
```

This opens a local server (usually at http://localhost:5173) with fast HMR.

### Build & Preview

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint across the project:

```bash
npm run lint
```

## Environment variables (optional)

This project includes client-side SDKs for generative AI as dependencies. If you plan to enable AI features, add your API keys as environment variables. With Vite, prefix runtime client keys with `VITE_`.

Create a `.env` file in the project root (do not commit secrets):

```env
# Example (replace with your real key):
VITE_GOOGLE_API_KEY=your_api_key_here
```

Notes:
- Keep keys secret. Do not commit `.env` to source control.
- Server-side calls are recommended for production to avoid exposing secrets in browser bundles.

## Project structure (important files)

```
src/
	├─ assets/           # images and static assets
	├─ components/
	│   ├─ Header.jsx
	│   ├─ Main.jsx
	│   └─ Recipe.jsx
	├─ App.jsx
	└─ main.jsx
vite.config.js
package.json
README.md
```

## Available scripts (from package.json)

- `npm run dev` — start Vite dev server
- `npm run build` — build production bundle
- `npm run preview` — locally preview production build
- `npm run lint` — run ESLint

I checked the repo's `package.json` and these scripts are present.

## Contributing

Contributions are welcome. A suggested small workflow:

1. Fork the repo
2. Create a feature branch (`git checkout -b feat/your-feature`)
3. Implement and add tests if relevant
4. Run linting and ensure dev server works
5. Open a pull request with a clear description

Please open issues for feature requests or bugs.

## License

No license file is included in the repository. If you want to make this project open source, consider adding a LICENSE (for example, the MIT license). To add the MIT license, create a `LICENSE` file with the MIT text.

## Contact

If you'd like help developing this project further or want implementation suggestions, open an issue or contact the repository owner via the preferred channel listed in the project settings.

---

Thank you for using `claude-chef`! Pull requests and feedback are appreciated.

>>>>>>> 36d348c (first commit)
