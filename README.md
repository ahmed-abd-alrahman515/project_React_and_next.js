# Pixel Flame Portfolio Website

A modern, professional portfolio/agency website built with React, TypeScript, Tailwind CSS, and Supabase.

![Pixel Flame](https://img.shields.io/badge/Pixel%20Flame-Portfolio-7A2CF6?style=for-the-badge&logo=react)

## Overview

Pixel Flame is a complete, production-ready portfolio website featuring a dark neon theme with custom brand colors. The site includes 6 main pages with full functionality for showcasing projects, blog posts, and collecting client inquiries.

## Features

- **Modern Dark Neon Design**: Stunning UI with gradient effects and smooth animations
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **6 Complete Pages**: Home, About, Services, Projects, Blog, Contact
- **Dynamic Content**: Projects and blog posts powered by Supabase
- **Working Contact Form**: Form submissions stored in database
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Type-Safe**: Built with TypeScript for reliability
- **Fast Performance**: Optimized images and lazy loading

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS with custom configuration
- **Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins (Google Fonts)
- **Deployment Ready**: Optimized for Vercel

## Color Palette

The design uses exact colors extracted from the Pixel Flame logo:

- **Background**: `#000000`, `#0A0A0A`
- **Primary Gradient**: `#7A2CF6` → `#E24BFF`
- **Secondary Gradient**: `#3D6DFF` → `#4CF0FF`
- **Accent Colors**: `#F077FF`, `#A05DFF`, `#6DB8FF`
- **Text**: `#FFFFFF`, `#CFCFCF`

## Project Structure

```
pixel-flame/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # Sticky navigation with animations
│   │   └── Footer.tsx         # Footer with links and social media
│   ├── pages/
│   │   ├── Home.tsx           # Hero, services, featured projects
│   │   ├── About.tsx          # Company story, skills, mission
│   │   ├── Services.tsx       # Detailed service descriptions
│   │   ├── Projects.tsx       # Project grid with filters
│   │   ├── ProjectDetail.tsx  # Single project page
│   │   ├── Blog.tsx           # Blog post list
│   │   ├── BlogDetail.tsx     # Single article page
│   │   └── Contact.tsx        # Contact form with validation
│   ├── lib/
│   │   └── supabase.ts        # Supabase client and types
│   ├── types/
│   │   └── index.ts           # TypeScript interfaces
│   ├── App.tsx                # Main app with routing logic
│   ├── main.tsx               # App entry point
│   └── index.css              # Global styles
├── seed-data.md               # Sample data for database
└── README.md                  # This file
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account (database is already configured)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Environment variables are already configured in `.env`

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## Adding Content

### Adding Projects

Projects are stored in the Supabase `projects` table. Each project includes:

- Title, slug, category (web/mobile/backend/uiux)
- Description, problem statement, solution
- Tech stack array, images, timeline, results
- Featured flag for home page display

See `seed-data.md` for sample project data.

### Adding Blog Posts

Blog posts are stored in the `blog_posts` table:

- Title, slug, excerpt, full content (Markdown supported)
- Featured image, author, tags
- Published status for draft management

See `seed-data.md` for sample blog posts.

### Managing Contact Submissions

Form submissions are automatically saved to the `contact_submissions` table with:

- Name, email, subject, message
- Status tracking (new/read/responded)
- Timestamp for organization

## Database Schema

The project uses three main tables:

1. **projects**: Portfolio projects with filtering and detail pages
2. **blog_posts**: Articles with full content and metadata
3. **contact_submissions**: Form entries from the contact page

All tables have Row Level Security (RLS) enabled:
- Public can read projects and published blog posts
- Public can insert contact submissions
- Authenticated users can manage all content

## Customization

### Brand Colors

Edit `tailwind.config.js` to update colors:

```javascript
colors: {
  'pf-purple': '#7A2CF6',
  'pf-pink': '#E24BFF',
  // ... other colors
}
```

### Content

Update text content in:
- `src/pages/Home.tsx` - Hero section, taglines
- `src/pages/About.tsx` - Company story, mission
- `src/pages/Services.tsx` - Service descriptions
- `src/components/Footer.tsx` - Contact information

### Fonts

Change fonts in `tailwind.config.js` and update the import in `src/index.css`

## SEO & Performance

### SEO Features

- Meta tags for all pages
- Open Graph tags for social sharing
- Structured data (JSON-LD) for organization
- Semantic HTML structure
- Descriptive alt text for images

### Performance Optimizations

- Lazy loading for images
- Optimized bundle with code splitting
- Smooth scroll behavior
- Efficient re-rendering with React best practices

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel dashboard
3. Add environment variables (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)
4. Deploy

### Build Command

```bash
npm run build
```

### Environment Variables

Required environment variables:
- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key

## Pages Overview

### Home
- Hero section with CTA buttons
- Services preview cards
- Featured projects showcase
- Why Choose Us section
- Client testimonials
- Final CTA

### About
- Company story
- Skills & expertise grid
- Mission & Vision statements
- Tech stack showcase

### Services
- Four main services with detailed descriptions
- Technologies used for each service
- Example projects
- What clients get (deliverables)

### Projects
- Grid layout with category filtering
- Project cards with images and tech stack
- Click to view full project details

### Project Detail
- Full project description
- Problem & solution sections
- Tech stack badges
- Timeline and results
- Screenshot gallery

### Blog
- Article cards with images
- Read time estimation
- Tags for categorization
- Published date display

### Blog Detail
- Full article content (Markdown support)
- Author information
- Related metadata
- Back to blog navigation

### Contact
- Contact information cards
- Working form with validation
- Email, subject, message fields
- Success/error feedback
- Direct database storage

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary and belongs to Pixel Flame.

## Contact

For questions or support, contact: hello@pixelflame.com

---

Built with passion by Pixel Flame
