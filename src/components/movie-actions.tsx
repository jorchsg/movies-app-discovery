"use client";

import { Heart, Clock } from "lucide-react";
import { useFavorites } from "@/hooks/use-favorites";
import { useWatchLater } from "@/hooks/use-watch-later";
import { cn } from "@/lib/utils";

interface MovieActionsProps {
	movieId: string;
}

export function MovieActions({ movieId }: MovieActionsProps) {
	const { isFavorite, toggleFavorite } = useFavorites();
	const { isInWatchLater, toggleWatchLater } = useWatchLater();

	return (
		<div className="flex items-center gap-4">
			<button
				onClick={() => toggleFavorite(movieId)}
				className={cn(
					"flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all",
					isFavorite(movieId)
						? "bg-primary text-white hover:bg-primary-dark"
						: "bg-card hover:bg-card-hover text-foreground"
				)}
			>
				<Heart
					className={cn(
						"w-5 h-5",
						isFavorite(movieId) && "fill-current"
					)}
				/>
				<span>{isFavorite(movieId) ? "Remove from Favorites" : "Add to Favorites"}</span>
			</button>

			<button
				onClick={() => toggleWatchLater(movieId)}
				className={cn(
					"flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all",
					isInWatchLater(movieId)
						? "bg-accent text-black hover:bg-accent-dark"
						: "bg-card hover:bg-card-hover text-foreground"
				)}
			>
				<Clock
					className={cn(
						"w-5 h-5",
						isInWatchLater(movieId) && "fill-current"
					)}
				/>
				<span>{isInWatchLater(movieId) ? "Remove from Watch Later" : "Add to Watch Later"}</span>
			</button>
		</div>
	);
}
