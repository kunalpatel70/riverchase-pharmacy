import Link from "next/link";
import Image from "next/image";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/medical-supplies", label: "Medical Supplies" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact Us" },
    { href: "/refill", label: "Refill Prescription" },
];

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main footer */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">
                            Contact <span className="text-sky-400">Information</span>
                        </h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPinIcon className="w-5 h-5 mt-0.5 flex-shrink-0 text-sky-400" />
                                <span>
                                    3075 John Hawkins Pkwy<br />
                                    Suite G<br />
                                    Hoover, AL 35244
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <PhoneIcon className="w-5 h-5 mt-0.5 flex-shrink-0 text-sky-400" />
                                <span>
                                    Phone: <strong className="text-white">(205) 536-6014</strong><br />
                                    Fax: <strong className="text-white">(205) 536-6018</strong>
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <EnvelopeIcon className="w-5 h-5 flex-shrink-0 text-sky-400" />
                                <a href="mailto:riverchasepharmacy@gmail.com" className="hover:text-white transition">
                                    riverchasepharmacy@gmail.com
                                </a>
                            </li>
                        </ul>

                        <div className="mt-6">
                            <Image
                                src="/logo-transparent.png"
                                alt="River Chase Pharmacy"
                                width={180}
                                height={60}
                                className="h-12 w-auto object-contain brightness-200"
                            />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">
                            Quick <span className="text-sky-400">Links</span>
                        </h3>
                        <ul className="space-y-2 text-sm">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="hover:text-white transition">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">
                            Send Us A <span className="text-sky-400">Message</span>
                        </h3>
                        <form className="space-y-3">
                            <input
                                type="text"
                                placeholder="Name *"
                                required
                                className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-sky-500"
                            />
                            <input
                                type="email"
                                placeholder="Email Address *"
                                required
                                className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-sky-500"
                            />
                            <textarea
                                placeholder="Message"
                                rows={3}
                                className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 resize-none"
                            />
                            <button
                                type="submit"
                                className="bg-sky-700 text-white px-6 py-2.5 rounded font-semibold hover:bg-sky-600 transition text-sm w-full"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex flex-wrap justify-center gap-4 text-xs">
                            {navLinks.map((link) => (
                                <Link key={link.href} href={link.href} className="hover:text-white transition">
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        <p className="text-xs text-gray-500">
                            © {new Date().getFullYear()} River Chase Pharmacy. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
