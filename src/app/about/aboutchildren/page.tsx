import Link from "next/link";

export default function Home() {
	return (
		<div>
			<div>about children</div>
			<p>Links</p>
			<Link href="/">
				<p>root</p>
			</Link>
		</div>
	);
}
