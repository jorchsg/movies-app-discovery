"use client";

interface YouTubePlayerProps {
	videoId: string;
	title?: string;
}

export function YouTubePlayer({ videoId, title = "Movie Trailer" }: YouTubePlayerProps) {
	return (
		<div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden shadow-glow">
			<iframe
				className="absolute top-0 left-0 w-full h-full"
				src={`https://www.youtube.com/embed/${videoId}`}
				title={title}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			/>
		</div>
	);
}
