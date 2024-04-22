import Link from "next/link";

export default function Home() {
	return (
		<div className="">
			<p>root page</p>
			<div>
				<p>Links</p>
				<Link href="/about">
					<p>about</p>
				</Link>
			</div>
			<div className="w-8 h-8 bg-red-500 fixed top-0" />
		</div>
	);
}
