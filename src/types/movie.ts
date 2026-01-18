import { z } from "zod";

export const StreamingPlatformSchema = z.object({
	name: z.string(),
	logo: z.string(),
});

export const CastMemberSchema = z.object({
	id: z.string(),
	name: z.string(),
	character: z.string(),
	image: z.string(),
});

export const ReviewSchema = z.object({
	id: z.string(),
	author: z.string(),
	rating: z.number().min(0).max(5),
	content: z.string(),
	date: z.string(),
});

export const MovieSchema = z.object({
	id: z.string(),
	title: z.string(),
	synopsis: z.string(),
	releaseDate: z.string(),
	runtime: z.number(),
	genres: z.array(z.string()),
	posterUrl: z.string(),
	backdropUrl: z.string(),
	trailerYoutubeId: z.string(),
	rating: z.number().min(0).max(5),
	criticScore: z.number().min(0).max(100),
	cast: z.array(CastMemberSchema),
	director: z.string(),
	platforms: z.array(StreamingPlatformSchema),
	reviews: z.array(ReviewSchema),
});

export type Movie = z.infer<typeof MovieSchema>;
export type CastMember = z.infer<typeof CastMemberSchema>;
export type Review = z.infer<typeof ReviewSchema>;
export type StreamingPlatform = z.infer<typeof StreamingPlatformSchema>;

export type Category = {
	id: string;
	name: string;
	movies: Movie[];
};
