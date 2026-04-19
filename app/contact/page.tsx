import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Contact Riverchase Pharmacy at (205) 536-6014. Located at 3075 John Hawkins Pkwy Suite G, Hoover, AL 35244. Open Mon-Fri 9am-6pm, Sat 9am-1pm.",
};

export default function Contact() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-teal-700 to-emerald-600 text-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
                    <p className="text-xl text-teal-50 leading-relaxed">
                        We're here to help. Reach out with any questions or concerns.
                    </p>
                </div>
            </section>

            {/* Contact Info */}
            <section className="max-w-6xl mx-auto py-16 px-6">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Cards */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
                        
                        <div className="card">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <PhoneIcon className="w-6 h-6 text-teal-700" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900 mb-1">Phone</h3>
                                    <p className="text-gray-700 mb-2">(205) 536-6014</p>
                                    <p className="text-gray-700 mb-2">Fax: (205) 536-6018</p>
                                    <p className="text-sm text-gray-600">Call us during business hours</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <EnvelopeIcon className="w-6 h-6 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900 mb-1">Email</h3>
                                    <p className="text-gray-700 mb-2">riverchasepharmacy@gmail.com</p>
                                    <p className="text-sm text-gray-600">We'll respond within 24 hours</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPinIcon className="w-6 h-6 text-amber-500" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900 mb-1">Location</h3>
                                    <p className="text-gray-700 mb-2">
                                        3075 John Hawkins Pkwy<br />
                                        Suite G<br />
                                        Hoover, AL 35244
                                    </p>
                                    <p className="text-sm text-gray-600">Free parking available</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <ClockIcon className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Hours</h3>
                                    <div className="text-gray-700 space-y-1">
                                        <p className="flex justify-between">
                                            <span className="font-medium">Monday - Friday:</span>
                                            <span>8:30 AM - 4:30 PM</span>
                                        </p>
                                        <p className="flex justify-between">
                                            <span className="font-medium">Saturday:</span>
                                            <span>8:30 AM - 2:30 PM</span>
                                        </p>
                                        <p className="flex justify-between">
                                            <span className="font-medium">Sunday:</span>
                                            <span>Closed</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="input"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="input"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    className="input"
                                    placeholder="(205) 555-0000"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="input"
                                    placeholder="How can we help?"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    required
                                    rows={5}
                                    className="input resize-none"
                                    placeholder="Tell us more about your inquiry..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn-primary w-full"
                            >
                                Send Message
                            </button>

                            <p className="text-sm text-gray-600 text-center">
                                We'll get back to you within 24 hours
                            </p>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Visit Us</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.8!2d-86.8105!3d33.3765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88891b1f5c3e1b3d%3A0x0!2s3075+John+Hawkins+Pkwy+Suite+G%2C+Hoover%2C+AL+35244!5e0!3m2!1sen!2sus!4v1700000000000"
                        className="w-full h-96 rounded-lg border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Riverchase Pharmacy Location"
                    />
                    <p className="text-center text-gray-600 mt-4">
                        Located in the Riverchase Shopping Center with ample free parking
                    </p>
                </div>
            </section>

            {/* Emergency Notice */}
            <section className="bg-red-50 border-l-4 border-red-500 py-8">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-xl">!</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-red-900 mb-2">Medical Emergency?</h3>
                            <p className="text-red-800">
                                If you're experiencing a medical emergency, please call 911 or visit your nearest emergency room immediately. 
                                For urgent prescription questions after hours, call us at (205) 536-6014.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
