import Link from "next/link";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">River Chase Pharmacy</h3>
                        <p className="text-sm leading-relaxed">
                            Your trusted neighborhood pharmacy providing personalized care and professional service since 2010.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-white transition">Our Services</Link></li>
                            <li><Link href="/refill" className="hover:text-white transition">Refill Prescription</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <MapPinIcon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                <span>123 River Chase Blvd<br />Orlando, FL 32801</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <PhoneIcon className="w-5 h-5 flex-shrink-0" />
                                <span>(407) 555-1234</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <EnvelopeIcon className="w-5 h-5 flex-shrink-0" />
                                <span>info@riverchasepharmacy.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Hours</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                                <ClockIcon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="font-medium text-white">Mon - Fri</p>
                                    <p>9:00 AM - 7:00 PM</p>
                                </div>
                            </li>
                            <li className="ml-7">
                                <p className="font-medium text-white">Saturday</p>
                                <p>9:00 AM - 5:00 PM</p>
                            </li>
                            <li className="ml-7">
                                <p className="font-medium text-white">Sunday</p>
                                <p>Closed</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
                    <p>© {new Date().getFullYear()} River Chase Pharmacy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
