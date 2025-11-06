# ProProfile AI App

A modern Single Page Application (SPA) for AI-powered professional profile image generation. Built with React frontend communicating with a Golang API backend, using Supabase for authentication. Create custom AI character models and generate high-quality images for LinkedIn profiles, headshots, and more.

## Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-4.4-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/shadcn/ui-latest-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="shadcn/ui" />
  <br/>
  <img src="https://img.shields.io/badge/Zustand-4.4-443E38?style=for-the-badge" alt="Zustand" />
  <img src="https://img.shields.io/badge/React_Query-5.17-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" alt="React Query" />
  <img src="https://img.shields.io/badge/Supabase-Auth-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
  <img src="https://img.shields.io/badge/Stripe-Payments-008CDD?style=for-the-badge&logo=stripe&logoColor=white" alt="Stripe" />
</p>

## Tech Stack Details

### Frontend (SPA)

- **React 18.2** - Modern UI library with hooks
- **TypeScript 5.0** - Type-safe development
- **Vite 4.4** - Fast build tool with HMR
- **Tailwind CSS 3.3** - Utility-first styling
- **React Router 6.18** - Client-side routing
- **Axios 1.6** - HTTP client for API communication

### State Management

- **Zustand 4.4** - Lightweight global state management
- **TanStack React Query 5.17** - Server state management and caching

### Backend Architecture

- **Golang API** - RESTful API backend for business logic and data operations
- **Supabase Auth** - Authentication layer (JWT-based)
- **Stripe** - Payment processing integration

### UI Components

- **shadcn/ui** - Beautifully designed components built with Radix UI and Tailwind CSS
- **Radix UI** - Accessible, unstyled component primitives
- **Lucide React** - Modern icon library

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn
- Golang API backend server running (see backend repository)
- Supabase account and project (for authentication)
- Stripe account (for payments)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ppai-app.git
cd ppai-app
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```env
VITE_AUTH_API=your_supabase_url
VITE_AUTH_KEY=your_supabase_anon_key
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
VITE_API_URL=http://localhost:3002/api
```

4. Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ui/             # Base UI components (buttons, dialogs, etc.)
│   ├── CharacterModel*.tsx
│   ├── Package*.tsx
│   └── Generated*.tsx
├── routes/             # Page components
│   ├── Dashboard.tsx   # Main dashboard
│   ├── Login.tsx       # Authentication
│   ├── PackageBuy.tsx  # Stripe checkout
│   ├── CharacterNew.tsx
│   └── ...
├── store/              # Zustand state management
├── types/              # TypeScript type definitions
├── lib/                # Utility functions and API setup
├── App.tsx             # Router configuration
└── main.tsx            # Application entry point
```

## Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production (TypeScript check + Vite build)
- `npm run preview` - Preview production build locally
- `npm run lint` - Lint TypeScript/TSX files with ESLint
- `npm run format` - Format code with Prettier

## Development

### Code Quality

- ESLint configured for TypeScript and React
- Prettier for consistent code formatting
- TypeScript strict mode enabled
- React Query DevTools for debugging

### Styling

- Tailwind CSS with custom theme configuration
- shadcn/ui component library for consistent design system
- Dark mode support (class-based)
- CSS variables for theming
- Animation utilities with tailwindcss-animate

## Environment Configuration

Required environment variables:

| Variable                      | Description                                                      |
| ----------------------------- | ---------------------------------------------------------------- |
| `VITE_AUTH_API`               | Supabase project URL (for authentication only)                   |
| `VITE_AUTH_KEY`               | Supabase anonymous key (for authentication only)                 |
| `VITE_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key (test or live)                            |
| `VITE_API_URL`                | Golang API backend base URL (default: http://localhost:3002/api) |

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and proprietary.

## API Integration

The React SPA communicates with the Golang backend through RESTful API endpoints:

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components inspired by [shadcn/ui](https://ui.shadcn.com/)
- Icons by [Lucide](https://lucide.dev/)
- Auth powered by [Supabase](https://supabase.com/)
