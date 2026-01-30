# About This Site

My personal portfolio site, built from scratch with React and TypeScript on Vite.

I'm Jake Solomon, a React/TypeScript engineer with full-stack experience. I've spent the last five years building production web applications. I care about clean code, thoughtful UI, and shipping things that work well.

## Tech Stack

- **React 19** with **TypeScript**
- **Mantine UI** for theming and responsive layout
- **Vite** for development and builds

## Code Highlights

- Centralized design system via Mantine's `createTheme` API (`theme.ts`)
- Responsive, mobile-first layout with conditional rendering per viewport
- Smooth scroll navigation and delayed entrance animations using Mantine hooks
- Component-driven architecture — reusable `ExperienceEntry` components, shared `LinksGroup`, clean separation of concerns

## Project Structure

```
src/
├── App.tsx                # Main application shell
├── theme.ts               # Design system configuration
├── ExperienceSection.tsx  # Experience section layout
├── ExperienceEntry.tsx    # Reusable experience card component
├── LinksGroup.tsx         # Shared navigation links
└── assets/                # Images and media
```

## Running Locally

```bash
npm install
npm run dev
```

## Build and Deploy

```bash
npm run build
npm run deploy
```

## Get in Touch

- [LinkedIn](https://www.linkedin.com/in/jacobcsolomon/)

---

Built with attention to detail, clean code practices, and a focus on maintainability—the same approach I bring to every project.