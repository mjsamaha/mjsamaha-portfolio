/**
 * Bird Photography Gallery Schema
 * 
 * Type-safe data structure for bird photography portfolio including
 * metadata, camera settings, and filtering utilities.
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

/**
 * Common photo tags for categorization
 */
export type PhotoTag =
  | "raptor"
  | "waterfowl"
  | "songbird"
  | "shorebird"
  | "flight"
  | "portrait"
  | "perched"
  | "hunting"
  | "breeding-plumage"
  | "winter-plumage";

/**
 * Camera settings metadata
 */
export interface PhotoSettings {
  readonly iso?: number;
  readonly aperture?: string; // e.g., "f/5.6"
  readonly shutterSpeed?: string; // e.g., "1/2000"
  readonly focalLength?: string; // e.g., "400mm"
}

/**
 * Individual bird photo with metadata
 */
export interface Photo {
  readonly id: string;
  readonly src: string; // Path relative to /public/photos (original)
  readonly thumbnail: string; // Optimized thumbnail path
  readonly fullSize: string; // Full resolution image path
  readonly alt: string; // Accessibility text
  readonly commonName: string; // Common bird name
  readonly scientificName: string; // Latin scientific name
  readonly location?: string; // Optional location
  readonly year: number; // Year photo was taken
  readonly featured: boolean; // Display on homepage
  readonly tags: PhotoTag[]; // Categorization tags
  readonly camera?: string; // Camera model
  readonly lens?: string; // Lens information
  readonly settings?: PhotoSettings; // Camera settings
}

/**
 * Complete photo gallery data structure
 */
export interface PhotoGallery {
  readonly photos: readonly Photo[];
}

// ============================================================================
// DATA
// ============================================================================

export const photos = [
  {
    id: "red-tailed-hawk-1",
    src: "RedTailedHawk.jpg",
    thumbnail: "/photos/RedTailedHawk.jpg",
    fullSize: "/photos/RedTailedHawk.jpg",
    alt: "Red-tailed Hawk perched, displaying distinctive red tail feathers",
    commonName: "Red-tailed Hawk",
    scientificName: "Buteo jamaicensis",
    location: "Cootes Paradise, Hamilton, ON",
    year: 2024,
    featured: true,
    tags: ["raptor", "perched", "portrait"] as PhotoTag[],
    camera: "Canon EOS R5",
    lens: "Canon RF 100-500mm f/4.5-7.1L IS USM",
    settings: {
      iso: 800,
      aperture: "f/6.3",
      shutterSpeed: "1/1250",
      focalLength: "500mm"
    }
  },
  {
    id: "osprey-1",
    src: "Osprey.jpg",
    thumbnail: "/photos/Osprey.jpg",
    fullSize: "/photos/Osprey.jpg",
    alt: "Osprey in natural habitat near water",
    commonName: "Osprey",
    scientificName: "Pandion haliaetus",
    location: "Rattray Marsh, Mississauga, ON",
    year: 2024,
    featured: true,
    tags: ["raptor", "portrait"] as PhotoTag[],
    camera: "Canon EOS R5",
    lens: "Canon RF 100-500mm f/4.5-7.1L IS USM",
    settings: {
      iso: 640,
      aperture: "f/7.1",
      shutterSpeed: "1/1600",
      focalLength: "400mm"
    }
  },
  {
    id: "red-necked-grebe-1",
    src: "RedNeckedGrebe1.jpg",
    thumbnail: "/photos/RedNeckedGrebe1.jpg",
    fullSize: "/photos/RedNeckedGrebe1.jpg",
    alt: "Red-necked Grebe swimming, showing distinctive neck coloring",
    commonName: "Red-necked Grebe",
    scientificName: "Podiceps grisegena",
    location: "Colonel Samuel Smith Park, Toronto, ON",
    year: 2024,
    featured: false,
    tags: ["waterfowl", "portrait", "breeding-plumage"] as PhotoTag[]
  },
  {
    id: "red-breasted-merganser-1",
    src: "RedBrestedMerganser.jpg",
    thumbnail: "photos/thumbnails/RedBrestedMerganser-thumb.jpg",
    fullSize: "photos/full/RedBrestedMerganser.jpg",
    alt: "Red-breasted Merganser displaying characteristic crest and plumage",
    commonName: "Red-breasted Merganser",
    scientificName: "Mergus serrator",
    location: "Rattray Marsh, Mississauga, ON",
    year: 2024,
    featured: false,
    tags: ["waterfowl", "portrait"] as PhotoTag[]
  },
  {
    id: "lesser-yellowlegs-1",
    src: "LesserYellowlegs.jpg",
    thumbnail: "/photos/LesserYellowlegs.jpg",
    fullSize: "/photos/LesserYellowlegs.jpg",
    alt: "Lesser Yellowlegs wading in shallow water",
    commonName: "Lesser Yellowlegs",
    scientificName: "Tringa flavipes",
    location: "Rattray Marsh, Mississauga, ON",
    year: 2024,
    featured: true,
    tags: ["shorebird", "portrait"] as PhotoTag[]
  }
] satisfies Photo[];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get photos marked as featured for homepage display
 * @returns Array of featured photos
 */
export function getFeaturedPhotos(): Photo[] {
  return photos.filter(photo => photo.featured);
}

/**
 * Get photos by bird species (common name)
 * @param commonName - Bird common name (case-insensitive)
 * @returns Array of photos matching the species
 */
export function getPhotosBySpecies(commonName: string): Photo[] {
  const searchTerm = commonName.toLowerCase();
  return photos.filter(photo =>
    photo.commonName.toLowerCase().includes(searchTerm)
  );
}

/**
 * Get photos taken in a specific year
 * @param year - Year to filter by
 * @returns Array of photos from that year
 */
export function getPhotosByYear(year: number): Photo[] {
  return photos.filter(photo => photo.year === year);
}

/**
 * Get photos by tag
 * @param tag - Tag to filter by
 * @returns Array of photos with that tag
 */
export function getPhotosByTag(tag: PhotoTag): Photo[] {
  return photos.filter(photo => photo.tags.includes(tag));
}

/**
 * Get photos by location (partial match)
 * @param location - Location string to search for (case-insensitive)
 * @returns Array of photos from matching locations
 */
export function getPhotosByLocation(location: string): Photo[] {
  const searchTerm = location.toLowerCase();
  return photos.filter(photo =>
    photo.location?.toLowerCase().includes(searchTerm)
  );
}

/**
 * Get unique list of all bird species in gallery
 * @returns Array of unique common names (sorted alphabetically)
 */
export function getAllSpecies(): string[] {
  const species = [...new Set(photos.map(photo => photo.commonName))];
  return species.sort();
}

/**
 * Get unique list of all years represented in gallery
 * @returns Array of unique years (sorted newest first)
 */
export function getAllYears(): number[] {
  const years = [...new Set(photos.map(photo => photo.year))];
  return years.sort((a, b) => b - a);
}

/**
 * Get unique list of all tags used in gallery
 * @returns Array of unique tags (sorted alphabetically)
 */
export function getAllTags(): PhotoTag[] {
  const allTags = photos.flatMap(photo => [...photo.tags]);
  const uniqueTags = [...new Set(allTags)];
  return uniqueTags.sort() as PhotoTag[];
}

/**
 * Get unique list of all locations in gallery
 * @returns Array of unique locations (sorted alphabetically, undefined excluded)
 */
export function getAllLocations(): string[] {
  const locations = photos
    .map(photo => photo.location)
    .filter(location => location !== undefined) as string[];
  const uniqueLocations = [...new Set(locations)];
  return uniqueLocations.sort();
}

/**
 * Get a photo by its ID
 * @param id - Unique photo identifier
 * @returns Photo object or undefined if not found
 */
export function getPhotoById(id: string): Photo | undefined {
  return photos.find(photo => photo.id === id);
}

// ============================================================================
// TYPE EXPORTS
// ============================================================================

/**
 * Type of the photos array (inferred from const assertion)
 */
export type PhotosData = typeof photos;

/**
 * Individual photo type (extracted from array)
 */
export type PhotoItem = PhotosData[number];

export default photos;
