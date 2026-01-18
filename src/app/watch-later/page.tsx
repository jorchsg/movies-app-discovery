"use client";

import { useWatchLater } from "@/hooks/use-watch-later";
import { getAllMovies } from "@/lib/mock-data";
import { MovieCard } from "@/components/ui/movie-card";
import { Clock } from "lucide-react";

export default function WatchLaterPage() {
	const { watchLater } = useWatchLater();
	const allMovies = getAllMovies();
	const watchLaterMovies = allMovies.filter((movie) => watchLater.includes(movie.id));

	return (
		<div className="min-h-screen bg-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="flex items-center space-x-3 mb-8">
					<Clock className="w-8 h-8 text-accent fill-current" />
					<h1 className="text-4xl font-bold">Watch Later</h1>
				</div>

				{watchLaterMovies.length === 0 ? (
					<div className="text-center py-20">
						<Clock className="w-20 h-20 text-muted mx-auto mb-4" />
						<h2 className="text-2xl font-semibold text-foreground/80 mb-2">
							Your watch later queue is empty
						</h2>
						<p className="text-muted">
							Add movies you want to watch later to see them here!
						</p>
					</div>
				) : (
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
						{watchLaterMovies.map((movie) => (
							<MovieCard key={movie.id} movie={movie} />
						))}
					</div>
				)}
			</div>
		</div>
	);
}
