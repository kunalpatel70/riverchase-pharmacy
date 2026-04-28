import {
    PhoneIcon,
    EnvelopeIcon,
    MapPinIcon,
    ClockIcon,
    ArrowRightIcon,
    ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Contact Riverchase Pharmacy at (205) 536-6014. Located at 3075 John Hawkins Pkwy Suite G, Hoover, AL 35244. Open Mon-Fri 8:30am-4:30pm, Sat 8:30am-2:30pm.",
};

const channels = [
    {
        icon: PhoneIcon,
        label: "Phone",
        primary: "(205) 536-6014",
        href: "tel:2055366014",
        secondary: "Fax (205) 536-6018",
        note: "Fastest for prescription questions.",
    },
    {
        icon: EnvelopeIcon,
        label: "Email",
        primary: "riverchasepharmacy@gmail.com",
        href: "mailto:riverchasepharmacy@gmail.com",
        note: "We reply within one business day.",
    },
    {
        icon: MapPinIcon,
        label: "In person",
        primary: "3075 John Hawkins Pkwy, Suite G",
        secondary: "Hoover, AL 35244",
        note: "Free parking in the shopping center.",
    },
    {
        icon: ClockIcon,
        label: "Hours",
        primary: "Mon–Fri · 8:30 AM – 4:30 PM",
        secondary: "Saturday · 8:30 AM – 2:30 PM",
        note: "Closed Sunday.",
    },
];

export default function Contact() {
    return (
        <div>
            {/* Page head */}
            <section className="bg-cream hairline-b">
                <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 md:pt-24 md:pb-16 grid lg:grid-cols-12 gap-10 items-end rise-in">
                    <div className="lg:col-span-7">
                        <p className="eyebrow kicker-rule mb-5">Contact</p>
                        <h1 className="display-xl text-ink">We&apos;re right here — and happy to hear from you.</h1>
                    </div>
                    <div className="lg:col-span-4 lg:col-start-9">
                        <p className="text-ink-soft text-lg leading-relaxed">
                            Prescription questions, insurance help, or just a quick hello — pick a channel.
                        </p>
                    </div>
                </div>
            </section>

            {/* Channels */}
            <section className="bg-cream">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--rule)] hairline-t hairline-b">
                        {channels.map((c) => {
                            const content = (
                                <div className="bg-cream p-7 h-full flex flex-col">
                                    <c.icon className="w-6 h-6 text-sage" />
                                    <p className="eyebrow mt-5">{c.label}</p>
                                    <p className="font-display text-[1.15rem] text-ink mt-2 leading-snug">
                                        {c.primary}
                                    </p>
                                    {c.secondary && (
                                        <p className="text-ink-soft text-sm mt-1">{c.secondary}</p>
                                    )}
                                    <p className="text-ink-mute text-sm mt-4 leading-snug">{c.note}</p>
                                </div>
                            );
                            return c.href ? (
                                <a
                                    key={c.label}
                                    href={c.href}
                                    className="group hover:bg-paper transition-colors"
                                >
                                    {content}
                                </a>
                            ) : (
                                <div key={c.label}>{content}</div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Form + map */}
            <section className="bg-paper hairline-t hairline-b">
                <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5">
                        <p className="eyebrow kicker-rule mb-5">Send a message</p>
                        <h2 className="display-md text-ink">
                            Write to us and we&apos;ll get back within a business day.
                        </h2>
                        <p className="mt-4 text-ink-soft leading-relaxed">
                            For anything time-sensitive, please call{" "}
                            <a href="tel:2055366014" className="link-underline tabular-nums text-ink">
                                (205) 536-6014
                            </a>
                            .
                        </p>
                    </div>

                    <form className="lg:col-span-7 space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs uppercase tracking-[0.14em] text-ink-soft mb-2">
                                    Your name
                                </label>
                                <input type="text" required className="input" placeholder="Jane Doe" />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-[0.14em] text-ink-soft mb-2">
                                    Email
                                </label>
                                <input type="email" required className="input" placeholder="jane@example.com" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-[0.14em] text-ink-soft mb-2">
                                Phone (optional)
                            </label>
                            <input type="tel" className="input" placeholder="(205) 555-0000" />
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-[0.14em] text-ink-soft mb-2">
                                Subject
                            </label>
                            <input type="text" required className="input" placeholder="How can we help?" />
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-[0.14em] text-ink-soft mb-2">
                                Message
                            </label>
                            <textarea
                                required
                                rows={5}
                                className="input resize-none"
                                placeholder="Tell us a little about your inquiry."
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-full sm:w-auto">
                            Send message
                            <ArrowRightIcon className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            </section>

            {/* Map */}
            <section className="bg-cream">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <div className="grid lg:grid-cols-12 gap-10 items-end mb-8">
                        <div className="lg:col-span-7">
                            <p className="eyebrow kicker-rule mb-5">Visit us</p>
                            <h2 className="display-md text-ink">
                                3075 John Hawkins Pkwy, Suite G — Hoover, AL 35244.
                            </h2>
                        </div>
                        <div className="lg:col-span-4 lg:col-start-9">
                            <p className="text-ink-soft leading-relaxed">
                                In the Riverchase Shopping Center. Ample free parking, accessible entry.
                            </p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-sm ring-1 ring-rule">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.8!2d-86.8105!3d33.3765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88891b1f5c3e1b3d%3A0x0!2s3075+John+Hawkins+Pkwy+Suite+G%2C+Hoover%2C+AL+35244!5e0!3m2!1sen!2sus!4v1700000000000"
                            className="w-full h-[420px] border-0 block"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Riverchase Pharmacy Location"
                        />
                    </div>
                </div>
            </section>

            {/* Emergency notice */}
            <section className="bg-paper hairline-t">
                <div className="max-w-7xl mx-auto px-6 py-10">
                    <div className="flex items-start gap-4 max-w-4xl">
                        <ExclamationTriangleIcon className="w-6 h-6 shrink-0 mt-0.5" style={{ color: "var(--terracotta)" }} />
                        <div>
                            <p className="font-semibold text-ink">Medical emergency?</p>
                            <p className="text-ink-soft mt-1 leading-relaxed">
                                If you&apos;re experiencing a medical emergency, call 911 or visit your
                                nearest emergency room. For urgent prescription questions after hours,
                                call us at{" "}
                                <a href="tel:2055366014" className="link-underline tabular-nums text-ink">
                                    (205) 536-6014
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
