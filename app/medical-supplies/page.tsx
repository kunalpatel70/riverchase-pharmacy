import Image from "next/image";
import Link from "next/link";

const supplies = [
    { name: "Blood Pressure Monitors", desc: "Accurate home monitoring devices for daily blood pressure tracking." },
    { name: "Diabetic Supplies", desc: "Glucose meters, test strips, lancets, and insulin supplies." },
    { name: "Mobility Aids", desc: "Walkers, canes, wheelchairs, and other mobility assistance devices." },
    { name: "Wound Care", desc: "Bandages, gauze, antiseptics, and wound care essentials." },
    { name: "Respiratory Equipment", desc: "Nebulizers, spacers, and respiratory therapy supplies." },
    { name: "Orthopedic Supports", desc: "Braces, supports, compression stockings, and orthopedic aids." },
    { name: "Incontinence Products", desc: "Discreet and comfortable incontinence care products." },
    { name: "Home Health Supplies", desc: "Thermometers, pill organizers, and everyday health essentials." },
];

export default function MedicalSupplies() {
    return (
        <div>
            {/* Hero */}
            <section className="relative h-[300px] md:h-[400px] overflow-hidden">
                <Image src="/service-supplies.jpg" alt="Medical Supplies" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center text-white px-6">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Medical Supplies</h1>
                        <p className="text-xl text-gray-200">Quality medical supplies for your home health needs</p>
                    </div>
                </div>
            </section>

            {/* Intro */}
            <section className="max-w-5xl mx-auto py-16 px-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                    At River Chase Pharmacy, we carry a wide selection of medical supplies and durable medical equipment
                    to help you manage your health at home. Our knowledgeable staff can help you find the right products
                    and show you how to use them properly. We work with most insurance plans and Medicare for covered items.
                </p>
            </section>

            {/* Supplies Grid */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                        Products <span className="text-sky-700">We Carry</span>
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {supplies.map((item) => (
                            <div key={item.name} className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
                                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.name}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-sky-700 text-white py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Need Help Finding the Right Supplies?</h2>
                    <p className="text-xl text-sky-100 mb-8">
                        Our team is here to help you find exactly what you need. Give us a call or stop by.
                    </p>
                    <Link
                        href="/contact"
                        className="bg-white text-sky-700 px-8 py-3 rounded font-bold inline-block hover:bg-sky-50 transition"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
}
