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
 * Album Categories
 */
export type AlbumCategory =
  | "birds-of-prey"
  | "waterfowl"
  | "songbirds"
  | "shorebirds";

/**
 * Album Metadata
 */
export interface Album {
  readonly id: AlbumCategory;
  readonly name: string;
  readonly description: string;
  readonly icon: string; // lucide-react icon name
  readonly coverPhoto: string; // photo id to use as album cover
}

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
  readonly album: AlbumCategory; // Primary album category
  readonly order?: number; // Manual sort order within album
}

/**
 * Complete photo gallery data structure
 */
export interface PhotoGallery {
  readonly photos: readonly Photo[];
  readonly albums: readonly Album[];
}

// ============================================================================
// DATA
// ============================================================================

export const albums: Album[] = [
  {
    id: "birds-of-prey",
    name: "Birds of Prey",
    description: "Raptors including hawks, eagles, falcons, and owls in their natural habitat.",
    icon: "Bird",
    coverPhoto: "red-tailed-hawk-1"
  },
  {
    id: "waterfowl",
    name: "Waterfowl",
    description: "Ducks, geese, grebes, and herons from lakes and wetlands.",
    icon: "Waves",
    coverPhoto: "red-necked-grebe-1"
  },
  {
    id: "songbirds",
    name: "Songbirds",
    description: "Passerines including warblers, sparrows, and other perching birds.",
    icon: "Music",
    coverPhoto: "eastern-kingbird-1"
  },
  {
    id: "shorebirds",
    name: "Shorebirds",
    description: "Sandpipers, plovers, and other birds of the shoreline.",
    icon: "Shell", // using Shell as a proxy for shore/beach
    coverPhoto: "lesser-yellowlegs-1"
  }
];

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
    },
    album: "birds-of-prey"
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
    },
    album: "birds-of-prey"
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
    tags: ["waterfowl", "portrait", "breeding-plumage"] as PhotoTag[],
    album: "waterfowl"
  },
  {
    id: "red-breasted-merganser-1",
    src: "RedBrestedMerganser.jpg",
    thumbnail: "/photos/RedBrestedMerganser.jpg",
    fullSize: "/photos/RedBrestedMerganser.jpg",
    alt: "Red-breasted Merganser displaying characteristic crest and plumage",
    commonName: "Red-breasted Merganser",
    scientificName: "Mergus serrator",
    location: "Rattray Marsh, Mississauga, ON",
    year: 2024,
    featured: false,
    tags: ["waterfowl", "portrait"] as PhotoTag[],
    album: "waterfowl"
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
    tags: ["shorebird", "portrait"] as PhotoTag[],
    album: "shorebirds"
  },
  {
    id: "cooper-hawk-1",
    src: "CooperHawk.jpg",
    thumbnail: "/photos/CooperHawk.jpg",
    fullSize: "/photos/CooperHawk.jpg",
    alt: "Cooper's Hawk perched in a tree",
    commonName: "Cooper's Hawk",
    scientificName: "Accipiter cooperii",
    location: "Rattray Marsh, Mississauga, ON",
    year: 2024,
    featured: false,
    tags: ["raptor", "perched"] as PhotoTag[],
    album: "birds-of-prey"
  },
  {
    id: "cooper-hawk-2",
    src: "CooperHawk1.jpg",
    thumbnail: "/photos/CooperHawk1.jpg",
    fullSize: "/photos/CooperHawk1.jpg",
    alt: "Cooper's Hawk in natural habitat",
    commonName: "Cooper's Hawk",
    scientificName: "Accipiter cooperii",
    location: "Rattray Marsh, Mississauga, ON",
    year: 2024,
    featured: false,
    tags: ["raptor", "perched"] as PhotoTag[],
    album: "birds-of-prey"
  },
  {
    id: "cooper-hawk-3",
    src: "CooperHawk2.jpg",
    thumbnail: "/photos/CooperHawk2.jpg",
    fullSize: "/photos/CooperHawk2.jpg",
    alt: "Cooper's Hawk looking for prey",
    commonName: "Cooper's Hawk",
    scientificName: "Accipiter cooperii",
    location: "Rattray Marsh, Mississauga, ON",
    year: 2024,
    featured: false,
    tags: ["raptor", "perched"] as PhotoTag[],
    album: "birds-of-prey"
  },
  {
    id: "cooper-hawk-4",
    src: "CooperHawk3.jpg",
    thumbnail: "/photos/CooperHawk3.jpg",
    fullSize: "/photos/CooperHawk3.jpg",
    alt: "Cooper's Hawk close-up portrait",
    commonName: "Cooper's Hawk",
    scientificName: "Accipiter cooperii",
    location: "Rattray Marsh, Mississauga, ON",
    year: 2024,
    featured: false,
    tags: ["raptor", "portrait"] as PhotoTag[],
    album: "birds-of-prey"
  },
  {
    id: "eastern-kingbird-1",
    src: "EasternKingbird.jpg",
    thumbnail: "/photos/EasternKingbird.jpg",
    fullSize: "/photos/EasternKingbird.jpg",
    alt: "Eastern Kingbird perched on a branch",
    commonName: "Eastern Kingbird",
    scientificName: "Tyrannus tyrannus",
    location: "Rattray Marsh, Mississauga, ON",
    year: 2024,
    featured: false,
    tags: ["songbird", "perched"] as PhotoTag[],
    album: "songbirds"
  },
  {
    id: "gray-catbird-1",
    src: "GrayCatbird.jpg",
    thumbnail: "/photos/GrayCatbird.jpg",
    fullSize: "/photos/GrayCatbird.jpg",
    alt: "Gray Catbird perched in shrubbery",
    commonName: "Gray Catbird",
    scientificName: "Dumetella carolinensis",
    location: "Rattray Marsh, Mississauga, ON",
    year: 2024,
    featured: false,
    tags: ["songbird", "perched"] as PhotoTag[],
    album: "songbirds"
  },
  {
    id: "merlin-1",
    src: "Merlin.jpg",
    thumbnail: "/photos/Merlin.jpg",
    fullSize: "/photos/Merlin.jpg",
    alt: "Merlin falcon perched on a high branch",
    commonName: "Merlin",
    scientificName: "Falco columbarius",
    location: "Rattray Marsh, Mississauga, ON",
    year: 2024,
    featured: false,
    tags: ["raptor", "perched"] as PhotoTag[],
    album: "birds-of-prey"
  },
  {
    id: "red-necked-grebe-2",
    src: "RedNeckedGrebe.jpg",
    thumbnail: "/photos/RedNeckedGrebe.jpg",
    fullSize: "/photos/RedNeckedGrebe.jpg",
    alt: "Red-necked Grebe swimming in calm water",
    commonName: "Red-necked Grebe",
    scientificName: "Podiceps grisegena",
    location: "Colonel Samuel Smith Park, Toronto, ON",
    year: 2024,
    featured: false,
    tags: ["waterfowl", "portrait"] as PhotoTag[],
    album: "waterfowl"
  },
  {
    id: "red-necked-grebe-3",
    src: "RedNeckedGrebe2.jpg",
    thumbnail: "/photos/RedNeckedGrebe2.jpg",
    fullSize: "/photos/RedNeckedGrebe2.jpg",
    alt: "Red-necked Grebe with reflection in water",
    commonName: "Red-necked Grebe",
    scientificName: "Podiceps grisegena",
    location: "Colonel Samuel Smith Park, Toronto, ON",
    year: 2024,
    featured: false,
    tags: ["waterfowl", "portrait"] as PhotoTag[],
    album: "waterfowl"
  }
] satisfies Photo[];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get all available albums
 * @returns Array of albums
 */
export function getAllAlbums(): Album[] {
  return albums;
}

/**
 * Get album details by ID
 * @param id - Album category ID
 * @returns Album object or undefined if not found
 */
export function getAlbumById(id: AlbumCategory): Album | undefined {
  return albums.find(album => album.id === id);
}

/**
 * Get photos filtered by album
 * @param album - Album category to filter by
 * @returns Array of photos in that album
 */
export function getPhotosByAlbum(album: AlbumCategory): Photo[] {
  return photos.filter(photo => photo.album === album);
}

/**
 * Get the cover photo for a specific album
 * @param album - Album category
 * @returns Photo object for the cover
 */
export function getAlbumCoverPhoto(album: AlbumCategory): Photo | undefined {
  const albumData = getAlbumById(album);
  if (!albumData) return undefined;
  return getPhotoById(albumData.coverPhoto);
}

/**
 * Get the count of photos in an album
 * @param album - Album category
 * @returns Number of photos
 */
export function getAlbumPhotoCount(album: AlbumCategory): number {
  return getPhotosByAlbum(album).length;
}

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
