import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProjectsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      {/* Title Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Projects</h1>
        <p className="text-xl text-muted-foreground">
          Building tools that matter
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder Card 1 */}
        <Card>
          <CardHeader>
            <CardTitle>Project Title</CardTitle>
            <CardDescription>Category • Status</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Projects will be displayed here
            </p>
          </CardContent>
        </Card>

        {/* Placeholder Card 2 */}
        <Card>
          <CardHeader>
            <CardTitle>Project Title</CardTitle>
            <CardDescription>Category • Status</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Projects will be displayed here
            </p>
          </CardContent>
        </Card>

        {/* Placeholder Card 3 */}
        <Card>
          <CardHeader>
            <CardTitle>Project Title</CardTitle>
            <CardDescription>Category • Status</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Projects will be displayed here
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
