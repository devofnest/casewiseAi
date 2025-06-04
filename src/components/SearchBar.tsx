import { useSearchStore } from "../store/searchStore";

export default function SearchBar() {
	const { query, setQuery, setResults } = useSearchStore();

	const handleSearch = async () => {
		if (!query.trim()) return;

		const res = await fetch("/data/cases.json");
		const data = await res.json();

		const filtered = data.filter(
			(item: any) =>
				item.title.includes(query) || item.summary.includes(query)
		);

		setResults(filtered);
	};

	return (
		<div>
			<input
				type="text"
				value={query}
				placeholder="판례를 검색하세요"
				onChange={(e) => setQuery(e.target.value)}
			/>
			<button onClick={handleSearch}>검색</button>
		</div>
	);
}
