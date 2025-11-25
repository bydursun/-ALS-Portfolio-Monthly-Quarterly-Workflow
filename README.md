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
