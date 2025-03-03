---
id: setup
title: Project Setup Guide
---

This guide walks you through installing and running both the **Next.js web application** and the **Docusaurus documentation** on your local machine.

---

## Prerequisites

- **Node.js** (v14 or higher is recommended)
- **npm** or **yarn** for package management

Make sure these are installed before proceeding.

---

## Web App (Next.js)

1. **Navigate to the web-app folder**:
   ```bash
   cd web-app
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
   This installs the required libraries (React, Next.js, React Query, Tailwind CSS, etc.).
3. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   The app will run at [http://localhost:3000](http://localhost:3000).  
4. **Production Build** (optional):
   ```bash
   npm run build
   npm run start
   ```
   This compiles the app for production and serves the optimized build.

---

## Documentation (Docusaurus)

1. **Navigate to the docs folder**:
   ```bash
   cd ../docs
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Start the Docs Site**:
   ```bash
   npm run start
   ```
   By default, the docs site runs at [http://localhost:3000](http://localhost:3000). Check your terminal for the exact URL if there’s a port conflict.
4. **Production Build** (optional):
   ```bash
   npm run build
   npx serve build
   ```
   This generates static HTML, CSS, and JS files in the `build` folder, which can be deployed to any static hosting platform.

---

## File Structure Overview

```
my-repo/
  ├─ web-app/            # Next.js project
  │   ├─ pages/
  │   ├─ components/
  │   ├─ hooks/
  │   ├─ styles/
  │   ├─ package.json
  │   └─ ...
  └─ docs/               # Docusaurus documentation
      ├─ docs/          # Folder containing .md files
      │   ├─ intro.md
      │   ├─ setup.md
      │   ├─ api-integration.md
      │   ├─ state-management.md
      │   └─ challenges-solutions.md
      ├─ docusaurus.config.js
      ├─ package.json
      └─ ...
```

You can now explore the Crypto Price Tracker and its documentation locally!

---

## Troubleshooting

- **Port Conflicts**: If you see an “address in use” error, change the port in `package.json` scripts or set environment variables.
- **Missing Dependencies**: If you encounter missing module errors, double-check you ran `npm install` in both `web-app` and `docs`.
- **Tailwind Issues**: Make sure your `tailwind.config.js` and `postcss.config.js` are correctly set up, and you’re importing `@tailwind base; @tailwind components; @tailwind utilities;` in your global CSS.

For more details on data fetching, see [API Integration](./api-integration.md). For insights on state management, check [State Management Explanation](./state-management.md).
