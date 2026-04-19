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
        <nav className="bg-white sticky top-0 z-50 shadow-md">
            {/* Top nav bar with links */}
            <div className="bg-gradient-to-r from-teal-700 to-teal-600 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Desktop: centered nav links */}
                    <div className="hidden lg:flex items-center justify-center gap-1 py-0">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-4 py-3 text-sm font-medium uppercase tracking-wide transition ${
                                    pathname === link.href
                                        ? "bg-white text-teal-700"
                                        : "hover:bg-teal-600/70"
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/refill"
                            className="px-4 py-3 text-sm font-bold uppercase tracking-wide bg-amber-500 hover:bg-amber-600 transition"
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
                                    className="block px-4 py-2 hover:bg-teal-600 rounded transition"
                                    onClick={() => setOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/refill"
                                className="block px-4 py-2 bg-amber-500 rounded font-semibold text-center"
                                onClick={() => setOpen(false)}
                            >
                                Refill Rx
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            {/* Hero banner */}
            <div className="w-full bg-gradient-to-b from-white to-teal-50/50 py-10 md:py-14 flex flex-col items-center px-6">
                <div className="flex items-center gap-4 md:gap-8">
                    <Image
                        src="/logo.svg"
                        alt="Riverchase Pharmacy logo"
                        width={250}
                        height={250}
                        priority
                        className="h-28 md:h-40 w-auto object-contain"
                    />
                    <div>
                        <Link href="/" className="hover:opacity-90 transition">
                            <h1 className="text-4xl md:text-7xl font-bold text-teal-700 tracking-tight">
                                Riverchase Pharmacy
                            </h1>
                        </Link>
                        <p className="mt-2 text-xl md:text-3xl text-teal-600/60 italic text-center">We care for you</p>
                    </div>
                </div>
                <p className="mt-3 text-gray-600 text-sm">
                    For more information, give us a call:{" "}
                    <a href="tel:2055366014" className="font-bold text-teal-700 text-base hover:text-teal-800">
                        (205) 536-6014
                    </a>
                </p>
            </div>
        </nav>
    );
}
