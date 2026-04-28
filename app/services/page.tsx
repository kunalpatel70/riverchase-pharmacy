import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
    title: "Services",
    description:
        "Riverchase Pharmacy offers affordable vitamins, special packaging, immunizations, free prescription home delivery, medication therapy management, and more in Hoover, AL.",
};

const services = [
    { label: "Affordable Vitamins", href: "/services" },
    { label: "Special Packaging — Unit Dose & Multi-Dose", href: "/services" },
    { label: "Medical Supplies", href: "/medical-supplies" },
    { label: "Free Prescription Home Delivery", href: "/services" },
    { label: "Electronic Prescriptions Accepted", href: "/services" },
    { label: "Immunization", href: "/services" },
    { label: "Specialized in Psych Meds", href: "/services" },
    { label: "HIV Medications Dispensed", href: "/services" },
    { label: "Full Line of Over-The-Counter Products", href: "/services" },
    { label: "Injectable Medications", href: "/services" },
    { label: "Medication Therapy Management", href: "/services" },
    { label: "Flu Shots", href: "/services" },
    { label: "On-Site Express Clinic", href: "/services" },
];

export default function Services() {
    return (
        <div>
            {/* Page head */}
            <section className="bg-cream hairline-b">
                <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 md:pt-24 md:pb-16 grid lg:grid-cols-12 gap-10 items-end rise-in">
                    <div className="lg:col-span-7">
                        <p className="eyebrow kicker-rule mb-5">Services</p>
                        <h1 className="display-xl text-ink">A one-stop pharmacy — with thirteen good reasons to stop in.</h1>
                    </div>
                    <div className="lg:col-span-4 lg:col-start-9">
                        <p className="text-ink-soft text-lg leading-relaxed">
                            An integrated approach to patient care — because the needs of every
                            customer who walks through our door deserve to be answered.
                        </p>
                    </div>
                </div>
            </section>

            {/* Intro + image */}
            <section className="bg-cream">
                <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-10 lg:gap-14">
                    <div className="lg:col-span-5">
                        <div className="relative aspect-[4/5] max-w-md">
                            <Image
                                src="/services-thumb.jpg"
                                alt="Pharmacist holding medicine"
                                fill
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                className="object-cover rounded-sm"
                            />
                            <div className="absolute inset-0 ring-1 ring-rule rounded-sm pointer-events-none" />
                        </div>
                    </div>
                    <div className="lg:col-span-7 space-y-5 text-ink-soft text-[1.05rem] leading-[1.75] max-w-[62ch]">
                        <p>
                            At Riverchase Pharmacy we aim for a thorough and integrated approach to
                            patient care. That means we answer the phone, we check for drug interactions,
                            we explain your insurance, and we&apos;ll follow up a week later to see how
                            you&apos;re feeling.
                        </p>
                        <p>
                            Below is an overview of the services our customers rely on. For pricing or
                            availability, call us at{" "}
                            <a href="tel:2055366014" className="text-ink link-underline tabular-nums">
                                (205) 536-6014
                            </a>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services grid */}
            <section className="bg-paper hairline-t hairline-b">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <p className="eyebrow kicker-rule mb-8">All services</p>
                    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--rule)] hairline-t hairline-b">
                        {services.map((s, i) => (
                            <li key={s.label} className="bg-paper">
                                <Link
                                    href={s.href}
                                    className="group flex items-start gap-5 px-6 py-5 hover:bg-cream transition-colors"
                                >
                                    <span className="font-display text-sm text-ink-mute tabular-nums pt-0.5">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="flex-1 text-ink text-[1.02rem] leading-snug">
                                        {s.label}
                                    </span>
                                    <ArrowRightIcon className="w-4 h-4 text-ink-mute mt-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-ink transition-all" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Insurance note */}
            <section className="bg-cream">
                <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-3">
                        <p className="eyebrow kicker-rule">Insurance & savings</p>
                    </div>
                    <div className="lg:col-span-8 lg:col-start-5">
                        <p className="font-display text-2xl md:text-3xl leading-[1.25] text-ink">
                            We proudly accept Medicare, Medicaid, and all major commercial plans.
                            Discount cards, coupons, and trial cards are always welcome.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-paper hairline-t">
                <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <p className="font-display text-2xl md:text-3xl text-ink max-w-xl">
                        Need something we haven&apos;t listed? Just ask.
                    </p>
                    <div className="flex gap-3">
                        <Link href="/contact" className="btn btn-primary">
                            Contact us
                            <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                        <Link href="/refill" className="btn btn-ghost">
                            Refill a prescription
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
