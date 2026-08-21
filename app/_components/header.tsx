'use client';

import { Download } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MENU = [
    { name: "Accueil", path: "/" },
    { name: "Expériences", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
];

export function Header() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 dark:bg-background/80 backdrop-blur-xl border-b border-outline-variant/20 dark:border-outline-variant/20 flex justify-between items-center mx-auto px-margin-mobile md:px-gutter h-16">
            <div className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface dark:text-on-surface">
                <Link href="/">
                    François Chanteau
                </Link>
            </div>
            <div className="hidden md:flex space-x-8">
                {MENU.map(item => {
                    const isActive =
                        item.path === "/"
                            ? pathname === "/"
                            : pathname.startsWith(item.path);
                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`active:scale-95 hover:text-primary dark:hover:text-primary transition-colors duration-200 font-bold ${isActive
                                ? "text-primary dark:text-primary border-b-2 border-primary pb-1"
                                : "text-on-surface-variant dark:text-on-surface-variant"
                                }`}
                            aria-current={isActive ? "page" : undefined}
                        >
                            {item.name}
                        </Link>
                    );
                })}
            </div>
            <button className="bg-primary-container text-on-primary-container px-4 py-2 rounded-DEFAULT font-label-sm text-label-sm hover:bg-primary hover:text-on-primary transition-colors duration-200 flex items-center gap-2">
                <Download /> Download CV
            </button>
        </nav>
    );
}