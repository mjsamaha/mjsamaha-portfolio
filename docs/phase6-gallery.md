# 🎯 Phase 6: Bird Photography Gallery - Expanded Guide

---

## 📋 Overview

**Goal:** Create a stunning, performant photo gallery that showcases personality and technical skill.

**Timeline:** Day 6

**Key Features:**
- Optimized image grid with Next.js Image
- Masonry or grid layout with hover effects
- Full-screen lightbox with navigation
- Filter by species, year, or tags
- Lazy loading and blur placeholders
- Zero backend cost (static images)

---

## **Step 1: Photo Metadata Structure (`src/content/photos.ts`)**

```typescript
// Create: src/content/photos.ts
// Prompt for Copilot:

/**
 * TASK: Create comprehensive photo metadata structure for gallery.
 * 
 * REQUIREMENTS:
 * 1. Define Photo type with all display and filter fields
 * 2. Include EXIF data (optional): camera, lens, settings
 * 3. Support filtering: species, year, location, tags
 * 4. Export helper functions for filtering and grouping
 * 5. Generate placeholder data (5-10 photos) with realistic metadata
 * 
 * PHOTO TYPE FIELDS:
 * - id: number
 * - src: string (path relative to /public/photos)
 * - alt: string (descriptive for accessibility)
 * - title?: string (display name)
 * - species: string (e.g., "Red-tailed Hawk", "Bald Eagle")
 * - location?: string (e.g., "Oakville, ON", "Point Pelee")
 * - year: number
 * - month?: number (1-12)
 * - tags: string[] (e.g., ["raptor", "in-flight", "portrait"])
 * - featured: boolean (for homepage carousel)
 * - exif?: {
 *     camera?: string
 *     lens?: string
 *     iso?: number
 *     aperture?: string (e.g., "f/5.6")
 *     shutterSpeed?: string (e.g., "1/1000")
 *     focalLength?: string (e.g., "400mm")
 *   }
 * - dimensions?: { width: number, height: number }
 * 
 * PLACEHOLDER DATA:
 * Create 5-10 sample photos with:
 * - Variety of species (hawks, eagles, songbirds, waterfowl)
 * - Years: 2023-2025
 * - Mix of tags: "raptor", "songbird", "waterfowl", "in-flight", "portrait", "landscape"
 * - Some with EXIF data, some without
 * - 2-3 marked as featured
 * 
 * HELPER FUNCTIONS:
 * - getAllPhotos(): Photo[]
 * - getPhotosBySpecies(species: string): Photo[]
 * - getPhotosByYear(year: number): Photo[]
 * - getPhotosByTag(tag: string): Photo[]
 * - getFeaturedPhotos(): Photo[]
 * - getAllSpecies(): string[] (unique list)
 * - getAllYears(): number[] (unique, sorted desc)
 * - getAllTags(): string[] (unique list)
 * 
 * NOTE: Use placeholder paths like "/photos/hawk-1.jpg" for now
 * Real images will be added later to /public/photos
 * 
 * OUTPUT: Complete photos.ts with types, data, and filter utilities
 */
```

---

## **Step 2: Photo Grid Component (`components/gallery/PhotoGrid.tsx`)**

```typescript
// Create: components/gallery/PhotoGrid.tsx
// Prompt for Copilot:

/**
 * TASK: Create responsive photo grid with Next.js Image optimization.
 * 
 * REQUIREMENTS:
 * 1. Accept photos array as prop
 * 2. Use Next.js Image component with proper sizing
 * 3. Responsive columns: 1 mobile, 2 tablet, 3-4 desktop
 * 4. Maintain aspect ratios (use aspect-square or aspect-video)
 * 5. Click handler to open lightbox
 * 6. Hover effect: Overlay with photo title/species
 * 7. Framer Motion: Stagger fade-in on mount
 * 8. Lazy loading with blur placeholder
 * 
 * PROPS:
 * - photos: Photo[]
 * - onPhotoClick: (photo: Photo, index: number) => void
 * 
 * LAYOUT OPTIONS (choose one):
 * Option A: CSS Grid with equal heights
 *   - grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
 *   - gap-4
 *   - aspect-square for consistency
 * 
 * Option B: Masonry layout (more dynamic)
 *   - Use columns-1 sm:columns-2 lg:columns-3 xl:columns-4
 *   - gap-4
 *   - Preserve aspect ratios
 * 
 * NEXT.JS IMAGE SETUP:
 * - sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
 * - quality: 90
 * - placeholder: "blur" (requires blurDataURL or static import)
 * - fill: true (with object-cover for grid)
 * - priority: false (lazy load)
 * 
 * HOVER OVERLAY:
 * - Gradient overlay from bottom
 * - Display: Species name, location (optional)
 * - Smooth opacity transition
 * - Cursor: pointer
 * 
 * ANIMATIONS:
 * - Container: staggerChildren (0.1s)
 * - Each photo: fadeInUp with scale
 * - Hover: scale(1.05) on image
 * 
 * ACCESSIBILITY:
 * - Alt text from photo.alt
 * - Keyboard navigable (tabIndex)
 * - Focus visible styles
 * 
 * OUTPUT: Responsive photo grid with hover effects and lazy loading
 */
```

---

## **Step 3: Photo Lightbox (`components/gallery/PhotoLightbox.tsx`)**

```typescript
// Create: components/gallery/PhotoLightbox.tsx
// Prompt for Copilot:

/**
 * TASK: Create full-screen lightbox using ShadCN Dialog.
 * 
 * REQUIREMENTS:
 * 1. Use ShadCN Dialog component for modal
 * 2. Display full-size image with navigation
 * 3. Show photo metadata: Title, species, location, EXIF data
 * 4. Previous/Next buttons to browse photos
 * 5. Keyboard navigation: Arrow keys, Escape to close
 * 6. Close button (X) in corner
 * 7. Swipe gesture support on mobile (optional)
 * 8. Smooth transitions between photos
 * 
 * PROPS:
 * - photos: Photo[] (all photos for navigation)
 * - currentIndex: number
 * - isOpen: boolean
 * - onClose: () => void
 * - onNavigate: (direction: 'prev' | 'next') => void
 * 
 * LAYOUT:
 * - Full-screen dialog (max-w-7xl)
 * - Image: Max height 80vh, centered
 * - Metadata panel: Below or beside image
 * - Navigation arrows: Fixed left/right edges
 * - Close button: Top-right corner
 * 
 * IMAGE DISPLAY:
 * - Next.js Image with priority for current photo
 * - Preserve aspect ratio
 * - Loading state while image loads
 * 
 * METADATA PANEL:
 * Display in elegant card:
 * - Title (if exists) or Species (large)
 * - Location (with MapPin icon)
 * - Date (formatted: "January 2025")
 * - Tags (as badges)
 * - EXIF data (collapsible accordion):
 *   - Camera, Lens
 *   - Settings: ISO, Aperture, Shutter Speed, Focal Length
 * 
 * NAVIGATION:
 * - Previous button: Left arrow, disabled if first photo
 * - Next button: Right arrow, disabled if last photo
 * - Keyboard: Left/Right arrows, Escape to close
 * - Counter: "3 / 24" showing position
 * 
 * ANIMATIONS:
 * - Dialog: Fade in backdrop, scale dialog
 * - Image transition: Crossfade between photos (AnimatePresence)
 * - Arrow buttons: Pulse on hover
 * 
 * MOBILE OPTIMIZATIONS:
 * - Stack metadata below image on small screens
 * - Touch swipe to navigate (optional: use framer-motion drag)
 * - Larger touch targets for buttons
 * 
 * OUTPUT: Full-featured lightbox with metadata and navigation
 */
```

---

## **Step 4: Gallery Filters (`components/gallery/GalleryFilters.tsx`)**

```typescript
// Create: components/gallery/GalleryFilters.tsx
// Prompt for Copilot:

/**
 * TASK: Create multi-facet filter controls for gallery.
 * 
 * REQUIREMENTS:
 * 1. Three filter types: Species, Year, Tags
 * 2. Dropdown or tabs for each filter type
 * 3. Show photo counts per filter option
 * 4. Active filter indicators
 * 5. "Clear Filters" button
 * 6. Responsive: Stack filters on mobile
 * 
 * PROPS:
 * - photos: Photo[] (for calculating counts)
 * - activeFilters: { species?: string, year?: number, tag?: string }
 * - onFilterChange: (filters: FilterState) => void
 * 
 * FILTER COMPONENTS:
 * Use ShadCN Select or Tabs for each filter:
 * 
 * 1. Species Filter:
 *    - Dropdown with all unique species
 *    - "All Species" default option
 *    - Show count: "Red-tailed Hawk (5)"
 * 
 * 2. Year Filter:
 *    - Dropdown with years (newest first)
 *    - "All Years" default
 *    - Show count: "2025 (8)"
 * 
 * 3. Tags Filter:
 *    - Flex wrap of tag buttons/badges
 *    - Click to toggle
 *    - Multiple tags can be active (OR logic)
 *    - Show count per tag
 * 
 * LAYOUT:
 * - Container: Flex row on desktop, column on mobile
 * - Spacing: gap-4
 * - Sticky below header when scrolling (optional)
 * 
 * ACTIVE STATE:
 * - Highlight active filters with accent color
 * - Show "X active filters" badge
 * - Clear button appears when filters active
 * 
 * CLEAR FILTERS:
 * - Button: "Clear All" with X icon
 * - Resets all filters to defaults
 * - Only visible when filters are active
 * 
 * RESULT COUNT:
 * Display: "Showing 12 of 45 photos" below filters
 * 
 * OUTPUT: Multi-facet filter component with counts and clear action
 */
```

---

## **Step 5: Gallery Page (`app/gallery/page.tsx`)**

```typescript
// Update: app/gallery/page.tsx
// Prompt for Copilot:

/**
 * TASK: Build main gallery page with filtering and lightbox.
 * 
 * REQUIREMENTS:
 * 1. Import all photos from '@/content/photos'
 * 2. Client component with state for filters and lightbox
 * 3. Filter photos based on active filters (species, year, tags)
 * 4. Open lightbox when photo clicked
 * 5. Handle keyboard navigation globally
 * 6. Smooth transitions when filtering
 * 7. Empty state if no photos match filters
 * 
 * STATE MANAGEMENT:
 * - filteredPhotos: Photo[]
 * - activeFilters: { species?: string, year?: number, tags?: string[] }
 * - lightboxOpen: boolean
 * - currentPhotoIndex: number
 * 
 * PAGE STRUCTURE:
 * 1. Hero section:
 *    - Title: "Bird Photography"
 *    - Subtitle: "Capturing nature's aviators in flight and at rest"
 *    - External link to Flickr (optional)
 * 
 * 2. GalleryFilters component
 * 
 * 3. Result count and sort options
 * 
 * 4. PhotoGrid component (filtered photos)
 * 
 * 5. PhotoLightbox component (controlled by state)
 * 
 * FILTERING LOGIC:
 * - Start with all photos
 * - Apply species filter if set: filter by species match
 * - Apply year filter if set: filter by year match
 * - Apply tag filters if set: filter by ANY tag match (OR logic)
 * - Update result count
 * 
 * LIGHTBOX HANDLERS:
 * - handlePhotoClick(photo, index): Open lightbox at index
 * - handleLightboxClose(): Close lightbox
 * - handleLightboxNavigate(direction): Move to prev/next photo
 * 
 * KEYBOARD NAVIGATION:
 * - useEffect to listen for arrow keys when lightbox open
 * - Escape to close lightbox
 * - Left/Right to navigate photos
 * 
 * EMPTY STATE:
 * - If filteredPhotos.length === 0:
 *   - Message: "No photos found matching your filters"
 *   - Button to clear filters
 *   - Illustration or icon (Camera icon from lucide-react)
 * 
 * METADATA:
 * - Title: "Photography Gallery | Matthew Samaha"
 * - Description: "Bird photography collection featuring raptors, songbirds, and waterfowl"
 * 
 * ANIMATIONS:
 * - Hero: fadeInUp
 * - Filters: slideInDown
 * - Grid: AnimatePresence for filter transitions
 * 
 * OUTPUT: Complete gallery page with filtering, lightbox, and keyboard nav
 */
```

---

## **Step 6: Featured Gallery for Homepage (`components/sections/FeaturedGallery.tsx`)**

```typescript
// Update: components/sections/FeaturedGallery.tsx (from Phase 4)
// Prompt for Copilot:

/**
 * TASK: Enhance featured gallery to use real photo data.
 * 
 * REQUIREMENTS:
 * 1. Import getFeaturedPhotos() from '@/content/photos'
 * 2. Display 3-5 featured photos in carousel
 * 3. Auto-rotate every 5 seconds
 * 4. Manual navigation with arrows and dots
 * 5. Click photo to open lightbox (reuse PhotoLightbox)
 * 6. "View Full Gallery" CTA button → /gallery
 * 7. "View on Flickr" secondary button (external link with icon)
 * 
 * CAROUSEL IMPLEMENTATION:
 * Option A: Embla Carousel (if installed)
 * Option B: Framer Motion AnimatePresence with auto-advance
 * 
 * LAYOUT:
 * - Section: py-16 bg-muted/30
 * - Title: "Featured Photography"
 * - Subtitle: "Recent captures from the field"
 * - Carousel: aspect-video or aspect-[4/3], rounded-lg
 * - Navigation: Arrows + dot indicators
 * - CTAs: Two buttons below carousel
 * 
 * CAROUSEL FEATURES:
 * - Auto-advance: 5 second interval
 * - Pause on hover
 * - Swipe on mobile
 * - Smooth transitions
 * - Preload adjacent images
 * 
 * PHOTO OVERLAY:
 * - Species name on bottom-left
 * - Click to view full size (opens lightbox)
 * 
 * CTA BUTTONS:
 * - Primary: "View Full Gallery" → Link to /gallery
 * - Secondary: "See More on Flickr" → External link
 *   (use ExternalLink icon from lucide-react)
 * 
 * OUTPUT: Enhanced carousel using real featured photos
 */
```

---

## **Step 7: Image Optimization Setup (`next.config.js`)**

```javascript
// Update: next.config.js
// Prompt for Copilot:

/**
 * TASK: Configure Next.js for optimal image handling.
 * 
 * REQUIREMENTS:
 * 1. Allow external image domains (if using Flickr links)
 * 2. Configure image formats (WebP, AVIF)
 * 3. Set device sizes for responsive images
 * 4. Enable sharp for better image processing
 * 
 * CONFIGURATION:
 * - images.remotePatterns: Allow flickr.com (if needed)
 * - images.formats: ['image/avif', 'image/webp']
 * - images.deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048]
 * - images.imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
 * 
 * SHARP INSTALLATION:
 * npm install sharp
 * 
 * OUTPUT: Optimized next.config.js for gallery performance
 */
```

---

## **Step 8: Placeholder Image Script (`scripts/generate-placeholders.js`)** *(Optional)*

```javascript
// Create: scripts/generate-placeholders.js
// Prompt for Copilot:

/**
 * TASK: Create script to generate blur placeholders for images.
 * 
 * REQUIREMENTS:
 * 1. Read all images from /public/photos
 * 2. Generate base64 blur placeholders
 * 3. Output JSON file with image paths and placeholders
 * 4. Use sharp library for image processing
 * 
 * USAGE:
 * node scripts/generate-placeholders.js
 * 
 * OUTPUT FILE:
 * public/image-placeholders.json
 * 
 * FORMAT:
 * {
 *   "photos/hawk-1.jpg": "data:image/jpeg;base64,..."
 * }
 * 
 * INTEGRATION:
 * Import placeholders in photos.ts and add to Photo objects
 * 
 * NOTE: This is optional enhancement for better UX
 * Can be done in Phase 7 (Polish) instead
 */
```

---

## **Step 9: Photo Upload Guide (`docs/ADD_PHOTOS.md`)**

```markdown
// Create: docs/ADD_PHOTOS.md
// Prompt for Copilot:

/**
 * TASK: Create documentation for adding photos to gallery.
 * 
 * INCLUDE:
 * 1. Folder structure: /public/photos/{year}/{species}/
 * 2. Image requirements:
 *    - Format: JPG or PNG
 *    - Max size: 5MB recommended
 *    - Recommended dimensions: 1920x1080 or larger
 *    - Naming convention: species-location-number.jpg
 * 
 * 3. Updating photos.ts:
 *    - Add new Photo object
 *    - Required fields
 *    - Optional EXIF data
 * 
 * 4. Testing:
 *    - Run npm run dev
 *    - Check /gallery page
 *    - Verify lightbox
 * 
 * 5. Optimization tips:
 *    - Use TinyPNG for compression
 *    - Remove unnecessary EXIF data
 *    - Consistent aspect ratios work best
 * 
 * OUTPUT: Markdown guide for easy photo additions
 */
```

---

## **Step 10: Gallery Loading States (`components/gallery/GalleryLoader.tsx`)**

```typescript
// Create: components/gallery/GalleryLoader.tsx
// Prompt for Copilot:

/**
 * TASK: Create skeleton loader for gallery while images load.
 * 
 * REQUIREMENTS:
 * 1. Shimmer animation effect
 * 2. Match PhotoGrid layout exactly
 * 3. Show 12 placeholder cards
 * 4. Use ShadCN Skeleton component
 * 
 * LAYOUT:
 * - Same grid as PhotoGrid: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
 * - Each skeleton: aspect-square, rounded
 * - Animated shimmer effect
 * 
 * USAGE:
 * Show while photos are loading (if fetching from API in future)
 * Or during filter transitions
 * 
 * OUTPUT: Skeleton loader component matching gallery grid
 */
```

---

## **Step 11: Gallery Stats Component (`components/gallery/GalleryStats.tsx`)** *(Optional)*

```typescript
// Create: components/gallery/GalleryStats.tsx
// Prompt for Copilot:

/**
 * TASK: Display interesting stats about the photo collection.
 * 
 * REQUIREMENTS:
 * 1. Calculate stats from photos array
 * 2. Display in card grid: Total Photos, Species Photographed, Years Active, etc.
 * 3. Use icons from lucide-react
 * 4. Animated counters (count up on view)
 * 
 * STATS TO SHOW:
 * - Total photos in collection
 * - Unique species count
 * - Years of photography
 * - Most photographed species
 * - Latest photo date
 * 
 * LAYOUT:
 * - Grid: 2 cols mobile, 4 cols desktop
 * - Each stat card: Icon, Number (large), Label
 * - Accent colors per card
 * 
 * ANIMATIONS:
 * - Count-up animation when in viewport
 * - Use framer-motion useInView + useSpring
 * 
 * PLACEMENT:
 * - Above or below gallery grid
 * - Can be toggled with "Show Stats" button
 * 
 * OUTPUT: Stats component showing collection highlights
 */
```

---

## **Step 12: Mobile Optimizations**

```typescript
// Create: hooks/useSwipe.ts
// Prompt for Copilot:

/**
 * TASK: Create custom hook for touch swipe gestures in lightbox.
 * 
 * REQUIREMENTS:
 * 1. Detect left/right swipe on touch devices
 * 2. Return onPrev/onNext callbacks
 * 3. Minimum swipe distance: 50px
 * 4. Prevent vertical scroll during horizontal swipe
 * 
 * USAGE:
 * const { onTouchStart, onTouchEnd } = useSwipe({
 *   onSwipeLeft: handleNext,
 *   onSwipeRight: handlePrev
 * })
 * 
 * INTEGRATION:
 * Add to PhotoLightbox image container
 * 
 * OUTPUT: Touch gesture hook for mobile lightbox navigation
 */
```

---

## ✅ **Validation Checklist**

After completing Phase 6:

- [ ] Gallery page displays all photos in responsive grid
- [ ] Photos lazy load with blur placeholders
- [ ] Hover effects show photo metadata
- [ ] Species filter works and shows counts
- [ ] Year filter works and shows counts
- [ ] Tag filters work (multiple selection)
- [ ] Clear filters button resets all filters
- [ ] Result count updates correctly
- [ ] Clicking photo opens lightbox
- [ ] Lightbox displays full-size image
- [ ] Previous/Next navigation works in lightbox
- [ ] Lightbox shows photo metadata (species, location, EXIF)
- [ ] Keyboard navigation works (arrows, Escape)
- [ ] Close button closes lightbox
- [ ] Counter shows current position (e.g., "3 / 24")
- [ ] Mobile swipe gestures work (if implemented)
- [ ] Featured gallery on homepage uses real photos
- [ ] Carousel auto-rotates and pauses on hover
- [ ] "View Full Gallery" button navigates to /gallery
- [ ] Empty state shows when no photos match filters
- [ ] All images optimized with Next.js Image
- [ ] No layout shift during image loading
- [ ] Gallery is fully responsive on all devices
- [ ] Performance: LCP < 2.5s, CLS < 0.1

---

## 🚀 **Test Commands**

```bash
# Add placeholder images (temporary)
mkdir -p public/photos
# Download some bird photos or use placeholder service

# Install sharp for image optimization
npm install sharp

# Add ShadCN Dialog if not already installed
npx shadcn@latest add dialog skeleton select

# Run development server
npm run dev

# Test URLs:
# http://localhost:3000/gallery
# http://localhost:3000 (featured gallery section)

# Build and check image optimization
npm run build
npm start

# Check bundle size
npm run build -- --analyze  # if using @next/bundle-analyzer
```

---

## 📸 **Expected Result**

Professional photo gallery with:
1. ✅ Fast-loading, optimized images with blur placeholders
2. ✅ Smooth hover effects revealing metadata
3. ✅ Multi-facet filtering (species, year, tags)
4. ✅ Full-screen lightbox with navigation and EXIF data
5. ✅ Keyboard and touch gesture support
6. ✅ Featured carousel on homepage
7. ✅ Zero backend cost (static files)
8. ✅ Mobile-first responsive design
9. ✅ SEO-optimized with proper metadata

---

## 🎨 **Enhancement Ideas for Later**

- Infinite scroll instead of showing all photos at once
- Search functionality (by species name, location)
- Map integration showing photo locations
- Download button for high-res versions
- Social sharing buttons per photo
- Comments or likes (if adding backend)
- Photo upload admin panel (Phase 7+)

---

**Next:** Phase 7 - Polish & Deployment! 🚀