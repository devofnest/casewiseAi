// src/store/searchStore.ts
import { create } from "zustand";

interface SearchState {
	query: string;
	results: string[]; // 추후 타입 변경 가능
	setQuery: (q: string) => void;
	setResults: (r: string[]) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
	query: "",
	results: [],
	setQuery: (q) => set({ query: q }),
	setResults: (r) => set({ results: r }),
}));
