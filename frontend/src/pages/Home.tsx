// src/pages/Home.tsx
import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";

export default function Home() {
	return (
		<div>
			<h1>판례 검색 서비스</h1>
			<p>예시 데이터 5건을 검색합니다. 실시간 판례 검색 및 AI 요약은 아직 연결되지 않았습니다.</p>
			<SearchBar />
			<ResultList />
		</div>
	);
}
