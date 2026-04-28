import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about Riverchase Pharmacy in Hoover, Alabama. Established with the health of the entire family in mind, our licensed pharmacists provide quality care and products.",
};

const values = [
    {
        no: "01",
        title: "Person-first",
        desc: "Every customer is known by name. We remember your medications, your allergies, and the questions you asked last time.",
    },
    {
        no: "02",
        title: "Independent",
        desc: "No corporate quotas. Our pharmacists make recommendations based on what actually helps — not what sells.",
    },
    {
        no: "03",
        title: "Community",
        desc: "We've chosen to be your neighborhood pharmacy, and that means being available for a five-minute conversation about a real concern.",
    },
];

export default function About() {
    return (
        <div>
            {/* Page head */}
            <section className="bg-cream hairline-b">
                <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 md:pt-24 md:pb-16 grid lg:grid-cols-12 gap-10 items-end rise-in">
                    <div className="lg:col-span-7">
                        <p className="eyebrow kicker-rule mb-5">About</p>
                        <h1 className="display-xl text-ink">A pharmacy that cares for you and your family.</h1>
                    </div>
                    <div className="lg:col-span-4 lg:col-start-9">
                        <p className="text-ink-soft text-lg leading-relaxed">
                            Established with the health of the entire family in mind — because one
                            healthy person changes the health of everyone around them.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main content */}
            <section className="bg-cream">
                <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-10 lg:gap-14">
                    <div className="lg:col-span-5">
                        <div className="relative aspect-[4/5] w-full max-w-md">
                            <Image
                                src="/about-thumb.jpg"
                                alt="Pharmacist and customer smiling"
                                fill
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                className="object-cover rounded-sm"
                            />
                            <div className="absolute inset-0 ring-1 ring-rule rounded-sm pointer-events-none" />
                        </div>
                    </div>
                    <div className="lg:col-span-7 space-y-5 text-ink-soft text-[1.05rem] leading-[1.75] max-w-[62ch]">
                        <p>
                            Riverchase Pharmacy was established with the health of the entire family
                            in mind. We understand how great an impact a healthy person has on the
                            well-being of their entire family.
                        </p>
                        <p>
                            We provide health products and programs designed to help you look after
                            your own health as well as that of your loved ones. Every product on our
                            shelves is thoroughly checked, and every service we render aligns with a
                            code of professional ethics and the highest pharmacy standards.
                        </p>
                        <p>
                            Our pharmacists are licensed, experienced, and qualified to assist you —
                            whether you need a five-minute answer or a thirty-minute conversation
                            about a new diagnosis.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission pull-quote */}
            <section className="bg-paper hairline-t hairline-b">
                <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-3">
                        <p className="eyebrow kicker-rule">Our mission</p>
                    </div>
                    <blockquote className="lg:col-span-8 lg:col-start-5">
                        <p className="font-display text-2xl md:text-[2.1rem] leading-[1.25] text-ink">
                            &ldquo;To promote a thriving community by ensuring the good health of its
                            families — offering a complete line of pharmacy products and a full range
                            of services that address each member&apos;s specific needs.&rdquo;
                        </p>
                    </blockquote>
                </div>
            </section>

            {/* Values */}
            <section className="bg-cream">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <p className="eyebrow kicker-rule mb-6">What we stand for</p>
                    <div className="grid md:grid-cols-3 gap-px bg-[var(--rule)] hairline-t hairline-b">
                        {values.map((v) => (
                            <div key={v.no} className="bg-cream p-7">
                                <div className="font-display text-sm text-ink-mute tabular-nums">{v.no}</div>
                                <h3 className="mt-5 font-display text-[1.45rem] font-medium text-ink">{v.title}</h3>
                                <p className="mt-2 text-ink-soft text-[0.95rem] leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="bg-paper hairline-t">
                <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div>
                        <p className="eyebrow mb-3">Questions?</p>
                        <p className="font-display text-2xl md:text-3xl text-ink max-w-xl">
                            Call us at <a href="tel:2055366014" className="link-underline tabular-nums">(205) 536-6014</a> — or drop by and say hello.
                        </p>
                    </div>
                    <Link href="/contact" className="btn btn-primary shrink-0">
                        Get in touch
                        <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
