"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const WATCH_LATER_KEY = "movie-watch-later";

function getWatchLater(): string[] {
	if (typeof window === "undefined") return [];
	const stored = localStorage.getItem(WATCH_LATER_KEY);
	return stored ? JSON.parse(stored) : [];
}

function saveWatchLater(watchLater: string[]): void {
	localStorage.setItem(WATCH_LATER_KEY, JSON.stringify(watchLater));
}

export function useWatchLater() {
	const queryClient = useQueryClient();

	const { data: watchLater = [] } = useQuery({
		queryKey: ["watchLater"],
		queryFn: getWatchLater,
		initialData: [],
	});

	const addToWatchLater = useMutation({
		mutationFn: async (movieId: string) => {
			const current = getWatchLater();
			if (!current.includes(movieId)) {
				const updated = [...current, movieId];
				saveWatchLater(updated);
				return updated;
			}
			return current;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["watchLater"] });
		},
	});

	const removeFromWatchLater = useMutation({
		mutationFn: async (movieId: string) => {
			const current = getWatchLater();
			const updated = current.filter((id) => id !== movieId);
			saveWatchLater(updated);
			return updated;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["watchLater"] });
		},
	});

	const toggleWatchLater = useMutation({
		mutationFn: async (movieId: string) => {
			const current = getWatchLater();
			const updated = current.includes(movieId)
				? current.filter((id) => id !== movieId)
				: [...current, movieId];
			saveWatchLater(updated);
			return updated;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["watchLater"] });
		},
	});

	const isInWatchLater = (movieId: string): boolean => {
		return watchLater.includes(movieId);
	};

	return {
		watchLater,
		addToWatchLater: addToWatchLater.mutate,
		removeFromWatchLater: removeFromWatchLater.mutate,
		toggleWatchLater: toggleWatchLater.mutate,
		isInWatchLater,
	};
}
