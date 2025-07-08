# Let me Ask

Application developed during a **Rocketseat** event for creating and managing Q&A rooms.

## 🚀 Technologies

- **React 19** - Library for building user interfaces
- **TypeScript** - JavaScript superset with static typing
- **Vite 7** - Build tool and dev server

- **React Router DOM** - Client-side routing
- **TanStack Query (React Query)** - Server state management and caching

- **Tailwind CSS 4** - Utility-first CSS framework
- **Shadcn/ui** - Accessible and customizable components
- **Radix UI** - Headless UI primitives
- **Lucide React** - Icons
- **Class Variance Authority** - Class variants utility

- **Biome** - Linter and formatter

## 📁 Project Structure

```
src/
├── components/ui/     # Reusable UI components
├── lib/              # Utilities and configurations
├── pages/            # Application pages
├── app.tsx           # Main app configuration
└── main.tsx          # Entry point
```

## 🛠️ Design Patterns

- **Component-Based Architecture** - Reusable and modular components
- **Absolute Imports** - `@/` alias configuration for imports
- **Query Pattern** - Server state management with React Query
- **Route-Based Code Splitting** - Pages organized by routes

## ⚙️ Setup and Configuration

### Prerequisites
- Node.js (version 18+)
- npm, yarn or pnpm

### Installation

1. Clone the repository and navigate to the project folder:
```bash
cd web
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Configure the backend server:
   - Make sure the server is running on `http://localhost:3333`

### Running the Project

```bash
# Development mode
npm run dev

# Production build
npm run build

# Build preview
npm run preview

# Linting
npm run lint
```

### Important Configurations

- **Backend URL**: Frontend is configured to consume APIs from `http://localhost:3333`
- **Tailwind**: Custom configuration with CSS variables
- **TypeScript**: Strict configuration enabled
- **Vite**: Hot reload and fast refresh configured

## 🎯 Features

- ✅ Room creation
- ✅ Page navigation
- ✅ Backend API integration
- ✅ Responsive interface

