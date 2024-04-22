import Link from "next/link";

export default function Home() {
	return (
		<div>
			<p>second root page</p>
			<div>
				<p>Links</p>
				<Link href="/">
					<p>root</p>
				</Link>
				<Link href="/about/aboutchildren">
					<p>children</p>
				</Link>
			</div>
		</div>
	);
}
