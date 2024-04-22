export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<p>second layout</p>
			{children}
		</>
	);
}
