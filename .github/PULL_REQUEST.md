# Pull Request: Add animate.css Animations

## Summary
This PR adds smooth, scroll-triggered animations across the entire Pixel Flame portfolio website using animate.css and IntersectionObserver API.

## Changes Made

### Installation & Setup
- ✅ Installed `animate.css` package
- ✅ Imported animate.css in main.tsx
- ✅ Created `src/utils/initAnimateOnScroll.ts` helper with IntersectionObserver

### Animation Implementation

#### Home Page (`src/pages/Home.tsx`)
- Hero section title: `fadeInUp`
- Hero section subtitle: `fadeInUp` with 0.2s delay
- Hero section buttons: `fadeInUp` with 0.4s delay
- Services section title: `fadeIn`
- Service cards: `fadeInUp` with staggered delays (0s, 0.1s, 0.2s, 0.3s)
- Featured projects: `fadeInUp` with staggered delays (0s, 0.15s, 0.3s)

#### Navbar (`src/components/Navbar.tsx`)
- Entire navbar: `fadeInDown`

#### Projects Page (`src/pages/Projects.tsx`)
- Project cards: `fadeInUp` with staggered delays based on index

#### Project Detail (`src/pages/ProjectDetail.tsx`)
- Main project image: `fadeIn`
- Screenshot gallery: `zoomIn` with staggered delays

#### Blog Page (`src/pages/Blog.tsx`)
- Blog post cards: `fadeInUp` with staggered delays based on index

#### Contact Page (`src/pages/Contact.tsx`)
- Contact info cards: `fadeInUp` with delays (0s, 0.1s, 0.2s)
- Contact form: `fadeInUp`

### Accessibility Features
- ✅ **Respects `prefers-reduced-motion`**: Automatically disables all animations for users who prefer reduced motion
- ✅ **Performance-friendly**: Uses IntersectionObserver for efficient scroll detection
- ✅ **One-time animations**: Elements animate once and then remove animation classes
- ✅ **Cleanup on unmount**: Observer disconnects when component unmounts

## Technical Details

### IntersectionObserver Helper
```typescript
// src/utils/initAnimateOnScroll.ts
- Checks for prefers-reduced-motion preference
- Creates IntersectionObserver with 0.1 threshold
- Observes all elements with [data-animate] attribute
- Applies animate__animated class and animate__[name] class
- Supports custom delays via data-animate-delay attribute
- Removes animation classes after completion
- Returns cleanup function
```

### Usage Pattern
```html
<!-- Basic animation -->
<div data-animate="fadeInUp">Content</div>

<!-- Animation with delay -->
<div data-animate="fadeInUp" data-animate-delay="0.2s">Content</div>

<!-- Staggered animations in loops -->
{items.map((item, index) => (
  <div data-animate="fadeInUp" data-animate-delay={`${index * 0.1}s`}>
    {item}
  </div>
))}
```

## Testing
- ✅ Build passes successfully
- ✅ No TypeScript errors
- ✅ No console errors
- ✅ Bundle size increase: 73.45 KB CSS (animate.css library)
- ✅ JavaScript bundle: minimal increase (+1.4 KB for helper)

## Performance Impact
- **CSS Bundle**: +73.45 KB (animate.css)
- **JS Bundle**: +1.4 KB (IntersectionObserver helper)
- **Runtime**: Negligible - IntersectionObserver is highly efficient
- **Accessibility**: Full support for prefers-reduced-motion

## Browser Compatibility
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Screenshots/Demo
Animations include:
- Smooth fade-in effects on scroll
- Subtle slide-up motions for cards
- Gentle zoom effects for images
- Staggered timing for visual polish
- Professional, non-distracting animations

## Breaking Changes
None - all animations are additive and respect user preferences.

## Checklist
- [x] Code builds successfully
- [x] No console errors
- [x] Animations are smooth and subtle
- [x] Respects prefers-reduced-motion
- [x] IntersectionObserver properly cleans up
- [x] Staggered animations work correctly
- [x] All pages tested

## Related Issues
Implements animation system as requested.

---

**Ready for review and merge into main branch.**
