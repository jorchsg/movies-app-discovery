"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Clock, Play } from "lucide-react";
import type { Movie } from "@/types/movie";
import { RatingStars } from "./rating-stars";
import { useFavorites } from "@/hooks/use-favorites";
import { useWatchLater } from "@/hooks/use-watch-later";
import { cn } from "@/lib/utils";

interface MovieCardProps {
	movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
	const { isFavorite, toggleFavorite } = useFavorites();
	const { isInWatchLater, toggleWatchLater } = useWatchLater();

	const handleFavoriteClick = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		toggleFavorite(movie.id);
	};

	const handleWatchLaterClick = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		toggleWatchLater(movie.id);
	};

	return (
		<Link href={`/movie/${movie.id}`} className="group block">
			<div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-card shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-glow">
				<Image
					src={movie.posterUrl}
					alt={movie.title}
					fill
					className="object-cover"
					sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
				/>

				{/* Gradient Overlay */}
				<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

				{/* Content Overlay */}
				<div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
					<h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
						{movie.title}
					</h3>

					<div className="mb-3">
						<RatingStars rating={movie.rating} size="sm" />
					</div>

					<div className="flex items-center space-x-2 mb-2">
						{movie.genres.slice(0, 2).map((genre) => (
							<span
								key={genre}
								className="text-xs px-2 py-1 rounded-full bg-primary/80 text-white"
							>
								{genre}
							</span>
						))}
					</div>

					{/* Action Buttons */}
					<div className="flex items-center space-x-2">
						<button
							onClick={handleFavoriteClick}
							className={cn(
								"p-2 rounded-full transition-all",
								isFavorite(movie.id)
									? "bg-primary text-white"
									: "bg-white/20 text-white hover:bg-white/30"
							)}
							aria-label="Add to favorites"
						>
							<Heart
								className={cn(
									"w-5 h-5",
									isFavorite(movie.id) && "fill-current"
								)}
							/>
						</button>

						<button
							onClick={handleWatchLaterClick}
							className={cn(
								"p-2 rounded-full transition-all",
								isInWatchLater(movie.id)
									? "bg-accent text-black"
									: "bg-white/20 text-white hover:bg-white/30"
							)}
							aria-label="Add to watch later"
						>
							<Clock
								className={cn(
									"w-5 h-5",
									isInWatchLater(movie.id) && "fill-current"
								)}
							/>
						</button>

						<div className="flex-1" />

						<div className="p-2 rounded-full bg-primary/80 text-white">
							<Play className="w-5 h-5 fill-current" />
						</div>
					</div>
				</div>

				{/* Quick Indicators (visible without hover on mobile) */}
				<div className="absolute top-2 right-2 flex flex-col space-y-2 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
					{isFavorite(movie.id) && (
						<div className="p-1.5 rounded-full bg-primary/90">
							<Heart className="w-4 h-4 fill-current text-white" />
						</div>
					)}
					{isInWatchLater(movie.id) && (
						<div className="p-1.5 rounded-full bg-accent/90">
							<Clock className="w-4 h-4 fill-current text-black" />
						</div>
					)}
				</div>
			</div>
		</Link>
	);
}
