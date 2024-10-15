import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
	title: "Be The Rich",
	description: "Make money!!",
};

const noto_sans_jp = Noto_Sans_JP({
	subsets: ["latin"],
	display: "swap",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className={`${noto_sans_jp.className}`}>{children}</body>
		</html>
	);
}
