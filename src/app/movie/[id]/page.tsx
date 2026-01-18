import { notFound } from "next/navigation";
import Image from "next/image";
import { getMovieById } from "@/lib/mock-data";
import { RatingStars } from "@/components/ui/rating-stars";
import { YouTubePlayer } from "@/components/ui/youtube-player";
import { MovieActions } from "@/components/movie-actions";
import { formatRuntime, formatYear } from "@/lib/utils";

interface MoviePageProps {
	params: {
		id: string;
	};
}

export default function MoviePage({ params }: MoviePageProps) {
	const movie = getMovieById(params.id);

	if (!movie) {
		notFound();
	}

	return (
		<div className="min-h-screen bg-background">
			{/* Hero Section with Backdrop */}
			<div className="relative h-[60vh] md:h-[70vh]">
				<div className="absolute inset-0">
					<Image
						src={movie.backdropUrl}
						alt={movie.title}
						fill
						className="object-cover"
						priority
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
				</div>

				<div className="relative z-10 h-full flex items-end">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
						<div className="flex flex-col md:flex-row gap-8">
							{/* Poster */}
							<div className="flex-shrink-0">
								<div className="relative w-48 md:w-64 aspect-[2/3] rounded-lg overflow-hidden shadow-glow-lg">
									<Image
										src={movie.posterUrl}
										alt={movie.title}
										fill
										className="object-cover"
									/>
								</div>
							</div>

							{/* Info */}
							<div className="flex-1 flex flex-col justify-end space-y-4">
								<h1 className="text-4xl md:text-6xl font-bold text-white">
									{movie.title}
								</h1>

								<div className="flex flex-wrap items-center gap-4 text-foreground/80">
									<span>{formatYear(movie.releaseDate)}</span>
									<span>•</span>
									<span>{formatRuntime(movie.runtime)}</span>
									<span>•</span>
									<span className="text-accent font-semibold">
										{movie.criticScore}% Critics Score
									</span>
								</div>

								<div className="flex flex-wrap gap-2">
									{movie.genres.map((genre) => (
										<span
											key={genre}
											className="px-3 py-1 rounded-full bg-primary/80 text-white text-sm"
										>
											{genre}
										</span>
									))}
								</div>

								<RatingStars rating={movie.rating} size="lg" />

								<MovieActions movieId={movie.id} />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Content */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
				{/* Synopsis */}
				<section>
					<h2 className="text-3xl font-bold mb-4">Synopsis</h2>
					<p className="text-lg text-foreground/80 leading-relaxed">
						{movie.synopsis}
					</p>
					<p className="text-sm text-muted mt-4">
						Directed by <span className="text-foreground font-semibold">{movie.director}</span>
					</p>
				</section>

				{/* Trailer */}
				<section>
					<h2 className="text-3xl font-bold mb-4">Trailer</h2>
					<div className="max-w-4xl">
						<YouTubePlayer videoId={movie.trailerYoutubeId} title={`${movie.title} Trailer`} />
					</div>
				</section>

				{/* Cast */}
				<section>
					<h2 className="text-3xl font-bold mb-6">Cast</h2>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
						{movie.cast.map((member) => (
							<div key={member.id} className="text-center">
								<div className="relative w-full aspect-square rounded-full overflow-hidden mb-3 shadow-lg">
									<Image
										src={member.image}
										alt={member.name}
										fill
										className="object-cover"
									/>
								</div>
								<h3 className="font-semibold text-foreground">{member.name}</h3>
								<p className="text-sm text-muted">{member.character}</p>
							</div>
						))}
					</div>
				</section>

				{/* Streaming Platforms */}
				<section>
					<h2 className="text-3xl font-bold mb-4">Where to Watch</h2>
					<div className="flex flex-wrap gap-4">
						{movie.platforms.map((platform) => (
							<div
								key={platform.name}
								className="flex items-center space-x-2 px-4 py-3 rounded-lg bg-card hover:bg-card-hover transition-colors"
							>
								<span className="text-2xl">{platform.logo}</span>
								<span className="font-medium">{platform.name}</span>
							</div>
						))}
					</div>
				</section>

				{/* Reviews */}
				<section>
					<h2 className="text-3xl font-bold mb-6">User Reviews</h2>
					<div className="space-y-6">
						{movie.reviews.map((review) => (
							<div key={review.id} className="p-6 rounded-lg bg-card">
								<div className="flex items-start justify-between mb-3">
									<div>
										<h3 className="font-semibold text-lg">{review.author}</h3>
										<p className="text-sm text-muted">{new Date(review.date).toLocaleDateString()}</p>
									</div>
									<RatingStars rating={review.rating} size="sm" />
								</div>
								<p className="text-foreground/80">{review.content}</p>
							</div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
}
