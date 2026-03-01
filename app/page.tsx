import Link from "next/link";
import { ClockIcon, PhoneIcon, MapPinIcon, HeartIcon, ShieldCheckIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
      <div>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-sky-700 via-sky-600 to-cyan-600 text-white">
          <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Your Health, Our Priority
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-sky-50 leading-relaxed">
                Personalized pharmacy care with a smile. Fast prescriptions, expert advice, and friendly service you can trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    href="/refill"
                    className="bg-white text-sky-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-sky-50 transition shadow-lg text-center cursor-pointer"
                >
                  Refill Prescription
                </Link>
                <Link
                    href="/contact"
                    className="bg-sky-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-sky-900 transition border-2 border-sky-700 text-center cursor-pointer"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          
          {/* Decorative wave */}
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
            </svg>
          </div>
        </section>

        {/* Quick Info Bar */}
        <section className="bg-white py-6 border-b">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <PhoneIcon className="w-6 h-6 text-sky-700" />
                <div>
                  <p className="text-sm text-gray-600">Call Us</p>
                  <p className="font-semibold text-gray-900">(407) 555-1234</p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <ClockIcon className="w-6 h-6 text-sky-700" />
                <div>
                  <p className="text-sm text-gray-600">Hours</p>
                  <p className="font-semibold text-gray-900">Mon-Fri: 9AM - 7PM</p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MapPinIcon className="w-6 h-6 text-sky-700" />
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-semibold text-gray-900">123 River Chase Blvd</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="max-w-7xl mx-auto py-20 px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive pharmacy services tailored to your health needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card group">
              <div className="w-14 h-14 bg-sky-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-700 transition">
                <HeartIcon className="w-8 h-8 text-sky-700 group-hover:text-white transition" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Prescription Services</h3>
              <p className="text-gray-600 leading-relaxed">
                Fast and reliable prescription filling, transfers, and refills. We work with all major insurance providers.
              </p>
            </div>

            <div className="card group">
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition">
                <ShieldCheckIcon className="w-8 h-8 text-emerald-600 group-hover:text-white transition" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Immunizations</h3>
              <p className="text-gray-600 leading-relaxed">
                Flu shots, COVID-19 vaccines, and other immunizations available. Walk-ins welcome, no appointment needed.
              </p>
            </div>

            <div className="card group">
              <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500 transition">
                <UserGroupIcon className="w-8 h-8 text-amber-500 group-hover:text-white transition" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Health Consultations</h3>
              <p className="text-gray-600 leading-relaxed">
                Free consultations with our licensed pharmacists. Get expert advice on medications and health concerns.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="text-sky-700 font-semibold hover:text-sky-800 inline-flex items-center gap-2">
              View All Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose River Chase?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're more than just a pharmacy—we're your healthcare partner
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-sky-700 mb-2">15+</div>
                <p className="text-gray-600 font-medium">Years of Service</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-sky-700 mb-2">10K+</div>
                <p className="text-gray-600 font-medium">Happy Customers</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-sky-700 mb-2">24hr</div>
                <p className="text-gray-600 font-medium">Refill Processing</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-sky-700 mb-2">100%</div>
                <p className="text-gray-600 font-medium">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-sky-700 text-white py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Refill Your Prescription?</h2>
            <p className="text-xl text-sky-50 mb-8">
              It only takes a minute. Get started now and we'll have it ready for you.
            </p>
            <Link
                href="/refill"
                className="bg-white text-sky-700 px-10 py-4 rounded-lg font-bold text-lg inline-block hover:bg-sky-50 transition shadow-lg"
            >
              Start Your Refill
            </Link>
          </div>
        </section>
      </div>
  );
}
