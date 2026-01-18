"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Movie } from "@/types/movie";
import { MovieCard } from "./movie-card";
import { cn } from "@/lib/utils";

interface MovieCarouselProps {
	title: string;
	movies: Movie[];
}

export function MovieCarousel({ title, movies }: MovieCarouselProps) {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: "start",
		slidesToScroll: 1,
		dragFree: true,
	});

	const [canScrollPrev, setCanScrollPrev] = useState(false);
	const [canScrollNext, setCanScrollNext] = useState(false);

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setCanScrollPrev(emblaApi.canScrollPrev());
		setCanScrollNext(emblaApi.canScrollNext());
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;
		onSelect();
		emblaApi.on("select", onSelect);
		emblaApi.on("reInit", onSelect);
	}, [emblaApi, onSelect]);

	return (
		<div className="relative group">
			<h2 className="text-2xl font-bold mb-4 text-foreground">{title}</h2>

			<div className="relative">
				{/* Navigation Buttons */}
				{canScrollPrev && (
					<button
						onClick={scrollPrev}
						className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/90"
						aria-label="Previous"
					>
						<ChevronLeft className="w-6 h-6" />
					</button>
				)}

				{canScrollNext && (
					<button
						onClick={scrollNext}
						className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/90"
						aria-label="Next"
					>
						<ChevronRight className="w-6 h-6" />
					</button>
				)}

				{/* Carousel */}
				<div className="overflow-hidden" ref={emblaRef}>
					<div className="flex gap-4">
						{movies.map((movie) => (
							<div
								key={movie.id}
								className="flex-none w-[200px] sm:w-[240px] md:w-[280px]"
							>
								<MovieCard movie={movie} />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
