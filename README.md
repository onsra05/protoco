# HoangAnh Portfolio

A production-ready developer portfolio for **HoangAnh** — AI Systems Engineer & Fullstack Developer.

Built with Next.js 15, TypeScript, TailwindCSS, and Framer Motion.

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Font**: Geist (by Vercel)

---

## Project Structure

```
/app              # Next.js App Router pages and API routes
/components
  /layout         # Header, Footer
  /sections       # Page sections (Hero, About, Skills, etc.)
  /shared         # Reusable components (SectionHeader, ProjectModal)
  /animations     # Animation wrappers
/config           # Site configuration (nav, socials, constants)
/data             # Content data (projects, skills, experience, blog)
/hooks            # Custom React hooks
/lib              # Shared utilities (animation variants)
/types            # TypeScript interfaces and types
/utils            # Helper functions
/public           # Static assets
```

---

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm 9 or later

### Installation

```bash
git clone https://github.com/hoanganh/portfolio.git
cd portfolio
npm install
```

### Local Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Type Check

```bash
npm run type-check
```

### Lint

```bash
npm run lint
```

### Format

```bash
npm run format
```

---

## Production Build

```bash
npm run build
npm run start
```

The build output is in `.next/`.

---

## Customization

All content is centralized in `/data` and `/config`:

| File | Purpose |
|------|---------|
| `config/site.ts` | Name, title, email, nav links, socials |
| `data/projects.ts` | Project cards and details |
| `data/skills.ts` | Skill categories and items |
| `data/experience.ts` | Work history timeline |
| `data/stats.ts` | Animated stat counters + blog posts |
| `data/terminal.ts` | Terminal command responses |

---

## Environment Variables

For production, create a `.env.local` file:

```env
# Optional: Email service integration
RESEND_API_KEY=your_api_key_here
CONTACT_EMAIL=your@email.com
```

The contact form works without environment variables (it logs submissions to the server console). To actually send emails, integrate [Resend](https://resend.com) or [SendGrid](https://sendgrid.com) in `app/api/contact/route.ts`.

---

## Deployment on Render.com

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/portfolio.git
git push -u origin main
```

### Step 2: Create a Render Web Service

1. Go to [render.com](https://render.com) and sign in
2. Click **New +** → **Web Service**
3. Connect your GitHub repository
4. Configure the service:

| Setting | Value |
|---------|-------|
| **Name** | `hoanganh-portfolio` |
| **Environment** | `Node` |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm run start` |
| **Node Version** | `20` |

### Step 3: Environment Variables (Optional)

In the Render dashboard → **Environment** tab, add:
- `NODE_ENV` = `production`
- `RESEND_API_KEY` = your key (if using email)

### Step 4: Deploy

Click **Create Web Service**. Render will build and deploy automatically.

**Auto-deploy**: Render redeploys on every push to `main`.

---

## Performance

- Server Components by default (only Client Components where interactivity is needed)
- Dynamic imports for below-the-fold sections
- Optimized images with `next/image`
- Minimal JavaScript bundle

---

## Accessibility

- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states with visible outlines
- Screen reader announcements for dynamic content
- Color contrast compliant

---

## License

MIT — free to use and modify.
