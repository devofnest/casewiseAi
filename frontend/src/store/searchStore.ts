// src/store/searchStore.ts
import { create } from "zustand";

export interface CaseResult {
        id: number;
        title: string;
        summary: string;
        keywords: string[];
}

interface SearchState {
        query: string;
        results: CaseResult[];
        setQuery: (q: string) => void;
        setResults: (r: CaseResult[]) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
	query: "",
	results: [],
	setQuery: (q) => set({ query: q }),
	setResults: (r) => set({ results: r }),
}));
