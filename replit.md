# Greator Software - Company Website

## Overview

Greator Software is a professional software development and IT consulting company website built as a modern single-page application. The project showcases the company's services, portfolio, culture, and career opportunities. It features a clean, bold design inspired by TED website, with a focus on professionalism and prominent typography.

The application is a full-stack TypeScript project using React for the frontend and Express for the backend, with a PostgreSQL database configured via Drizzle ORM.

**Company Tagline**: "Practising AI Democracy. Scaling Solutions for Every Business."

**Contact Information**:
- Primary emails: prakash@greatorsoftware.com, harini@greatorsoftware.com
- Head Office (Chennai): G4, D Block, Vandalur Park, Urapakkam, Chennai 603210 | +91 91501 83874
- Branch Office (Perambalur): First Floor, No.1, Qasim Complex, Abiramipuram, Collector office bypass road, Perambalur-621211 | +91 63856 29914

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Core Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Wouter is used for client-side routing, providing a lightweight alternative to React Router. The application has two main routes:
- Home page (`/`) - Main landing page with all company information
- Careers page (`/careers`) - Job listings and career information
- 404 page for unmatched routes

**UI Component System**: The project uses shadcn/ui components (New York style variant) built on top of Radix UI primitives. This provides a comprehensive set of accessible, customizable components including buttons, cards, forms, dialogs, and navigation elements. All components follow a consistent design system with Tailwind CSS for styling.

**Design System**: 
- Typography uses Montserrat for headings and Inter for body text (Google Fonts)
- Bold, prominent typography inspired by TED website (font-black for hero headings)
- Color palette centered around Electric Blue (#0077FF) for primary actions, Deep Charcoal (#0D1B2A) for text, and Off-White (#E0E5EC) for backgrounds
- Clean, minimalist design with no background images in hero section
- Consistent spacing scale using Tailwind's spacing units
- Custom CSS variables defined in `index.css` for theming support
- Logo: Custom blue "GS" design (image_1762655206646.png)

**State Management**: React Query (TanStack Query) is configured for server state management, though currently not actively used. The application is primarily static content-driven.

**Component Structure**: Components are organized into feature-based modules (Hero, About, Services, Portfolio, Culture, Contact) with corresponding example components for isolated development/testing.

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**Development Setup**: Custom Vite middleware integration for hot module replacement during development. The server handles both API routes (prefixed with `/api`) and serves the Vite-built frontend in production.

**Storage Layer**: An abstraction layer (`IStorage` interface) is implemented with an in-memory storage implementation (`MemStorage`). This provides a foundation for CRUD operations on User entities, designed to be easily swapped with a database-backed implementation.

**Request Logging**: Custom middleware logs all API requests with method, path, status code, duration, and response payload (truncated to 80 characters).

**Session Management**: The project includes `connect-pg-simple` for PostgreSQL-based session storage, though session handling isn't currently implemented in the routes.

### Database Schema

**ORM**: Drizzle ORM configured for PostgreSQL with the Neon serverless driver.

**Current Schema**: A basic `users` table with:
- `id` (UUID, auto-generated primary key)
- `username` (unique text field)
- `password` (text field)

**Type Safety**: Drizzle-Zod integration provides runtime validation schemas derived from database schema, ensuring type safety from database to application layer.

**Migrations**: Configured to output migration files to `./migrations` directory, with schema definitions in `shared/schema.ts`.

### Build and Deployment

**Development**: `npm run dev` starts the Express server with TypeScript execution via tsx, running Vite in middleware mode for HMR.

**Production Build**: 
1. Vite builds the frontend to `dist/public`
2. esbuild bundles the server code to `dist/index.js` as an ESM module
3. Production server serves static files and handles API routes

**Type Checking**: Separate `npm run check` command runs TypeScript compiler in no-emit mode for type validation.

### Path Aliases

Configured in both TypeScript and Vite:
- `@/*` → Frontend source files (`client/src/*`)
- `@shared/*` → Shared types and schemas (`shared/*`)
- `@assets/*` → Static assets (`attached_assets/*`)

## External Dependencies

### UI and Styling
- **Radix UI**: Complete suite of unstyled, accessible UI primitives (@radix-ui/react-*)
- **shadcn/ui**: Pre-styled component library built on Radix UI
- **Tailwind CSS**: Utility-first CSS framework with PostCSS integration
- **class-variance-authority**: Type-safe variant API for component styling
- **Lucide React**: Icon library for consistent iconography

### Data and Forms
- **React Hook Form**: Form state management and validation (@hookform/resolvers)
- **Zod**: Schema validation library used with Drizzle and forms
- **TanStack Query**: Asynchronous state management for server data

### Database
- **Drizzle ORM**: TypeScript ORM for PostgreSQL
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon
- **drizzle-kit**: CLI tool for schema migrations and management

### Development Tools
- **Vite**: Build tool and development server
- **Replit Plugins**: Development experience enhancements (@replit/vite-plugin-*)
- **tsx**: TypeScript execution for development server
- **esbuild**: Production bundler for server code

### Utilities
- **date-fns**: Date manipulation library
- **cmdk**: Command palette component
- **wouter**: Lightweight client-side router
- **nanoid**: Unique ID generation

### Session Management (Configured but not actively used)
- **connect-pg-simple**: PostgreSQL session store for Express
- **express-session**: Session middleware (implicit dependency)