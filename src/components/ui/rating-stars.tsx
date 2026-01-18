"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
	rating: number;
	maxRating?: number;
	size?: "sm" | "md" | "lg";
	interactive?: boolean;
	onRate?: (rating: number) => void;
}

export function RatingStars({
	rating,
	maxRating = 5,
	size = "md",
	interactive = false,
	onRate,
}: RatingStarsProps) {
	const sizeClasses = {
		sm: "w-4 h-4",
		md: "w-5 h-5",
		lg: "w-6 h-6",
	};

	const stars = Array.from({ length: maxRating }, (_, i) => i + 1);

	return (
		<div className="flex items-center space-x-1">
			{stars.map((star) => {
				const isFilled = star <= Math.round(rating);

				return (
					<button
						key={star}
						type="button"
						onClick={() => interactive && onRate?.(star)}
						disabled={!interactive}
						className={cn(
							sizeClasses[size],
							interactive && "cursor-pointer hover:scale-110 transition-transform",
							!interactive && "cursor-default"
						)}
					>
						<Star
							className={cn(
								"w-full h-full transition-colors",
								isFilled
									? "fill-accent text-accent"
									: "fill-none text-muted"
							)}
						/>
					</button>
				);
			})}
			<span className="ml-2 text-sm text-muted">
				{rating.toFixed(1)}
			</span>
		</div>
	);
}
