# FreshCart — E-Commerce App

A full-featured e-commerce web application built with modern web technologies, offering product browsing, cart management, wishlists, authentication, and online/cash checkout.

---

## Features

- **Authentication** — Email/password & GitHub OAuth login via NextAuth.js
- **Product Browsing** — Browse products, categories, and brands with detailed views
- **Shopping Cart** — Add, update, and remove items; persistent cart via API routes
- **Wishlist** — Save and manage favourite products
- **Checkout** — Cash on delivery and online payment options
- **Forgot/Reset Password** — Email-based OTP verification flow
- **Responsive UI** — Mobile-first, fully responsive layout

---

## Tech Stack

| Category            | Technology                                                                                                      |
| ------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Framework**       | [Next.js 15](https://nextjs.org/) (App Router)                                                                  |
| **Language**        | [TypeScript 5](https://www.typescriptlang.org/)                                                                 |
| **Styling**         | [Tailwind CSS v4](https://tailwindcss.com/), [MUI (Material UI) v7](https://mui.com/)                           |
| **UI Components**   | [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/), [shadcn/ui](https://ui.shadcn.com/) |
| **Icons**           | [Font Awesome 7](https://fontawesome.com/)                                                                      |
| **Authentication**  | [NextAuth.js v4](https://next-auth.js.org/) (Credentials + GitHub OAuth)                                        |
| **Data Fetching**   | [TanStack React Query v5](https://tanstack.com/query/latest)                                                    |
| **Forms**           | [React Hook Form v7](https://react-hook-form.com/)                                                              |
| **Validation**      | [Zod v4](https://zod.dev/)                                                                                      |
| **Notifications**   | [React Toastify](https://fkhadra.github.io/react-toastify/)                                                     |
| **Slider/Carousel** | [Swiper.js](https://swiperjs.com/)                                                                              |
| **Fonts**           | Google Fonts — Encode Sans Expanded (via `next/font`)                                                           |
| **Linting**         | ESLint 9 with `eslint-config-next`                                                                              |

---

## Project Structure

```
src/
├── apis/              # API helper functions (products, brands, categories, wishlist…)
├── app/               # Next.js App Router pages & layouts
│   ├── _components/   # Shared UI components (NavBar, Footer, Slider…)
│   ├── auth/          # Login, Register, Forgot/Reset Password pages
│   ├── brands/        # Brands listing page
│   ├── cart/          # Cart page & server actions
│   ├── categories/    # Categories & Sub-categories pages
│   ├── checkout/      # Checkout page & server actions (cash & online)
│   ├── products/      # Products listing & detail pages
│   ├── wishlist/      # Wishlist page
│   └── api/           # Next.js API routes (cart, NextAuth)
├── components/ui/     # Reusable shadcn/ui primitive components
├── providers/         # React context providers (NextAuth, React Query)
├── schema/            # Zod validation schemas
├── types/             # Global TypeScript type declarations
└── utils/             # Utility helpers (e.g., token extraction)
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Start the production server
npm start
```

---

## Environment Variables

Create a `.env.local` file in the root with:

```env
API=<your_backend_api_base_url>
NEXTAUTH_SECRET=<your_nextauth_secret>
NEXTAUTH_URL=http://localhost:3000
GITHUB_ID=<your_github_oauth_app_id>
GITHUB_SECRET=<your_github_oauth_app_secret>
```
