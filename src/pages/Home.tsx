// src/pages/Home.tsx
import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";

export default function Home() {
	return (
		<div>
			<h1>판례 검색 서비스</h1>
			<SearchBar />
			<ResultList />
		</div>
	);
}
