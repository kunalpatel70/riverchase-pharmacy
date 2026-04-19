import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about Riverchase Pharmacy in Hoover, Alabama. Established with the health of the entire family in mind, our licensed pharmacists provide quality care and products.",
};

export default function About() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-teal-700 to-emerald-600 text-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-5xl mx-auto py-16 px-6">
                <div className="md:flex gap-8 mb-10">
                    <div className="md:w-1/3 mb-6 md:mb-0 flex-shrink-0">
                        <Image
                            src="/about-thumb.jpg"
                            alt="Pharmacist and customer smiling"
                            width={300}
                            height={200}
                            className="rounded-lg object-cover w-full"
                        />
                    </div>
                    <div>
                        <p className="text-teal-700 italic text-lg mb-4">
                            A Pharmacy That Cares for You and Your Family!
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Riverchase Pharmacy is established with the health of the entire family in mind. We
                            understand how great the impact of a healthy person is in ensuring the good health of his or
                            her entire family.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We provide health products and programs that will help you ensure your own health as well as
                            that of your loved ones. Every product that you see and buy in our store is thoroughly checked
                            so that each customer can be safe while looking after their health. At the same time, every
                            service we render is in line with a code of professional and moral ethics and worldwide
                            pharmacy standards.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Our pharmacists are licensed, experienced and qualified to assist you in your and your
                            family&apos;s journey towards maintaining good health.
                        </p>
                    </div>
                </div>

                {/* Mission */}
                <div className="bg-teal-50 border-l-4 border-teal-700 rounded-r-lg p-6 mb-10">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                        <u>Mission</u>
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        It is the mission of Riverchase Pharmacy to promote a thriving community by ensuring the good
                        health of its families. We can make this mission possible by providing a wide array of pharmacy
                        services and a complete line of pharmacy products that will cater to each member&apos;s specific
                        health needs.
                    </p>
                </div>

                <p className="text-gray-700 leading-relaxed text-lg">
                    Visit our pharmacy to find out how we can assist you with your pharmacy needs. You may also call us
                    at <strong className="text-teal-700">(205) 536-6014</strong> for further inquiries.
                </p>

                <div className="mt-8">
                    <Link
                        href="/contact"
                        className="inline-block bg-teal-700 text-white px-8 py-3 rounded font-semibold hover:bg-teal-800 transition"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
}
