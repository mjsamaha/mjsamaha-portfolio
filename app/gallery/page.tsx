import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

export default function GalleryPage() {
  // Placeholder data with varied aspect ratios
  const placeholders = [
    { id: 1, aspect: "aspect-[4/3]", bird: "Red-tailed Hawk", location: "Hamilton, ON" },
    { id: 2, aspect: "aspect-[3/4]", bird: "Osprey", location: "Mississauga, ON" },
    { id: 3, aspect: "aspect-square", bird: "Great Blue Heron", location: "Toronto, ON" },
    { id: 4, aspect: "aspect-[2/3]", bird: "Bald Eagle", location: "Lake Ontario" },
    { id: 5, aspect: "aspect-[4/3]", bird: "Cooper's Hawk", location: "Oakville, ON" },
    { id: 6, aspect: "aspect-[3/4]", bird: "Turkey Vulture", location: "Burlington, ON" },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Bird Photography</h1>
        <p className="text-xl text-muted-foreground">
          Capturing nature&apos;s aviators
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {placeholders.map((placeholder) => (
          <Card
            key={placeholder.id}
            className="break-inside-avoid overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div
              className={`${placeholder.aspect} bg-muted flex items-center justify-center`}
            >
              <p className="text-sm text-muted-foreground">Photo placeholder</p>
            </div>
            <CardContent className="p-4">
              <CardTitle className="text-base mb-1">
                {placeholder.bird}
              </CardTitle>
              <CardDescription className="text-sm">
                {placeholder.location} • 2024
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
