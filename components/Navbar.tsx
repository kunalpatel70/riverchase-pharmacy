"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/outline";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/medical-supplies", label: "Medical Supplies" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 bg-cream/90 backdrop-blur-md transition-shadow ${
                scrolled ? "shadow-[0_1px_0_0_var(--rule)]" : "hairline-b"
            }`}
        >
            {/* Slim utility strip */}
            <div className="hidden md:block text-[11px] tracking-[0.14em] uppercase text-ink-mute hairline-b">
                <div className="max-w-7xl mx-auto px-6 py-1.5 flex items-center justify-between">
                    <span>Hoover, Alabama · Independent Community Pharmacy</span>
                    <span className="flex items-center gap-6">
                        <span>Mon–Fri · 8:30–4:30</span>
                        <span>Sat · 8:30–2:30</span>
                    </span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 flex items-center gap-x-10 py-4">
                {/* Wordmark */}
                <Link href="/" className="shrink-0">
                    <Image
                        src="/logo-wordmark.svg"
                        alt="Riverchase Pharmacy"
                        width={934}
                        height={763}
                        className="h-16 md:h-24 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop nav */}
                <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
                    {links.map((link) => {
                        const active =
                            link.href === "/"
                                ? pathname === "/"
                                : pathname.startsWith(link.href);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                                    active ? "text-ink" : "text-ink-soft hover:text-ink"
                                }`}
                            >
                                {link.label}
                                {active && (
                                    <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-sage" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right cluster */}
                <div className="hidden md:flex items-center gap-3 shrink-0 ml-auto">
                    <a
                        href="tel:2055366014"
                        className="group hidden lg:flex items-center gap-2 text-sm text-ink-soft hover:text-ink transition-colors"
                        aria-label="Call Riverchase Pharmacy"
                    >
                        <PhoneIcon className="w-4 h-4 text-sage" />
                        <span className="font-medium tabular-nums">(205) 536-6014</span>
                    </a>
                    <Link href="/refill" className="btn btn-accent text-sm">
                        Refill Rx
                    </Link>
                </div>

                {/* Mobile toggle */}
                <button
                    className="lg:hidden ml-auto md:ml-0 p-2 -mr-2 text-ink"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                >
                    {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile panel */}
            {open && (
                <div className="lg:hidden hairline-t bg-cream">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col">
                        {links.map((link) => {
                            const active =
                                link.href === "/"
                                    ? pathname === "/"
                                    : pathname.startsWith(link.href);
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className={`py-3 text-base ${
                                        active ? "text-ink font-semibold" : "text-ink-soft"
                                    } hairline-b last:border-0`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                        <div className="flex flex-col gap-3 mt-5">
                            <a
                                href="tel:2055366014"
                                className="flex items-center gap-2 text-sm text-ink-soft"
                            >
                                <PhoneIcon className="w-4 h-4 text-sage" />
                                <span className="font-medium tabular-nums">(205) 536-6014</span>
                            </a>
                            <Link href="/refill" onClick={() => setOpen(false)} className="btn btn-accent w-full">
                                Refill Rx
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
