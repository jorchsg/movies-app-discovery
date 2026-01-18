"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const FAVORITES_KEY = "movie-favorites";

function getFavorites(): string[] {
	if (typeof window === "undefined") return [];
	const stored = localStorage.getItem(FAVORITES_KEY);
	return stored ? JSON.parse(stored) : [];
}

function saveFavorites(favorites: string[]): void {
	localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

export function useFavorites() {
	const queryClient = useQueryClient();

	const { data: favorites = [] } = useQuery({
		queryKey: ["favorites"],
		queryFn: getFavorites,
		initialData: [],
	});

	const addFavorite = useMutation({
		mutationFn: async (movieId: string) => {
			const current = getFavorites();
			if (!current.includes(movieId)) {
				const updated = [...current, movieId];
				saveFavorites(updated);
				return updated;
			}
			return current;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["favorites"] });
		},
	});

	const removeFavorite = useMutation({
		mutationFn: async (movieId: string) => {
			const current = getFavorites();
			const updated = current.filter((id) => id !== movieId);
			saveFavorites(updated);
			return updated;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["favorites"] });
		},
	});

	const toggleFavorite = useMutation({
		mutationFn: async (movieId: string) => {
			const current = getFavorites();
			const updated = current.includes(movieId)
				? current.filter((id) => id !== movieId)
				: [...current, movieId];
			saveFavorites(updated);
			return updated;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["favorites"] });
		},
	});

	const isFavorite = (movieId: string): boolean => {
		return favorites.includes(movieId);
	};

	return {
		favorites,
		addFavorite: addFavorite.mutate,
		removeFavorite: removeFavorite.mutate,
		toggleFavorite: toggleFavorite.mutate,
		isFavorite,
	};
}
