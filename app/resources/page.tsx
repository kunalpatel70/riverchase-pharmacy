import Link from "next/link";

const resources: { category: string; items: { name: string; desc: string; href: string; external?: boolean }[] }[] = [
    {
        category: "Prescription Resources",
        items: [
            { name: "Rx Refill Request", desc: "Submit your prescription refill online.", href: "/refill" },
            { name: "Transfer Prescription", desc: "Transfer your prescriptions to River Chase Pharmacy.", href: "/contact" },
            { name: "Free Home Delivery", desc: "Get your prescriptions delivered to your door at no cost.", href: "/services" },
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
            <section className="bg-sky-700 text-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources</h1>
                    <p className="text-xl text-sky-100 leading-relaxed">
                        Helpful links and tools to support your health and wellness journey
                    </p>
                </div>
            </section>

            {/* Resources */}
            <section className="max-w-6xl mx-auto py-16 px-6 space-y-16">
                {resources.map((group) => (
                    <div key={group.category}>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-sky-700">
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
                                    <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-sky-700 transition">
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
            <section className="bg-gray-50 py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Can&apos;t Find What You Need?</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Our pharmacists are always happy to help answer your questions.
                    </p>
                    <Link
                        href="/contact"
                        className="bg-sky-700 text-white px-8 py-3 rounded font-bold inline-block hover:bg-sky-800 transition"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
}
