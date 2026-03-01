import { HeartIcon, UserGroupIcon, ClockIcon, ShieldCheckIcon, BeakerIcon, TruckIcon } from "@heroicons/react/24/outline";

export default function About() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-sky-700 to-cyan-600 text-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About River Chase Pharmacy</h1>
                    <p className="text-xl text-sky-50 leading-relaxed">
                        Serving our community with compassionate care and professional excellence since 2010
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-5xl mx-auto py-16 px-6">
                <div className="prose prose-lg max-w-none">
                    <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            River Chase Pharmacy was founded with a simple mission: to provide personalized healthcare 
                            services that put people first. For over 15 years, we've been a trusted partner in our 
                            community's health and wellness journey.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Unlike large chain pharmacies, we take the time to know our patients by name. Our experienced 
                            pharmacists are always available to answer questions, provide medication counseling, and ensure 
                            you get the most from your prescriptions.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We believe in building lasting relationships with our patients, understanding their unique health 
                            needs, and providing care that goes beyond just filling prescriptions.
                        </p>
                    </div>

                    {/* Values */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-sky-50 p-6 rounded-lg">
                                <HeartIcon className="w-10 h-10 text-sky-700 mb-4" />
                                <h3 className="font-bold text-xl mb-2 text-gray-900">Compassionate Care</h3>
                                <p className="text-gray-700">
                                    We treat every patient with empathy, respect, and genuine concern for their wellbeing.
                                </p>
                            </div>
                            <div className="bg-emerald-50 p-6 rounded-lg">
                                <ShieldCheckIcon className="w-10 h-10 text-emerald-600 mb-4" />
                                <h3 className="font-bold text-xl mb-2 text-gray-900">Professional Excellence</h3>
                                <p className="text-gray-700">
                                    Our licensed pharmacists stay current with the latest healthcare practices and medications.
                                </p>
                            </div>
                            <div className="bg-amber-50 p-6 rounded-lg">
                                <UserGroupIcon className="w-10 h-10 text-amber-500 mb-4" />
                                <h3 className="font-bold text-xl mb-2 text-gray-900">Community Focus</h3>
                                <p className="text-gray-700">
                                    We're proud to be part of this community and committed to its health and prosperity.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* What Sets Us Apart */}
                    <div className="bg-gray-50 rounded-lg p-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Sets Us Apart</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <ClockIcon className="w-8 h-8 text-sky-700 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">Fast Service</h3>
                                    <p className="text-gray-700">
                                        Most prescriptions filled within 15 minutes. We value your time as much as you do.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <BeakerIcon className="w-8 h-8 text-sky-700 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">Compounding Services</h3>
                                    <p className="text-gray-700">
                                        Custom medication formulations tailored to your specific needs and preferences.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <TruckIcon className="w-8 h-8 text-sky-700 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">Free Delivery</h3>
                                    <p className="text-gray-700">
                                        Complimentary local delivery service for patients who can't make it to the pharmacy.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <UserGroupIcon className="w-8 h-8 text-sky-700 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">Personal Attention</h3>
                                    <p className="text-gray-700">
                                        One-on-one consultations with pharmacists who know your health history and medications.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-sky-700 text-white py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Experience the River Chase Difference</h2>
                    <p className="text-xl text-sky-50 mb-8">
                        Visit us today and discover why our patients choose us for their pharmacy needs.
                    </p>
                    <a
                        href="/contact"
                        className="bg-white text-sky-700 px-8 py-3 rounded-lg font-bold inline-block hover:bg-sky-50 transition"
                    >
                        Get in Touch
                    </a>
                </div>
            </section>
        </div>
    );
}
