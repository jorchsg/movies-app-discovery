"use client";

import { useFavorites } from "@/hooks/use-favorites";
import { getAllMovies } from "@/lib/mock-data";
import { MovieCard } from "@/components/ui/movie-card";
import { Heart } from "lucide-react";

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const allMovies = getAllMovies();
  const favoriteMovies = allMovies.filter((movie) => favorites.includes(movie.id));

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center space-x-3 mb-8">
          <Heart className="w-8 h-8 text-primary fill-current" />
          <h1 className="text-4xl font-bold">My Favorites</h1>
        </div>

        {favoriteMovies.length === 0 ? (
          <div className="text-center py-20">
            <Heart className="w-20 h-20 text-muted mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-foreground/80 mb-2">
              No favorites yet
            </h2>
            <p className="text-muted">
              Start adding movies to your favorites to see them here!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {favoriteMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
