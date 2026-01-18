"use client";

import Link from "next/link";
import { Film, Heart, Clock } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navigation() {
	const pathname = usePathname();

	const links = [
		{ href: "/", label: "Home", icon: Film },
		{ href: "/favorites", label: "Favorites", icon: Heart },
		{ href: "/watch-later", label: "Watch Later", icon: Clock },
	];

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-secondary/20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<Link href="/" className="flex items-center space-x-2 group">
						<Film className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
						<span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
							CineDiscover
						</span>
					</Link>

					<div className="flex items-center space-x-1">
						{links.map((link) => {
							const Icon = link.icon;
							const isActive = pathname === link.href;

							return (
								<Link
									key={link.href}
									href={link.href}
									className={cn(
										"flex items-center space-x-2 px-4 py-2 rounded-lg transition-all",
										isActive
											? "bg-primary text-white"
											: "text-foreground/80 hover:bg-card-hover hover:text-foreground"
									)}
								>
									<Icon className="w-5 h-5" />
									<span className="hidden sm:inline font-medium">{link.label}</span>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</nav>
	);
}
