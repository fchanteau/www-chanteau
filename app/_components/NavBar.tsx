'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MENU = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" }
];

export function NavBar() {
    const pathname = usePathname();

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 0);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className="fixed inset-x-0 top-0 px-6 z-50">
            <nav className="flex items-center justify-center p-4 relative mx-auto mt-2 max-w-400">
                <ul className={`flex list-none rounded-full px-4 py-2 gap-4 ${isScrolled ? "backdrop-blur-xl shadow-md bg-(--bg-backdrop)" : "bg-transparent"}`}>
                    {MENU.map(item => {
                        const isActive =
                            item.path === "/"
                                ? pathname === "/"
                                : pathname.startsWith(item.path);
                        return (
                            <li
                                key={item.path}
                                className={
                                    `cursor-pointer text-lg px-4 py-1.5 rounded-full flex text-emerald font-semibold hover:bg-white transition-colors ` +
                                    (isActive
                                        ? "backdrop-blur-xl bg-white"
                                        : "")
                                }
                            >
                                <Link href={item.path} aria-current={isActive ? "page" : undefined}>
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}