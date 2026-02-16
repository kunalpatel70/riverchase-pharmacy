import Link from "next/link";

export default function Home() {
  return (
      <div>
        {/* Hero Section */}
        <section className="bg-blue-600 text-white text-center py-20">
          <h1 className="text-4xl font-bold mb-4">
            Your Trusted Neighborhood Pharmacy
          </h1>

          <p className="text-lg mb-6">
            Personalized care. Fast prescriptions. Friendly service.
          </p>

          <Link
              href="/refill"
              className="bg-white text-blue-700 px-6 py-3 rounded font-semibold inline-block hover:bg-gray-100 transition"
          >
            Refill Prescription
          </Link>
        </section>

        {/* Services Preview Section */}
        <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-8">
          <div className="shadow p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">Prescription Services</h3>
            <p>Fast and reliable prescription filling and transfers.</p>
          </div>

          <div className="shadow p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">Immunizations</h3>
            <p>Flu shots and other vaccines available.</p>
          </div>

          <div className="shadow p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">Health Consultations</h3>
            <p>Speak with our licensed pharmacists anytime.</p>
          </div>
        </section>
      </div>
  );
}
