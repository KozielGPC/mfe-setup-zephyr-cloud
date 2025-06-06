# Microfrontend Setup using Zephyr Cloud

## Overview
This project demonstrates a microfrontend architecture using Zephyr Cloud as the provider. It consists of three main applications:

- **app-shell**: The main container (host) application, built with React, responsible for loading and orchestrating remote microfrontends.
- **app1-react**: A remote microfrontend built with React.
- **app2-vue**: A remote microfrontend built with Vue.

All apps are connected using Module Federation (Webpack), allowing independent deployment and runtime integration.

---

## Tech Stack
- **React 18** (app-shell, app1-react)
- **Vue 3** (app2-vue)
- **Webpack 5** (Module Federation)
- **TypeScript** (all apps)
- **pnpm** (package management)
- **Zephyr Cloud** (provider for deployment and orchestration)

---

## How the Apps are Connected
- The **app-shell** acts as the host and loads remote components from **app1-react** and **app2-vue** at runtime using Webpack Module Federation.
- **app1-react** and **app2-vue** expose their main components via Module Federation remotes.
- The shell dynamically imports and renders these remote components based on the route or user interaction.

---

## Steps to Run Locally

For every app, open it's folder and run the following steps:

1. **Install dependencies**
   ```powershell
   pnpm install
   ```

2. **Start**
   You can start all apps at once using the root script:
   ```powershell
   pnpm start
   ```

After running all of them, you can then access them individually or directly via shell app:

3. **Access the shell app**
   Open your browser to `http://localhost:4000`

4. **Microfrontends**
   The shell will load the React and Vue microfrontends dynamically. You can navigate between them using the shell's UI.

---

## Diagram Flow


---

## Deployment
- Each app can be deployed independently to Zephyr Cloud.
- The shell app should be configured to reference the deployed URLs of the remotes.
- It can be accessed in: https://staging-app-shell-mfe-setup-zephyr-cloud-kozielgpc-ze.zephyrcloud.app

---

## Additional Notes
- For cross-framework integration (React shell loading Vue remote), a wrapper component (`VueWrapper.tsx`) is used in the shell.

---
