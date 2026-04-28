import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
    title: "Medical Supplies",
    description:
        "Riverchase Pharmacy carries durable medical supplies including canes, walkers, wheelchairs, nebulizers, compression stockings, wound care supplies, and more in Hoover, AL.",
};

const supplies = [
    "Canes",
    "Walkers",
    "Crutches",
    "Rollators",
    "Wheelchairs",
    "Bath safety equipment",
    "Shower benches",
    "Chair lifts",
    "Compressors & nebulizers",
    "Compression stockings",
    "Wound care supplies",
    "Ostomy supplies",
];

export default function MedicalSupplies() {
    return (
        <div>
            {/* Page head */}
            <section className="bg-cream hairline-b">
                <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 md:pt-24 md:pb-16 grid lg:grid-cols-12 gap-10 items-end rise-in">
                    <div className="lg:col-span-7">
                        <p className="eyebrow kicker-rule mb-5">Medical supplies</p>
                        <h1 className="display-xl text-ink">Durable equipment, properly fitted — and available in person.</h1>
                    </div>
                    <div className="lg:col-span-4 lg:col-start-9">
                        <p className="text-ink-soft text-lg leading-relaxed">
                            Trusted brands for daily mobility, recovery, and at-home care — with
                            staff who&apos;ll help you choose the right one.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main */}
            <section className="bg-cream">
                <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-10 lg:gap-14">
                    <div className="lg:col-span-5">
                        <div className="relative aspect-[4/5] max-w-md">
                            <Image
                                src="/medical-supplies-thumb.jpg"
                                alt="Medical supplies — wheelchair"
                                fill
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                className="object-cover rounded-sm"
                            />
                            <div className="absolute inset-0 ring-1 ring-rule rounded-sm pointer-events-none" />
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <p className="text-ink-soft text-[1.05rem] leading-[1.75] max-w-[62ch]">
                            We take pride in the durability of the medical supplies available at
                            Riverchase Pharmacy. We carry the best brands of at-home medical
                            equipment — and our staff will help you choose and fit what you need.
                        </p>

                        <ul className="mt-10 grid sm:grid-cols-2 gap-px bg-[var(--rule)] hairline-t hairline-b">
                            {supplies.map((item, i) => (
                                <li key={item} className="bg-cream px-5 py-4 flex items-center gap-4">
                                    <span className="font-display text-xs text-ink-mute tabular-nums">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="text-ink">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="mt-8 text-ink-soft">
                            &hellip;and much more. Supplies rotate — call ahead to confirm
                            availability of a specific item.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-paper hairline-t">
                <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <p className="font-display text-2xl md:text-3xl text-ink max-w-xl">
                        Call <a href="tel:2055366014" className="link-underline tabular-nums">(205) 536-6014</a> to check availability — or stop in.
                    </p>
                    <div className="flex gap-3">
                        <Link href="/contact" className="btn btn-primary">
                            Directions & hours
                            <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                        <Link href="/services" className="btn btn-ghost">
                            Other services
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
