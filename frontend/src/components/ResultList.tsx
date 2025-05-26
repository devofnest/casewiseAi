import { useSearchStore } from "../store/searchStore";

export default function ResultList() {
	const { results } = useSearchStore();

	if (results.length === 0) return <p>검색 결과가 없습니다.</p>;

	return (
		<ul>
			{results.map((item: any) => (
				<li key={item.id}>
					<h3>{item.title}</h3>
					<p>{item.summary}</p>
					<small>키워드: {item.keywords.join(", ")}</small>
				</li>
			))}
		</ul>
	);
}
