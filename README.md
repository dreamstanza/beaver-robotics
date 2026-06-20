# Beaver Robotics Website

English-first company website for Beaver Robotics — a spatial intelligence company building persistent 4D world models and mobility intelligence for robots in the real world.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Deployment:** Vercel-ready (static site generation)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Install & Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/src
  /app
    /page.tsx                 # Homepage
    /spatial-memory/page.tsx  # Spatial Memory page
    /mobility-brain/page.tsx  # Mobility Brain page
    /robot-forms/page.tsx     # Robot Forms page
    /applications/page.tsx    # Applications page
    /company/page.tsx         # Company page
    /contact/page.tsx         # Contact page
    /layout.tsx               # Root layout with Header/Footer
    /globals.css              # Global styles & Tailwind config
    /sitemap.ts               # Dynamic sitemap
    /robots.ts                # Robots.txt
  /components
    Header.tsx                # Sticky header with mobile menu
    Footer.tsx                # Footer with navigation
    Section.tsx               # Reusable section wrapper
    Card.tsx                  # Reusable card component
    CTA.tsx                   # Call-to-action section
    Flywheel.tsx              # Data flywheel animation
    WorldModelVisual.tsx      # 3D cube spatial visual
    ArchitectureDiagram.tsx   # Three-layer architecture
  /public
    logo.png                  # Beaver Robotics logo
    robot-product.png         # Product robot image
```

## How to Update Copy

Page content is defined directly in each page file under `/src/app/`. To update text:

1. Open the relevant page file (e.g., `src/app/page.tsx` for homepage)
2. Edit the text content within the JSX
3. Run `npm run dev` to preview changes
4. Commit and push to trigger Vercel deployment

## Deployment

### Vercel (Recommended)

1. Push this repository to GitHub
2. Import the repository in Vercel
3. Deploy — Vercel will auto-detect Next.js settings
4. Connect custom domain `www.beaver-robotics.com` in Vercel dashboard

### Domain Setup

After deploying to Vercel:
1. Go to Project Settings → Domains
2. Add `beaver-robotics.com` and `www.beaver-robotics.com`
3. Update DNS records as instructed by Vercel

## Assets Needed from Team

- [ ] Open Graph image (1200x630px recommended) — currently using logo as placeholder
- [ ] Favicon (32x32px and 16x16px PNG) — currently using logo
- [ ] Any additional product photos or environment images
- [ ] Team photos (if Company page is expanded later)

## Contact

All CTA buttons link to: `mailto:contact@beaver-robotics.com`
