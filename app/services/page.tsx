import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services",
    description:
        "River Chase Pharmacy offers affordable vitamins, special packaging, immunizations, free prescription home delivery, medication therapy management, and more in Hoover, AL.",
};

const services = [
    { label: "Affordable Vitamins", href: "/services" },
    { label: "Special Packaging (Unit Dose and Multi-Dose)", href: "/services" },
    { label: "Medical Supplies", href: "/medical-supplies" },
    { label: "Free Prescription Home Delivery", href: "/services" },
    { label: "Electronic Prescriptions Accepted", href: "/services" },
    { label: "Immunization", href: "/services" },
    { label: "Specialized in Psych Meds", href: "/services" },
    { label: "HIV Meds Also Dispensed", href: "/services" },
    { label: "Full Line of Over-The-Counter Products Available", href: "/services" },
    { label: "Injectable Medications", href: "/services" },
    { label: "Medication Therapy Management", href: "/services" },
    { label: "Flu Shots", href: "/services" },
    { label: "Free Blood Pressure Checks", href: "/services" },
];

export default function Services() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-sky-700 to-cyan-600 text-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Services</h1>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-5xl mx-auto py-16 px-6">
                <div className="md:flex gap-8 mb-10">
                    <div className="md:w-1/3 mb-6 md:mb-0 flex-shrink-0">
                        <Image
                            src="/services-thumb.jpg"
                            alt="Pharmacist holding medicine"
                            width={300}
                            height={200}
                            className="rounded-lg object-cover w-full"
                        />
                    </div>
                    <div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            At River Chase Pharmacy, we always aim for a thorough and integrated approach to patient
                            care. This is why we make sure that the needs of every customer who walks into our store
                            will be addressed.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            River Chase Pharmacy is a one-stop shop pharmacy where you can choose from our extensive
                            service options listed below:
                        </p>
                    </div>
                </div>

                {/* Services List */}
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-10">
                    {services.map((s) => (
                        <li key={s.label} className="flex items-start gap-2">
                            <span className="text-sky-700 mt-0.5">✔</span>
                            <Link href={s.href} className="text-sky-700 underline hover:text-sky-900">
                                {s.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Highlighted Info */}
                <div className="bg-sky-50 border-l-4 border-sky-700 rounded-r-lg p-6 mb-10 text-center">
                    <p className="text-gray-800 font-semibold italic mb-2">
                        We take all discount cards and coupons/trial cards!
                    </p>
                    <p className="text-gray-800 font-semibold italic">
                        We are open Mondays to Fridays from 9 a.m. to 6 p.m. and Saturdays from 9 a.m. to 1 p.m.
                        We are closed on Sundays.
                    </p>
                </div>

                <p className="text-gray-700 leading-relaxed text-lg">
                    For your pharmacy needs, always choose River Chase Pharmacy. To ask for pricing, please do not
                    hesitate to call us at <strong className="text-sky-700">(205) 536-6014</strong>.
                </p>

                <div className="mt-8">
                    <Link
                        href="/contact"
                        className="inline-block bg-sky-700 text-white px-8 py-3 rounded font-semibold hover:bg-sky-800 transition"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
}
