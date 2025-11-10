# ServerCompass Demo Application

A sample [Next.js](https://nextjs.org) application demonstrating environment variable management for [ServerCompass](https://servercompass.app) deployments.

## Overview

This demo project showcases how to:
- Use environment variables in Next.js applications
- Display configuration values on the frontend
- Manage public vs. private environment variables
- Deploy applications with ServerCompass

## Environment Variables

The application uses the following environment variables:

### Public Variables (Browser-accessible)
These variables are prefixed with `NEXT_PUBLIC_` and are exposed to the browser:

- `NEXT_PUBLIC_APP_NAME` - Application name
- `NEXT_PUBLIC_API_URL` - API endpoint URL
- `NEXT_PUBLIC_ENVIRONMENT` - Deployment environment (production, staging, development)
- `NEXT_PUBLIC_VERSION` - Application version

### Private Variables (Server-only)
These are NOT exposed to the browser:

- `DATABASE_URL` - Database connection string
- `API_SECRET_KEY` - Secret key for API authentication

## Getting Started

1. **Clone and install dependencies:**
   ```bash
   cd servercompass-demo
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```

   Then edit `.env` with your actual values.

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application displaying your environment variables.

## Project Structure

```
servercompass-demo/
├── app/
│   ├── page.tsx          # Main homepage displaying env vars
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── .env                  # Environment variables (git-ignored)
├── .env.example          # Environment variables template
└── package.json
```

## Deployment

### Deploy with ServerCompass

1. Visit [ServerCompass](https://servercompass.app)
2. Connect your repository
3. Configure your environment variables
4. Deploy

### Deploy with Vercel

Alternatively, deploy with [Vercel](https://vercel.com/new):

```bash
npm run build
```

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [ServerCompass](https://servercompass.app) - Server deployment and management
- [Environment Variables in Next.js](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)
