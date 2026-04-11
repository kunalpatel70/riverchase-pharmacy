"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About Us" },
        { href: "/services", label: "Services" },
        { href: "/medical-supplies", label: "Medical Supplies" },
        { href: "/resources", label: "Resources" },
        { href: "/contact", label: "Contact Us" },
    ];

    return (
        <nav className="bg-white sticky top-0 z-50 shadow-sm">
            {/* Top nav bar with links */}
            <div className="bg-sky-800 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Desktop: centered nav links */}
                    <div className="hidden lg:flex items-center justify-center gap-1 py-0">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-4 py-3 text-sm font-medium uppercase tracking-wide transition ${
                                    pathname === link.href
                                        ? "bg-white text-sky-800"
                                        : "hover:bg-sky-700"
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/refill"
                            className="px-4 py-3 text-sm font-bold uppercase tracking-wide bg-sky-900 hover:bg-sky-950 transition"
                        >
                            Refill Rx
                        </Link>
                    </div>

                    {/* Mobile: hours + hamburger */}
                    <div className="lg:hidden flex items-center justify-between py-2">
                        <span className="text-xs">Mon–Fri: 8:30AM–4:30PM</span>
                        <button
                            className="p-1"
                            onClick={() => setOpen(!open)}
                            aria-label="Toggle menu"
                        >
                            {open ? (
                                <XMarkIcon className="w-6 h-6" />
                            ) : (
                                <Bars3Icon className="w-6 h-6" />
                            )}
                        </button>
                    </div>

                    {/* Mobile dropdown */}
                    {open && (
                        <div className="lg:hidden pb-4 space-y-1">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="block px-4 py-2 hover:bg-sky-700 rounded transition"
                                    onClick={() => setOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/refill"
                                className="block px-4 py-2 bg-sky-900 rounded font-semibold text-center"
                                onClick={() => setOpen(false)}
                            >
                                Refill Rx
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            {/* Logo + phone row */}
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col items-center">
                <Link href="/" className="hover:opacity-90 transition">
                    <Image
                        src="/logo.png"
                        alt="River Chase Pharmacy"
                        width={500}
                        height={180}
                        priority
                        className="h-28 md:h-36 w-auto object-contain"
                    />
                </Link>
                <p className="mt-2 text-gray-600 text-sm">
                    For more information, give us a call:{" "}
                    <a href="tel:2055366014" className="font-bold text-sky-700 text-base hover:text-sky-800">
                        (205) 536-6014
                    </a>
                </p>
            </div>
        </nav>
    );
}
