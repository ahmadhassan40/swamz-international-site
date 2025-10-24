# SWAMZ International - B2B Portfolio Website

Premium company portfolio website for SWAMZ International, a B2B supplier of industrial protective gloves and precision engine machinery.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation & Development
```bash
npm install
npm run dev
```

Access the site at `http://localhost:8080`

### Build for Production
```bash
npm run build
npm run preview  # Preview production build
```

## 📋 Features

- **Dual Business Lines**: Textiles (protective gloves) and Machineries (engine equipment)
- **20+ Products**: Complete catalog with filtering and search
- **Case Studies**: Real-world success stories with metrics
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Dark Mode**: System preference detection with manual toggle
- **Framer Motion**: Smooth scroll animations and micro-interactions
- **SEO Optimized**: Meta tags, Open Graph, sitemap.xml, robots.txt
- **Accessibility**: WCAG 2.1 AA compliant with semantic HTML

## 🎨 Tech Stack

- **Framework**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: shadcn/ui + Radix UI primitives
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router v6

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── Layout.tsx       # Header, footer, navigation
│   ├── ProductCard.tsx
│   ├── TestimonialCard.tsx
│   └── StatCard.tsx
├── data/
│   ├── products.json    # Product catalog (20 items)
│   ├── case-studies.json
│   ├── jobs.json
│   └── blog-posts.json
├── pages/
│   ├── Home.tsx
│   ├── Textiles.tsx
│   ├── Machineries.tsx
│   ├── Products.tsx
│   └── Contact.tsx
└── index.css           # Design system tokens
```

## 🎨 Design System

All colors, fonts, and styles are defined in `src/index.css` and `tailwind.config.ts`:

- **Primary**: Brand Blue (#1D4ED8)
- **Accent**: Teal (#14B8A6)
- **Fonts**: Poppins (headings), Inter (body)
- **Dark Mode**: Full support with semantic color tokens

## 🔧 Customization

### Update Products
Edit `src/data/products.json` to add/modify products.

### Change Brand Colors
Update HSL values in `src/index.css` under `:root` and `.dark` sections.

### Add New Pages
1. Create page component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `src/components/Layout.tsx`

## 📧 Contact Form Integration

The contact form (`src/pages/Contact.tsx`) currently uses client-side validation. To connect to an email service:

1. Install email service SDK (SendGrid, Mailgun, etc.)
2. Create API endpoint or serverless function
3. Update form submission handler to POST to your endpoint

## 🌐 Deployment

This site is ready to deploy to:
- **Vercel**: `vercel deploy`
- **Netlify**: Connect Git repo or `netlify deploy`
- **Any static host**: Upload contents of `dist/` folder

## 📄 License

Copyright © 2025 SWAMZ International. All rights reserved.
