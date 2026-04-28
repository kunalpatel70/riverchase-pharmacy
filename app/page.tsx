"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
    ArrowRightIcon,
    PhoneIcon,
    TruckIcon,
    ClipboardDocumentCheckIcon,
    ArrowPathIcon,
    BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";

const heroImages = ["/hero-1.jpg", "/hero-2.jpg", "/hero-3.jpg"];

const quickActions = [
    {
        icon: ArrowPathIcon,
        label: "Refill",
        desc: "Request a refill in under a minute.",
        href: "/refill",
    },
    {
        icon: ClipboardDocumentCheckIcon,
        label: "Transfer",
        desc: "Move prescriptions from another pharmacy.",
        href: "/transfer",
    },
    {
        icon: TruckIcon,
        label: "Free delivery",
        desc: "We bring your prescriptions to your door.",
        href: "/services",
    },
    {
        icon: BuildingStorefrontIcon,
        label: "Express clinic",
        desc: "Walk-in care, right on site.",
        href: "/services",
    },
];

const services = [
    {
        no: "01",
        title: "Prescription refills",
        desc: "Request refills online or by phone — with reminders and automatic sync for recurring medications.",
        img: "/service-packaging.jpg",
        href: "/refill",
    },
    {
        no: "02",
        title: "Free home delivery",
        desc: "No time to come in? We deliver prescriptions throughout the Hoover area, at no additional cost.",
        img: "/service-delivery.jpg",
        href: "/services",
    },
    {
        no: "03",
        title: "Immunizations",
        desc: "Flu, shingles, pneumonia, COVID-19 and travel vaccines administered by licensed pharmacists.",
        img: "/service-immunization.jpg",
        href: "/services",
    },
    {
        no: "04",
        title: "Medical supplies",
        desc: "Walkers, canes, compression stockings, nebulizers, wound care and other durable equipment.",
        img: "/service-supplies.jpg",
        href: "/medical-supplies",
    },
    {
        no: "05",
        title: "Multi-dose packaging",
        desc: "Medication management made easy: pre-sorted by date and time, organized for you.",
        img: "/service-vitamins.jpg",
        href: "/services",
    },
    {
        no: "06",
        title: "Mental-health pharmacy",
        desc: "A specialty focus on psych and HIV medications, with attentive, discreet counseling.",
        img: "/service-mental-health.jpg",
        href: "/services",
    },
];

export default function Home() {
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        const t = setInterval(() => {
            setSlide((p) => (p + 1) % heroImages.length);
        }, 5200);
        return () => clearInterval(t);
    }, []);

    return (
        <div>
            {/* ─────────── Hero ─────────── */}
            <section className="bg-cream">
                <div className="max-w-7xl mx-auto px-6 pt-4 md:pt-8 pb-14 md:pb-24 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    <div className="lg:col-span-7 rise-in">
                        <p className="eyebrow kicker-rule mb-6">
                            Independent pharmacy · Hoover, Alabama
                        </p>
                        <h1 className="display-xl text-ink">
                            Now open in Hoover.
                            <br />
                            On a <em className="font-display italic" style={{ color: "var(--sage-deep)" }}>first-name</em> basis.
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-ink-soft max-w-2xl leading-relaxed">
                            Riverchase Pharmacy is Hoover&apos;s newest independent pharmacy — built
                            around personal service, free home delivery, and the kind of attention
                            the big chains forgot how to give.
                        </p>
                        <div className="mt-9 flex flex-wrap items-center gap-3">
                            <Link href="/refill" className="btn btn-primary">
                                Refill a prescription
                                <ArrowRightIcon className="w-4 h-4" />
                            </Link>
                            <Link href="/transfer" className="btn btn-ghost">
                                Transfer to us
                            </Link>
                            <a
                                href="tel:2055366014"
                                className="ml-1 hidden sm:inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink"
                            >
                                <PhoneIcon className="w-4 h-4 text-sage" />
                                <span className="font-medium tabular-nums">(205) 536-6014</span>
                            </a>
                        </div>
                    </div>

                    {/* Hero photo stack */}
                    <div className="lg:col-span-5 relative rise-in rise-in-delay-2">
                        <div className="relative aspect-[4/5] w-full max-w-md ml-auto">
                            {heroImages.map((src, i) => (
                                <Image
                                    key={src}
                                    src={src}
                                    alt="Riverchase Pharmacy"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    className={`object-cover rounded-sm transition-opacity duration-[900ms] ease-out ${
                                        i === slide ? "opacity-100" : "opacity-0"
                                    }`}
                                    priority={i === 0}
                                />
                            ))}
                            <div className="absolute inset-0 ring-1 ring-rule rounded-sm pointer-events-none" />
                            <div className="absolute -left-4 md:-left-8 -bottom-6 surface-panel px-5 py-4 bg-cream flex items-center gap-3 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
                                <div className="text-xs">
                                    <div className="eyebrow">Open now</div>
                                    <div className="text-ink mt-0.5">Until 4:30 PM today</div>
                                </div>
                            </div>
                            <div className="absolute -right-2 md:-right-6 top-6 flex flex-col items-end gap-1">
                                {heroImages.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setSlide(i)}
                                        className={`w-6 h-px transition-all ${
                                            i === slide ? "bg-ink w-10" : "bg-ink-mute"
                                        }`}
                                        aria-label={`Slide ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─────────── Quick actions strip ─────────── */}
            <section className="hairline-t hairline-b bg-paper">
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 md:divide-x md:divide-[var(--rule)]">
                    {quickActions.map((a) => (
                        <Link
                            key={a.label}
                            href={a.href}
                            className="group flex items-start gap-4 px-6 py-7 transition-colors hover:bg-cream"
                        >
                            <a.icon className="w-6 h-6 text-sage mt-1 shrink-0" />
                            <div>
                                <div className="flex items-center gap-1.5 font-display text-xl text-ink font-medium">
                                    {a.label}
                                    <ArrowRightIcon className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </div>
                                <p className="text-sm text-ink-soft mt-1 leading-snug">{a.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* ─────────── Welcome / pull-quote ─────────── */}
            <section className="bg-cream">
                <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-3">
                        <p className="eyebrow kicker-rule">About</p>
                    </div>
                    <div className="lg:col-span-8 lg:col-start-5">
                        <p className="font-display text-2xl md:text-[2rem] leading-[1.25] text-ink max-w-[60ch]">
                            We&apos;re a small pharmacy with a large idea of what care looks like:
                            pharmacists who remember your name, insurance help without the runaround,
                            and honest advice about whether that over-the-counter remedy is worth your money.
                        </p>
                        <div className="mt-10 flex flex-wrap items-center gap-8 text-sm text-ink-soft">
                            <Link href="/about" className="link-underline text-ink font-medium">
                                Read our story
                            </Link>
                            <span className="hidden md:inline text-ink-mute">·</span>
                            <span>
                                Accepting Medicare, Medicaid, and all major commercial plans.
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─────────── Services list ─────────── */}
            <section className="bg-paper hairline-t hairline-b">
                <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
                    <div className="grid lg:grid-cols-12 gap-10 mb-12 md:mb-16">
                        <div className="lg:col-span-5">
                            <p className="eyebrow kicker-rule mb-5">What we do</p>
                            <h2 className="display-lg text-ink">
                                Full-service pharmacy, just without the fluorescent aisles.
                            </h2>
                        </div>
                        <div className="lg:col-span-6 lg:col-start-7 flex items-end">
                            <p className="text-ink-soft text-lg leading-relaxed max-w-xl">
                                Whatever your chain pharmacy does, we do — better and with less
                                waiting. Here are the services our customers ask about most.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--rule)] hairline-t hairline-b">
                        {services.map((s) => (
                            <Link
                                key={s.title}
                                href={s.href}
                                className="group bg-paper hover:bg-cream transition-colors p-7 flex flex-col"
                            >
                                <div className="flex items-start justify-between">
                                    <span className="font-display text-sm text-ink-mute tabular-nums">{s.no}</span>
                                    <ArrowRightIcon className="w-4 h-4 text-ink-mute opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-ink transition-all" />
                                </div>
                                <div className="relative aspect-[5/4] mt-5 overflow-hidden bg-cream">
                                    <Image
                                        src={s.img}
                                        alt=""
                                        aria-hidden
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-contain p-2 transition-opacity duration-500 group-hover:opacity-90"
                                    />
                                </div>
                                <h3 className="mt-6 font-display text-[1.4rem] font-medium text-ink leading-tight">
                                    {s.title}
                                </h3>
                                <p className="mt-2 text-ink-soft text-[0.95rem] leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-12 flex flex-wrap gap-4">
                        <Link href="/services" className="btn btn-primary">
                            View all services
                            <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                        <Link href="/medical-supplies" className="btn btn-ghost">
                            Browse medical supplies
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─────────── Closing CTA ─────────── */}
            <section className="bg-cream">
                <div className="max-w-7xl mx-auto px-6 py-20 md:py-24 grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-7">
                        <p className="eyebrow kicker-rule mb-5">Ready when you are</p>
                        <h2 className="display-lg text-ink">
                            Switch to a pharmacy that actually picks up the phone.
                        </h2>
                        <p className="mt-5 text-ink-soft text-lg max-w-2xl leading-relaxed">
                            We&apos;ll handle the paperwork — you&apos;ll keep the same medication,
                            often at a lower copay, and add free delivery while you&apos;re at it.
                        </p>
                    </div>
                    <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-3">
                        <Link href="/transfer" className="btn btn-primary">
                            Transfer my prescriptions
                            <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                        <Link href="/contact" className="btn btn-ghost">
                            Visit the shop
                        </Link>
                        <a
                            href="tel:2055366014"
                            className="mt-2 text-sm text-ink-soft hover:text-ink flex items-center gap-2 justify-center"
                        >
                            <PhoneIcon className="w-4 h-4 text-sage" />
                            <span className="tabular-nums font-medium">(205) 536-6014</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
