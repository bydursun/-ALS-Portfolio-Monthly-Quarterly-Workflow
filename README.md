# ALS Portfolio Monthly/Quarterly Workflow

Interactive flowchart application for M-SAA Report Preparation Process.

## Overview

This application provides a visual workflow guide for preparing M-SAA reports for the ALS Portfolio, including critical steps for data extraction from Looker dashboards and manual entry into Excel reports.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (icons)

## Local Development

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deploying to Netlify

### Method 1: Netlify CLI

1. Install Netlify CLI globally:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Build the project:
```bash
npm run build
```

4. Deploy:
```bash
netlify deploy --prod --dir=dist
```

### Method 2: Netlify Dashboard (Drag & Drop)

1. Build the project:
```bash
npm run build
```

2. Go to [Netlify](https://app.netlify.com/)
3. Drag and drop the `dist` folder onto the Netlify dashboard
4. Your site will be deployed instantly

### Method 3: Connect Git Repository

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [Netlify](https://app.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect your Git provider and select your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"

### Netlify Configuration File

A `netlify.toml` file is included in the project root with the following settings:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

This ensures proper routing for the single-page application.

## Project Structure

```
als-portfolio-workflow/
├── src/
│   ├── App.tsx           # Main application component with flowchart
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── dist/                 # Production build (generated)
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Features

- Interactive SVG flowchart
- Color-coded process steps:
  - Green: Start/End points
  - Blue/Purple: Navigation steps
  - Yellow: Data extraction
  - Red diamonds: Critical decision points
  - Pink: ALS+CC specific steps
- Responsive design
- Print-friendly layout
- Legend for shape meanings

## License

Private project - All rights reserved
