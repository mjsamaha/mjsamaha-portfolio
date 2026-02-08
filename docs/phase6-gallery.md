# 🎯 Phase 6: Album-Based Bird Photography Gallery - Revised Guide

---

## 📋 Overview

**Goal:** Create a stunning, album-organized photo gallery with ShadCN/UI components and perfect light/dark theme support.

**Key Changes from Original:**
- ✅ Album-based organization (Songbirds, Waterfowl, Birds of Prey)
- ✅ Skip featured carousel (already exists on homepage)
- ✅ Focus on gallery page perfection
- ✅ ShadCN/UI components throughout
- ✅ Seamless light/dark theme integration



VERIFY WE DID STEP 5 ALL THE WAY

## **Step 5: Gallery Page with Album Navigation (`app/gallery/page.tsx`)**

```typescript
// Update: app/gallery/page.tsx
// Prompt for Copilot:

/**
 * TASK: Build main gallery page with album-based navigation.
 * 
 * REQUIREMENTS:
 * 1. Import albums and photos from '@/content/photos'
 * 2. Client component with state for album selection and lightbox
 * 3. Filter photos by selected album
 * 4. Handle lightbox open/close and navigation
 * 5. Keyboard shortcuts for lightbox
 * 6. SEO metadata
 * 7. Light/dark theme support throughout
 * 
 * STATE:
 * - selectedAlbum: AlbumCategory | null
 * - filteredPhotos: Photo[]
 * - lightboxOpen: boolean
 * - currentPhotoIndex: number
 * 
 * PAGE STRUCTURE:
 * 1. Hero Section:
 *    - Title: "Bird Photography Gallery"
 *    - Subtitle: "Organized collections of avian portraits and moments"
 *    - Optional: Link to Flickr with ExternalLink icon
 * 
 * 2. Album Grid (AlbumGrid component)
 *    - Shows all albums
 *    - Handles album selection
 * 
 * 3. Section Divider (if album selected):
 *    - Show active album name with icon
 *    - "Back to All Albums" button
 *    - Photo count: "24 photos"
 * 
 * 4. Photo Grid (PhotoGrid component)
 *    - Shows photos from selected album or all
 *    - Opens lightbox on click
 * 
 * 5. Photo Lightbox (PhotoLightbox component)
 *    - Controlled by state
 *    - Navigates within filtered photos
 * 
 * FILTERING LOGIC:
 * - If selectedAlbum is null: Show all photos
 * - If selectedAlbum is set: Filter photos by album
 * - Update filteredPhotos whenever selectedAlbum changes
 * 
 * LIGHTBOX HANDLERS:
 * - handlePhotoClick(photo, index):
 *   → Set currentPhotoIndex, open lightbox
 * - handleLightboxClose():
 *   → Close lightbox, clear index
 * - handleLightboxNavigate(direction):
 *   → Update index, wrap around at boundaries
 * 
 * KEYBOARD NAVIGATION:
 * useEffect(() => {
 *   if (!lightboxOpen) return
 *   const handleKey = (e: KeyboardEvent) => {
 *     if (e.key === 'ArrowLeft') handleLightboxNavigate('prev')
 *     if (e.key === 'ArrowRight') handleLightboxNavigate('next')
 *     if (e.key === 'Escape') handleLightboxClose()
 *   }
 *   window.addEventListener('keydown', handleKey)
 *   return () => window.removeEventListener('keydown', handleKey)
 * }, [lightboxOpen, currentPhotoIndex])
 * 
 * ACTIVE ALBUM HEADER:
 * Show when album selected:
 * - Badge with album icon
 * - Album name (text-2xl font-bold)
 * - Description (text-muted-foreground)
 * - Photo count badge
 * - "View All Albums" button (variant="outline")
 * 
 * METADATA:
 * export const metadata: Metadata = {
 *   title: "Photography Gallery | Matthew Samaha",
 *   description: "Bird photography collection featuring raptors, waterfowl, songbirds, and shorebirds"
 * }
 * 
 * ANIMATIONS:
 * - Hero: fadeInUp
 * - Album grid: staggerChildren
 * - Photo grid: AnimatePresence when switching albums
 * 
 * OUTPUT: Complete album-based gallery page
 */
```

---

## **Step 6: Album Icons and Theming (`lib/album-config.ts`)**

```typescript
// Create: lib/album-config.ts
// Prompt for Copilot:

/**
 * TASK: Centralize album configuration with icons and theme colors.
 * 
 * REQUIREMENTS:
 * 1. Map album categories to lucide-react icons
 * 2. Define theme-aware accent colors per album
 * 3. Export helper to get album config
 * 
 * ALBUM ICONS (from lucide-react):
 * - Birds of Prey: Eagle or Bird icon
 * - Waterfowl: Waves or Droplets icon
 * - Songbirds: Music or Feather icon
 * - Shorebirds: Anchor or Shell icon
 * 
 * ACCENT COLORS (CSS variables):
 * Use Tailwind color classes that work in light/dark:
 * - Birds of Prey: amber-500 (golden/brown theme)
 * - Waterfowl: blue-500 (water theme)
 * - Songbirds: emerald-500 (nature/trees theme)
 * - Shorebirds: cyan-500 (coastal theme)
 * 
 * TYPE:
 * type AlbumConfig = {
 *   icon: LucideIcon
 *   accentColor: string (Tailwind class)
 *   lightBg: string (Tailwind class)
 *   darkBg: string (Tailwind class)
 * }
 * 
 * EXPORT:
 * export const albumConfig: Record<AlbumCategory, AlbumConfig>
 * export const getAlbumIcon = (album: AlbumCategory): LucideIcon
 * export const getAlbumAccent = (album: AlbumCategory): string
 * 
 * OUTPUT: Theme-aware album configuration
 */
```

---

## **Step 7: Gallery Loading States (`components/gallery/GalleryLoader.tsx`)**

```typescript
// Create: components/gallery/GalleryLoader.tsx
// Prompt for Copilot:

/**
 * TASK: Create skeleton loaders matching gallery layout.
 * 
 * REQUIREMENTS:
 * 1. Use ShadCN Skeleton component
 * 2. Two variants: AlbumGridLoader, PhotoGridLoader
 * 3. Match exact layout of real components
 * 4. Theme-aware shimmer effect
 * 
 * AlbumGridLoader:
 * - Grid: Same as AlbumGrid (4 cols)
 * - Each card: Skeleton with aspect-video + content below
 * - Show 4 album placeholders
 * 
 * PhotoGridLoader:
 * - Grid: Same as PhotoGrid (4 cols)
 * - Each item: Skeleton with aspect-square
 * - Show 12 photo placeholders
 * 
 * SKELETON STYLING:
 * - Use ShadCN Skeleton component
 * - Automatically handles light/dark theme
 * - Add rounded corners to match real cards
 * 
 * OUTPUT: Loading states matching gallery layout
 */
```

---

## **Step 8: Empty State for Albums (`components/gallery/EmptyAlbum.tsx`)**

```typescript
// Create: components/gallery/EmptyAlbum.tsx
// Prompt for Copilot:

/**
 * TASK: Create empty state for albums with no photos.
 * 
 * REQUIREMENTS:
 * 1. Show when selected album has 0 photos
 * 2. Display album icon and name
 * 3. Helpful message and action
 * 4. Use ShadCN Card component
 * 5. Theme-aware styling
 * 
 * PROPS:
 * - album: Album
 * - onBackToAlbums: () => void
 * 
 * LAYOUT:
 * - Centered Card (max-w-md)
 * - Album icon (large, muted)
 * - Title: "No photos in {album.name} yet"
 * - Description: "Check back soon for new additions"
 * - Button: "View All Albums" → calls onBackToAlbums
 * 
 * STYLING:
 * - Card: bg-card border-border
 * - Icon: text-muted-foreground size-16
 * - Text: text-muted-foreground
 * - Button: variant="outline"
 * 
 * ANIMATION:
 * - Fade in with slight upward movement
 * 
 * OUTPUT: Empty state component for albums
 */
```

---

## **Step 9: Image Optimization Config (`next.config.js`)**

```javascript
// Update: next.config.js
// Prompt for Copilot:

/**
 * TASK: Configure Next.js for optimal gallery performance.
 * 
 * REQUIREMENTS:
 * 1. Configure image formats (WebP, AVIF)
 * 2. Set device sizes for responsive images
 * 3. Enable sharp for image processing
 * 4. Set up local image optimization
 * 
 * CONFIG:
 * const nextConfig = {
 *   images: {
 *     formats: ['image/avif', 'image/webp'],
 *     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
 *     imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
 *     minimumCacheTTL: 60,
 *   }
 * }
 * 
 * INSTALL:
 * npm install sharp
 * 
 * OUTPUT: Performance-optimized image configuration
 */
```

---

## **Step 10: Theme Toggle Integration Check**

```typescript
// Verify: components/ThemeToggle.tsx (or similar)
// Prompt for Copilot:

/**
 * TASK: Ensure theme toggle works seamlessly with gallery.
 * 
 * CHECK:
 * 1. Theme toggle button exists in Header
 * 2. Uses next-themes for theme management
 * 3. All gallery components use CSS variables (not hardcoded colors)
 * 4. ShadCN components automatically theme-aware
 * 
 * IF MISSING THEME TOGGLE:
 * 1. Install: npm install next-themes
 * 2. Add ThemeProvider to app/layout.tsx
 * 3. Create theme toggle button:
 *    - Sun icon for light mode
 *    - Moon icon for dark mode
 *    - Use ShadCN Button variant="ghost"
 * 
 * THEME VERIFICATION:
 * Test that all these adapt to theme:
 * □ Album cards
 * □ Photo grid
 * □ Lightbox backdrop
 * □ Lightbox metadata panel
 * □ Hover overlays
 * □ Loading skeletons
 * □ Empty states
 * 
 * OUTPUT: Confirm theme system works across gallery
 */
```

---

## ✅ **Validation Checklist**

### **Album Organization**
- [ ] All photos assigned to correct albums
- [ ] Album grid displays all 4 albums
- [ ] Album covers show representative photos
- [ ] Photo counts accurate per album
- [ ] Click album filters gallery correctly

### **Photo Grid**
- [ ] Grid displays all photos when no album selected
- [ ] Grid filters by album when selected
- [ ] Photos use Next.js Image optimization
- [ ] Hover overlay shows species info
- [ ] Click opens lightbox at correct photo

### **Lightbox**
- [ ] Opens with correct photo
- [ ] Navigation works (prev/next)
- [ ] Metadata displays correctly
- [ ] EXIF data in accordion (if available)
- [ ] Keyboard shortcuts work (arrows, escape)
- [ ] Close button works
- [ ] Photo counter accurate
- [ ] Album badge shows (if in album context)

### **Theme Support**
- [ ] All components work in light mode
- [ ] All components work in dark mode
- [ ] No hardcoded colors (all CSS variables)
- [ ] Hover states visible in both themes
- [ ] Overlays readable in both themes
- [ ] Loading skeletons match theme

### **Responsive**
- [ ] Album grid: 1→2→4 cols on breakpoints
- [ ] Photo grid: 2→3→4 cols on breakpoints
- [ ] Lightbox stacks metadata on mobile
- [ ] Touch gestures work on mobile
- [ ] All text readable on small screens

### **Performance**
- [ ] Images lazy load
- [ ] No layout shift during load
- [ ] Smooth transitions between albums
- [ ] Lightbox images preload adjacent photos
- [ ] LCP < 2.5s

---

## 🚀 **Test Commands**

```bash
# Install dependencies
npm install sharp next-themes

# Add ShadCN components (if not already added)
npx shadcn@latest add dialog accordion badge skeleton

# Test development
npm run dev

# Test URLs:
# http://localhost:3000/gallery
# - Click each album
# - Open lightbox
# - Test keyboard navigation
# - Toggle theme

# Build for production
npm run build
npm start

# Performance check
npx lighthouse http://localhost:3000/gallery --view
```

---

## 📸 **Expected Result**

Professional album-based gallery with:
1. ✅ Four distinct albums (Birds of Prey, Waterfowl, Songbirds, Shorebirds)
2. ✅ Beautiful album selection grid with cover photos
3. ✅ Filtered photo grid per album
4. ✅ Full-featured lightbox with metadata
5. ✅ Perfect light/dark theme support
6. ✅ ShadCN/UI components throughout
7. ✅ Responsive design (mobile→desktop)
8. ✅ Optimized images with Next.js
9. ✅ Smooth animations and transitions
10. ✅ Keyboard navigation support

---

**Key difference from original plan:** Album-first approach makes the gallery feel curated and organized, rather than just a flat grid. Each album tells a story about a different type of bird photography!