import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRightIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
    title: "Resources",
    description:
        "Helpful pharmacy resources from Riverchase Pharmacy including prescription refill tools, health information links, and insurance and savings programs.",
};

const resources: {
    category: string;
    items: { name: string; desc: string; href: string; external?: boolean }[];
}[] = [
    {
        category: "Local health",
        items: [
            { name: "Jefferson County Dept. of Health", desc: "Public health services, clinics, and programs.", href: "https://www.jcdh.org/", external: true },
            { name: "Alabama Medicaid", desc: "Alabama-specific eligibility, enrollment, and benefits.", href: "https://medicaid.alabama.gov/", external: true },
            { name: "Alabama Department of Public Health", desc: "Statewide resources, disease prevention, and vital records.", href: "https://www.alabamapublichealth.gov/", external: true },
        ],
    },
    {
        category: "Health information",
        items: [
            { name: "MedlinePlus", desc: "Trusted health information from the National Library of Medicine.", href: "https://medlineplus.gov/", external: true },
            { name: "CDC Vaccines & Immunizations", desc: "Immunization schedules and vaccine information.", href: "https://www.cdc.gov/vaccines/", external: true },
            { name: "FDA Drug Information", desc: "Drug safety information and recalls.", href: "https://www.fda.gov/drugs", external: true },
        ],
    },
    {
        category: "Insurance & savings",
        items: [
            { name: "Medicare.gov", desc: "Official Medicare information and plan finder.", href: "https://www.medicare.gov/", external: true },
            { name: "Medicaid", desc: "Eligibility and coverage information.", href: "https://www.medicaid.gov/", external: true },
            { name: "NeedyMeds", desc: "Patient assistance programs and discount drug cards.", href: "https://www.needymeds.org/", external: true },
        ],
    },
];

export default function Resources() {
    return (
        <div>
            {/* Page head */}
            <section className="bg-cream hairline-b">
                <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 md:pt-24 md:pb-16 grid lg:grid-cols-12 gap-10 items-end rise-in">
                    <div className="lg:col-span-7">
                        <p className="eyebrow kicker-rule mb-5">Resources</p>
                        <h1 className="display-xl text-ink">Helpful reading, vetted by our pharmacists.</h1>
                    </div>
                    <div className="lg:col-span-4 lg:col-start-9">
                        <p className="text-ink-soft text-lg leading-relaxed">
                            A curated set of links to support your health journey — from local
                            services to national drug-safety databases.
                        </p>
                    </div>
                </div>
            </section>

            {/* Groups */}
            <section className="bg-cream">
                <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 space-y-16 md:space-y-20">
                    {resources.map((group, gi) => (
                        <div key={group.category} className="grid lg:grid-cols-12 gap-10">
                            <div className="lg:col-span-3">
                                <p className="eyebrow kicker-rule">
                                    {String(gi + 1).padStart(2, "0")} · {group.category}
                                </p>
                            </div>
                            <div className="lg:col-span-9">
                                <ul className="grid md:grid-cols-3 gap-px bg-[var(--rule)] hairline-t hairline-b">
                                    {group.items.map((item) => (
                                        <li key={item.name} className="bg-cream">
                                            <Link
                                                href={item.href}
                                                {...(item.external
                                                    ? { target: "_blank", rel: "noopener noreferrer" }
                                                    : {})}
                                                className="group flex flex-col h-full px-6 py-6 hover:bg-paper transition-colors"
                                            >
                                                <div className="flex items-start justify-between gap-3">
                                                    <h3 className="font-display text-[1.15rem] font-medium text-ink leading-snug">
                                                        {item.name}
                                                    </h3>
                                                    {item.external && (
                                                        <ArrowUpRightIcon className="w-4 h-4 text-ink-mute shrink-0 mt-1 group-hover:text-ink transition-colors" />
                                                    )}
                                                </div>
                                                <p className="text-ink-soft text-sm mt-2 leading-relaxed">
                                                    {item.desc}
                                                </p>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-paper hairline-t">
                <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div>
                        <p className="eyebrow mb-3">Can&apos;t find it?</p>
                        <p className="font-display text-2xl md:text-3xl text-ink max-w-xl">
                            Our pharmacists are happy to answer questions — call, email, or stop in.
                        </p>
                    </div>
                    <Link href="/contact" className="btn btn-primary shrink-0">
                        Contact the pharmacy
                        <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
