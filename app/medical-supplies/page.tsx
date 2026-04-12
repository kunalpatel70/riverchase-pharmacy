import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Medical Supplies",
    description:
        "River Chase Pharmacy carries durable medical supplies including canes, walkers, wheelchairs, nebulizers, compression stockings, wound care supplies, and more in Hoover, AL.",
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
    "Compressors and nebulizers",
    "Compression stockings",
    "Wound care supplies",
    "Ostomy supplies",
    "And so much more…",
];

export default function MedicalSupplies() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-sky-700 to-cyan-600 text-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Medical Supplies</h1>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-5xl mx-auto py-16 px-6">
                <div className="mb-10">
                    <Image
                        src="/medical-supplies-thumb.jpg"
                        alt="Wheelchair"
                        width={280}
                        height={275}
                        className="rounded-lg object-cover float-left mr-8 mb-4"
                    />
                    <p className="text-gray-700 leading-relaxed mb-6">
                        We take pride in the durability of the medical supplies that are obtainable at River Chase
                        Pharmacy. We have the best brands of medical equipment that you can use at home for your
                        specific situation. Our medical supplies include, but are not limited to:
                    </p>

                    <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
                        {supplies.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                                <span className="text-sky-700 mt-0.5 flex-shrink-0">✔</span>
                                <span className="text-gray-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <p className="text-gray-700 leading-relaxed text-lg clear-left">
                    Check out what other medical supplies we are offering. Visit us at our pharmacy or
                    call <strong className="text-sky-700">(205) 536-6014</strong> beforehand to check for availability.
                </p>
            </section>
        </div>
    );
}
