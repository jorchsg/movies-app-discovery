import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { QueryProvider } from "@/lib/query-provider";
import { Navigation } from "@/components/ui/navigation";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});

const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "CineDiscover - Discover Your Next Favorite Movie",
	description: "Explore movies, save favorites, and build your watch later queue with CineDiscover",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<QueryProvider>
					<Navigation />
					<main className="pt-16 min-h-screen">
						{children}
					</main>
				</QueryProvider>
			</body>
		</html>
	);
}
