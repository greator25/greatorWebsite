# Greator Software - Design Guidelines

## Design Approach
**Reference-Based + System Hybrid**: Drawing inspiration from Linear (clean, technical professionalism), Stripe (sophisticated simplicity), and Vercel (modern tech aesthetic) while maintaining corporate credibility.

## Typography System

**Primary Font**: Montserrat (Google Fonts)
- Hero "Greator": 700 weight, 3.5rem (desktop), 2.5rem (mobile)
- Hero "Software": 700 weight, 2.25rem (desktop), 1.75rem (mobile)
- H1: 600 weight, 2.5rem (desktop), 2rem (mobile)
- H2: 600 weight, 2rem (desktop), 1.5rem (mobile)
- H3: 600 weight, 1.5rem
- Body: 400 weight, 1rem, line-height 1.7
- Small text/captions: 400 weight, 0.875rem

**Secondary Font**: Inter (Google Fonts) for body copy and descriptions, provides excellent readability

## Color Implementation

**Primary Palette**:
- Electric Blue (#0077FF): Primary CTAs, links, accents, hover states
- Deep Charcoal (#0D1B2A): Headings, body text, navigation
- Off-White (#E0E5EC): Main background, card backgrounds

**Extended Palette**:
- Electric Blue variants: #0066DD (hover), #0055BB (active), rgba(0, 119, 255, 0.1) (backgrounds)
- Charcoal variants: #1A2937 (medium), #2D3E50 (lighter sections)
- White: #FFFFFF for contrast elements
- Success green: #10B981, Warning: #F59E0B, Error: #EF4444

## Layout System

**Spacing Scale**: Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Section padding: py-20 (desktop), py-12 (mobile)
- Container max-width: max-w-7xl with px-6 (mobile), px-8 (desktop)
- Card padding: p-8 (desktop), p-6 (mobile)
- Button padding: px-8 py-3
- Grid gaps: gap-8 (desktop), gap-6 (mobile)

## Component Library

### Navigation
- Fixed header with subtle shadow on scroll
- Logo (PNG without background) + "Greator Software" text on left
- Navigation links (Home, Services, Portfolio, Careers, Contact) center-aligned
- Electric Blue underline on active/hover states
- Mobile: Hamburger menu transforming to full-screen overlay

### Hero Section
**Layout**: Full viewport height (min-h-screen), centered content with abstract tech background image
**Image**: Modern abstract visualization of AI/technology (geometric patterns, neural networks, or flowing data streams) with gradient overlay (Deep Charcoal to transparent)
**Content Structure**:
- Logo PNG (no background) centered, 120px width
- "Greator Software" text below logo with specified sizing
- Tagline with fade-in animation
- Three key highlights in horizontal pill badges with Electric Blue backgrounds
- Primary CTA button with blurred background (backdrop-blur-md, bg-white/20)

### About Section
Two-column grid (desktop), stacked (mobile)
- Left: Mission statement with large quote styling
- Right: Values grid (2x2) with icon + title + description cards
- Background: subtle gradient from Off-White to pure white

### Services Section
Four-column grid (desktop), 2-column (tablet), 1-column (mobile)
**Cards**:
- Elevated with subtle shadow (shadow-lg)
- Icon at top (64px, Electric Blue)
- Service title (H3)
- Description paragraph
- Feature list with checkmarks (Electric Blue)
- Hover: Lift effect (transform translateY(-4px))

### Portfolio Section
Masonry-style grid showcasing three projects
**Project Cards**:
- Large project image/mockup at top
- Project name (H3)
- Technology tags (small pills with Electric Blue borders)
- Description text
- Metrics/achievements in highlight boxes
- "View Case Study" link with arrow

### Culture Section
**Layout**: Alternating image-text blocks
- Team collaboration image + description
- Core values icon grid (4 values with icons)
- Benefits/perks cards (3-column grid)
- Background: Deep Charcoal with white text for contrast

### Careers Page
**Header**: Full-width banner with "Join Our Team" headline over office/team image
**Job Listings**:
- Card-based layout with clear hierarchy
- Job title (H3), location, salary range prominent
- Expandable/collapsible sections for responsibilities and qualifications
- "Apply Now" CTA button (Electric Blue, full width on mobile)

### Contact Section
Two-column split:
- Left: Contact form (name, email, message fields with Electric Blue focus states)
- Right: Office locations with map icons, phone numbers, email
- Background: Light gray (#F5F7FA)

### Footer
Three-column layout (desktop), stacked (mobile)
- Column 1: Logo + tagline
- Column 2: Quick links
- Column 3: Contact information
- Bottom bar: Copyright + social links
- Background: Deep Charcoal, light text

## Interactions & Animations

**Micro-interactions**:
- Button hover: Scale 1.02, brightness increase
- Link hover: Electric Blue underline slide-in (from left)
- Card hover: Shadow intensification + slight lift
- Form focus: Electric Blue border glow

**Page Animations** (minimal):
- Hero: Fade-in on load
- Scroll-triggered: Subtle fade-up for section headings only

## Images

**Hero Section**: Abstract AI/tech visualization - flowing data streams or geometric neural network pattern with Deep Charcoal gradient overlay (1920x1080)

**About Section**: Professional team collaboration photo showing diverse team working together (1200x800)

**Culture Section**: 
- Modern office workspace with natural light (1200x600)
- Team celebration/event photo (800x600)

**Portfolio Projects**: Mockups/screenshots of each project interface (1400x900 each)

**Careers Header**: Bright, welcoming office environment or team brainstorming session (1920x600)

All images should convey professionalism, innovation, and collaboration with high-quality resolution.

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked layouts)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (full multi-column layouts)

## Accessibility
- Minimum contrast ratio 4.5:1 for text
- Focus indicators on all interactive elements (Electric Blue ring)
- Semantic HTML with proper heading hierarchy
- Alt text for all images
- Form labels and error messages clearly visible