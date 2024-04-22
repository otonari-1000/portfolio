import Link from "next/link";

export default function Home() {
	return (
		<div>
			<p>root page</p>
			<div>
				<p>Links</p>
				<Link href="/about">
					<p>about</p>
				</Link>
			</div>
		</div>
	);
}
