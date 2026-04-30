# Arurem

**Arurem** is a private ledger application designed to securely track individual gold assets. Built with React and ShadCN, it provides a clean, modern interface for managing gold holdings, transactions, and asset records with a focus on clarity, privacy, and reliability.

## 🧱 Tech Stack

Arurem uses a carefully selected stack of libraries and tools to provide a robust and performant application.

### Frontend Framework

* **React** (v19.2.5) - A popular JavaScript library for building user interfaces, known for its component-based architecture and fast rendering.

### UI Components

* **ShadCN** (v4.6.0) - A utility-first design system for building modern UI components with TailwindCSS and Radix UI.
* **Radix UI** (v1.4.3) - A set of unstyled, accessible UI primitives that allow you to build fully custom design systems.
* **Lucide React** (v1.14.0) - A set of high-quality, customizable icons to integrate into your UI components.

### Styling

* **TailwindCSS** (v4.2.4) - A utility-first CSS framework for rapid UI development. Tailwind lets you design directly in your markup.
* **Class Variance Authority** (v0.7.1) - Used for handling class variants and component-driven UI styling.
* **Tailwind Merge** (v3.5.0) - A utility for merging class names intelligently when using TailwindCSS.

### Form Handling & Validation

* **React Hook Form** (v7.74.0) - A library for handling form state and validation with minimal re-renders.
* **Zod** (for schema validation) - A TypeScript-first schema declaration and validation library.
* **@hookform/resolvers** (v5.2.2) - Resolver library for integrating React Hook Form with external validation libraries like Zod.

### Animations and Interactivity

* **Motion** (v12.38.0) - A library for animations with React, providing advanced animations using the `framer-motion` API.
* **Tw-animate-css** (v1.4.0) - A collection of animations that can be easily used with TailwindCSS.
* **React Hot Toast** (v2.6.0) - A lightweight and customizable toast notification library for React.
* **React Day Picker** (v9.14.0) - A flexible and customizable calendar and date picker for React.

### Date & Time Management

* **Date-fns** (v4.1.0) - A modern JavaScript date utility library for parsing, formatting, and manipulating dates.

### Development Tools

* **Vite** (v8.0.10) - A next-generation, fast build tool for modern web applications, optimized for speed.
* **TypeScript** (v6.0.2) - A statically typed superset of JavaScript that enhances development with type safety.
* **ESLint** (v10.2.1) - A tool for identifying and fixing JavaScript/TypeScript code issues.
* **Prettier** (v3.8.3) - An opinionated code formatter that ensures consistent code style.
* **Prettier Plugin for TailwindCSS** (v0.8.0) - A Prettier plugin for sorting TailwindCSS classes automatically.
* **Vite Plugin React** (v6.0.1) - A plugin for integrating React into Vite projects seamlessly.

## 📜 Version History

### v1.0.0 — Initial Release (April 2026)

* Project bootstrapped with Vite + React + TypeScript
* TailwindCSS configured and integrated with design system
* ShadCN UI components initialized
* Base application structure established
* ESLint and Prettier configured for code quality
* Core dependencies integrated (forms, icons, animations, utilities)
* Initial UI foundation prepared for ledger system

## 🚀 Installation

```bash
git clone https://github.com/alikouhfar/arurem.git
cd arurem
npm install
npm run dev
```

## 📌 Scripts

```bash
npm run dev       # start development server
npm run build     # production build
npm run preview   # preview production build
npm run lint      # lint codebase
```

## 📦 License

This project is licensed under the MIT License.
