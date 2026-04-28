import Link from "next/link";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/medical-supplies", label: "Medical Supplies" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
];

const actionLinks = [
    { href: "/refill", label: "Refill Prescription" },
    { href: "/transfer", label: "Transfer Prescription" },
];

export default function Footer() {
    return (
        <footer className="bg-paper hairline-t text-ink">
            {/* Signature line */}
            <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
                <p className="eyebrow kicker-rule mb-5">Visit the shop</p>
                <p className="font-display text-3xl md:text-4xl leading-tight max-w-3xl text-ink font-medium">
                    A neighborhood pharmacy for Hoover — stocked, attentive, and just a short drive from home.
                </p>
            </div>

            <div className="hairline-t" />

            <div className="max-w-7xl mx-auto px-6 py-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr_1fr]">
                {/* Column 1 — address / contact */}
                <div>
                    <p className="eyebrow mb-4">Riverchase Pharmacy</p>
                    <ul className="space-y-5 text-[0.95rem]">
                        <li className="flex items-start gap-3">
                            <MapPinIcon className="w-5 h-5 mt-0.5 text-sage flex-shrink-0" />
                            <div className="text-ink-soft">
                                <div className="text-ink">3075 John Hawkins Pkwy, Suite G</div>
                                <div>Hoover, AL 35244</div>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <PhoneIcon className="w-5 h-5 mt-0.5 text-sage flex-shrink-0" />
                            <div className="text-ink-soft">
                                <div>
                                    Phone{" "}
                                    <a
                                        href="tel:2055366014"
                                        className="text-ink link-underline tabular-nums"
                                    >
                                        (205) 536-6014
                                    </a>
                                </div>
                                <div>Fax <span className="tabular-nums">(205) 536-6018</span></div>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <EnvelopeIcon className="w-5 h-5 mt-0.5 text-sage flex-shrink-0" />
                            <a
                                href="mailto:riverchasepharmacy@gmail.com"
                                className="text-ink link-underline break-all"
                            >
                                riverchasepharmacy@gmail.com
                            </a>
                        </li>
                        <li className="flex items-start gap-3">
                            <ClockIcon className="w-5 h-5 mt-0.5 text-sage flex-shrink-0" />
                            <div className="text-ink-soft space-y-0.5">
                                <div>Mon–Fri · 8:30 AM – 4:30 PM</div>
                                <div>Saturday · 8:30 AM – 2:30 PM</div>
                                <div>Sunday · Closed</div>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Column 2 — navigation */}
                <div>
                    <p className="eyebrow mb-4">Explore</p>
                    <ul className="grid grid-cols-2 gap-y-2 gap-x-6 text-[0.95rem]">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className="text-ink-soft hover:text-ink transition-colors">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <p className="eyebrow mt-8 mb-4">Prescriptions</p>
                    <ul className="space-y-2 text-[0.95rem]">
                        {actionLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className="link-underline">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3 — brief contact prompt */}
                <div>
                    <p className="eyebrow mb-4">Say hello</p>
                    <p className="text-ink-soft mb-6 leading-relaxed">
                        Questions about a prescription, insurance, or a product? Our pharmacists
                        are happy to help — in person, by phone, or online.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/contact" className="btn btn-primary">Contact us</Link>
                        <a href="tel:2055366014" className="btn btn-ghost">Call the pharmacy</a>
                    </div>
                </div>
            </div>

            <div className="hairline-t">
                <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs tracking-wide uppercase text-ink-mute">
                    <span>© {new Date().getFullYear()} Riverchase Pharmacy</span>
                    <span>Licensed independent pharmacy · Hoover, Alabama</span>
                </div>
            </div>
        </footer>
    );
}
