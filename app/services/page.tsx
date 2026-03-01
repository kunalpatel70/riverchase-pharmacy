import { ClipboardDocumentCheckIcon, ShieldCheckIcon, BeakerIcon, TruckIcon, HeartIcon, ChatBubbleLeftRightIcon, CreditCardIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export default function Services() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-sky-700 to-cyan-600 text-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl text-sky-50 leading-relaxed">
                        Comprehensive pharmacy services designed with your health in mind
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="max-w-7xl mx-auto py-16 px-6">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Prescription Services */}
                    <div className="card">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <ClipboardDocumentCheckIcon className="w-7 h-7 text-sky-700" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-3 text-gray-900">Prescription Filling & Transfers</h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Fast, accurate prescription filling with most orders ready in 15 minutes. We accept transfers 
                                    from any pharmacy and work with all major insurance providers.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Same-day refills available</li>
                                    <li>• Automatic refill reminders</li>
                                    <li>• Easy online refill requests</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Immunizations */}
                    <div className="card">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <ShieldCheckIcon className="w-7 h-7 text-emerald-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-3 text-gray-900">Immunizations & Vaccines</h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Protect yourself and your family with our comprehensive immunization services. 
                                    Walk-ins welcome, no appointment necessary.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Flu shots (seasonal)</li>
                                    <li>• COVID-19 vaccines</li>
                                    <li>• Shingles, pneumonia, and more</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Medication Therapy Management */}
                    <div className="card">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <ChatBubbleLeftRightIcon className="w-7 h-7 text-purple-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-3 text-gray-900">Medication Therapy Management</h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Free comprehensive medication reviews with our pharmacists to optimize your therapy, 
                                    reduce side effects, and improve health outcomes.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Medication interaction checks</li>
                                    <li>• Dosage optimization</li>
                                    <li>• Side effect management</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* OTC Products */}
                    <div className="card">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <HeartIcon className="w-7 h-7 text-amber-500" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-3 text-gray-900">Over-the-Counter Products</h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Wide selection of OTC medications, vitamins, supplements, and health products. 
                                    Our pharmacists can help you choose the right products.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Pain relief & cold medicine</li>
                                    <li>• Vitamins & supplements</li>
                                    <li>• First aid & medical supplies</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Compounding */}
                    <div className="card">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <BeakerIcon className="w-7 h-7 text-cyan-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-3 text-gray-900">Compounding Services</h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Custom medication formulations tailored to your specific needs. Perfect for patients 
                                    with allergies, unique dosing requirements, or flavor preferences.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Custom dosage forms</li>
                                    <li>• Allergen-free formulations</li>
                                    <li>• Flavoring for children</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Delivery */}
                    <div className="card">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <TruckIcon className="w-7 h-7 text-rose-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-3 text-gray-900">Free Local Delivery</h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Can't make it to the pharmacy? We offer complimentary delivery service to your home 
                                    or workplace within our service area.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Same-day delivery available</li>
                                    <li>• Contactless delivery options</li>
                                    <li>• Delivery tracking updates</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Insurance */}
                    <div className="card">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <CreditCardIcon className="w-7 h-7 text-indigo-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-3 text-gray-900">Insurance & Billing</h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    We accept most insurance plans and work hard to ensure you get the best price. 
                                    Our team can help you navigate coverage and find savings programs.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• All major insurance accepted</li>
                                    <li>• Discount programs available</li>
                                    <li>• Price matching assistance</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Consultations */}
                    <div className="card">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <UserGroupIcon className="w-7 h-7 text-teal-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-3 text-gray-900">Health Consultations</h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Free one-on-one consultations with our licensed pharmacists. Get expert advice on 
                                    medications, health conditions, and wellness strategies.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Medication counseling</li>
                                    <li>• Health screenings</li>
                                    <li>• Wellness advice</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-sky-700 text-white py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Have Questions About Our Services?</h2>
                    <p className="text-xl text-sky-50 mb-8">
                        Our friendly team is here to help. Contact us today to learn more.
                    </p>
                    <a
                        href="/contact"
                        className="bg-white text-sky-700 px-8 py-3 rounded-lg font-bold inline-block hover:bg-sky-50 transition"
                    >
                        Contact Us
                    </a>
                </div>
            </section>
        </div>
    );
}
