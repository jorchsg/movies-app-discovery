import { getCategories } from "@/lib/mock-data";
import { MovieCarousel } from "@/components/ui/movie-carousel";

export default function HomePage() {
  const categories = getCategories();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&h=1080&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
            Discover Your Next Favorite Movie
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 animate-slide-up">
            Explore thousands of movies, save your favorites, and never miss a must-watch film
          </p>
        </div>
      </section>

      {/* Movie Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {categories.map((category) => (
          <div key={category.id} className="animate-slide-in">
            <MovieCarousel title={category.name} movies={category.movies} />
          </div>
        ))}
      </section>
    </div>
  );
}
