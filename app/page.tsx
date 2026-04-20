"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const heroImages = ["/hero-1.jpg", "/hero-2.jpg", "/hero-3.jpg"];

const services = [
    { title: "Affordable Vitamins", desc: "Take vitamins for better health.", img: "/service-vitamins.jpg", href: "/services" },
    { title: "Special Packaging", desc: "We'll make medication management easy for you.", img: "/service-packaging.jpg", href: "/services" },
    { title: "Medical Supplies", desc: "Medical supplies you need at home are available here.", img: "/service-supplies.jpg", href: "/medical-supplies" },
    { title: "Immunization", desc: "Stay protected with our immunization services.", img: "/service-immunization.jpg", href: "/services" },
    { title: "Free Prescription Home Delivery", desc: "Your prescriptions delivered straight to your home at no cost!", img: "/service-delivery.jpg", href: "/services" },
    { title: "Mental Health Medication", desc: "Medications are available to improve mental health.", img: "/service-mental-health.jpg", href: "/services" },
];

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            {/* Hero Slideshow */}
            <section className="relative h-[400px] md:h-[550px] overflow-hidden">
                {heroImages.map((src, i) => (
                    <Image
                        key={src}
                        src={src}
                        alt="Riverchase Pharmacy"
                        fill
                        className={`object-cover transition-opacity duration-700 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
                        priority={i === 0}
                    />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-black/30 flex items-center justify-center">
                    <div className="text-center text-white px-6">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                            Your Dependable Pharmacy
                        </h1>
                        <p className="text-xl md:text-3xl font-light drop-shadow-md">
                            Right Here, Right Now
                        </p>
                    </div>
                </div>
                {/* Slide indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {heroImages.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentSlide(i)}
                            className={`w-3 h-3 rounded-full transition ${i === currentSlide ? "bg-white" : "bg-white/50"}`}
                            aria-label={`Slide ${i + 1}`}
                        />
                    ))}
                </div>
            </section>

            {/* Quick Action Cards */}
            <section className="bg-gradient-to-r from-teal-700 to-teal-600">
                <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-6">
                    <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-white text-center hover:bg-white/20 transition border border-white/10 flex flex-col">
                        <h2 className="text-2xl font-bold mb-1">
                            Rx <span className="text-teal-200">Refills</span>
                        </h2>
                        <p className="text-teal-100 mb-4 text-sm flex-grow">
                            Rx refills make your life convenient with continuous medication supply.
                        </p>
                        <Link href="/refill" className="inline-block border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-teal-700 transition text-sm mt-auto">
                            Click Here »
                        </Link>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-white text-center hover:bg-white/20 transition border border-white/10 flex flex-col">
                        <h2 className="text-2xl font-bold mb-1">
                            Transfer <span className="text-teal-200">Prescription</span>
                        </h2>
                        <p className="text-teal-100 mb-4 text-sm flex-grow">
                            Transfer your prescriptions to Riverchase Pharmacy today!
                        </p>
                        <Link href="/transfer" className="inline-block border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-teal-700 transition text-sm mt-auto">
                            Click Here »
                        </Link>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-white text-center hover:bg-white/20 transition border border-white/10 flex flex-col">
                        <h2 className="text-2xl font-bold mb-1">
                            Free Home <span className="text-teal-200">Delivery</span>
                        </h2>
                        <p className="text-teal-100 mb-4 text-sm flex-grow">
                            No time to visit our store for prescription pickup? No problem! We deliver.
                        </p>
                        <Link href="/services" className="inline-block border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-teal-700 transition text-sm mt-auto">
                            Click Here »
                        </Link>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-white text-center hover:bg-white/20 transition border border-white/10 flex flex-col">
                        <h2 className="text-2xl font-bold mb-1">
                            Express <span className="text-teal-200">Clinic</span>
                        </h2>
                        <p className="text-teal-100 mb-4 text-sm flex-grow">
                            Walk-in clinic on site for quick and convenient care.
                        </p>
                        <Link href="/services" className="inline-block border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-teal-700 transition text-sm mt-auto">
                            Click Here »
                        </Link>
                    </div>
                </div>
            </section>

            {/* Welcome Section */}
            <section className="bg-gradient-to-b from-white to-teal-50/30">
                <div className="max-w-5xl mx-auto py-16 px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Welcome to <span className="text-teal-700">Riverchase Pharmacy</span>
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        We prioritize the entire family&apos;s health. We make sure that we render services that do not only
                        meet your expectations but also exceed them. These services are rendered by pharmacists who have the
                        expertise, qualifications, and experience in doing so. Our health products are safe, durable and
                        affordable. At Riverchase Pharmacy, you get the best things for your health at the best price.
                        Visit us today!
                    </p>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="bg-gradient-to-br from-teal-50 to-emerald-50">
                <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                            Our Mission <span className="text-teal-700">Statement</span>
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            It is the mission of Riverchase Pharmacy to promote a thriving community by ensuring the
                            good health of its fellow community members. We can make this mission possible by providing a
                            wide array of pharmacy services and a complete line of pharmacy products that will cater to
                            each member&apos;s specific health needs.
                        </p>
                        <Link
                            href="/about"
                            className="inline-block bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-800 transition"
                        >
                            About Us
                        </Link>
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src="/pharmacist.png"
                            alt="Pharmacist"
                            width={400}
                            height={400}
                            className="rounded-xl object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* Services We Offer */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Services <span className="text-teal-700">We Offer</span>
                        </h2>
                        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                            We are offering a broad range of pharmacy services that you can take advantage of. Our
                            experienced and friendly pharmacists are also ready to assist you.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                        {services.map((s) => (
                            <Link
                                key={s.title}
                                href={s.href}
                                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition border border-gray-100"
                            >
                                <div className="relative h-48 overflow-hidden bg-gray-50">
                                    <Image
                                        src={s.img}
                                        alt={s.title}
                                        fill
                                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-lg text-gray-900 mb-1">{s.title}</h3>
                                    <p className="text-gray-600 text-sm">{s.desc}</p>
                                    <span className="text-teal-700 font-semibold text-sm mt-3 inline-block group-hover:underline">
                                        Learn More »
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <Link
                            href="/services"
                            className="inline-block bg-teal-700 text-white px-10 py-3 rounded-lg font-semibold hover:bg-teal-800 transition"
                        >
                            View More Services
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
