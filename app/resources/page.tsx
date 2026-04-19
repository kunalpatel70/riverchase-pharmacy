import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resources",
    description:
        "Helpful pharmacy resources from Riverchase Pharmacy including prescription refill tools, health information links, and insurance and savings programs.",
};

const resources: { category: string; items: { name: string; desc: string; href: string; external?: boolean }[] }[] = [
    {
        category: "Local Health Resources",
        items: [
            { name: "Jefferson County Dept. of Health", desc: "Local public health services, clinics, and programs.", href: "https://www.jcdh.org/", external: true },
            { name: "Alabama Medicaid", desc: "Alabama-specific Medicaid eligibility, enrollment, and benefits.", href: "https://medicaid.alabama.gov/", external: true },
            { name: "Alabama Department of Public Health", desc: "Statewide health resources, disease prevention, and vital records.", href: "https://www.alabamapublichealth.gov/", external: true },
        ],
    },
    {
        category: "Health Information",
        items: [
            { name: "MedlinePlus", desc: "Trusted health information from the National Library of Medicine.", href: "https://medlineplus.gov/", external: true },
            { name: "CDC Vaccines & Immunizations", desc: "Immunization schedules and vaccine information.", href: "https://www.cdc.gov/vaccines/", external: true },
            { name: "FDA Drug Information", desc: "Search for drug safety information and recalls.", href: "https://www.fda.gov/drugs", external: true },
        ],
    },
    {
        category: "Insurance & Savings",
        items: [
            { name: "Medicare.gov", desc: "Official Medicare information and plan finder.", href: "https://www.medicare.gov/", external: true },
            { name: "Medicaid", desc: "Learn about Medicaid eligibility and coverage.", href: "https://www.medicaid.gov/", external: true },
            { name: "NeedyMeds", desc: "Find patient assistance programs and discount drug cards.", href: "https://www.needymeds.org/", external: true },
        ],
    },
];

export default function Resources() {
    return (
        <div>
            {/* Hero */}
            <section className="bg-gradient-to-br from-teal-700 to-emerald-600 text-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources</h1>
                    <p className="text-xl text-teal-100 leading-relaxed">
                        Helpful links and tools to support your health and wellness journey
                    </p>
                </div>
            </section>

            {/* Resources */}
            <section className="max-w-6xl mx-auto py-16 px-6 space-y-16">
                {resources.map((group) => (
                    <div key={group.category}>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-700">
                            {group.category}
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {group.items.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                    className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition group border border-gray-100"
                                >
                                    <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-teal-700 transition">
                                        {item.name}
                                        {item.external && <span className="text-gray-400 text-sm ml-1">↗</span>}
                                    </h3>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-b from-gray-50 to-teal-50/30 py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Can&apos;t Find What You Need?</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Our pharmacists are always happy to help answer your questions.
                    </p>
                    <Link
                        href="/contact"
                        className="bg-teal-700 text-white px-8 py-3 rounded font-bold inline-block hover:bg-teal-800 transition"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
}
