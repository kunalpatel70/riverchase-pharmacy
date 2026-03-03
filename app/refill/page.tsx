"use client";'use client';

import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function RefillPage() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        dateOfBirth: "",
        rxNumbers: [""],
        pickupMethod: "pickup",
        deliveryAddress: "",
        preferredTime: "",
        notes: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRxChange = (index: number, value: string) => {
        const updated = [...form.rxNumbers];
        updated[index] = value;
        setForm({ ...form, rxNumbers: updated });
    };

    const addRxField = () => {
        setForm({ ...form, rxNumbers: [...form.rxNumbers, ""] });
    };

    const removeRxField = (index: number) => {
        const updated = form.rxNumbers.filter((_, i) => i !== index);
        setForm({ ...form, rxNumbers: updated });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        console.log("Refill Request:", form);
        setLoading(false);
        setSubmitted(true);
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-gray-50 py-16 px-6">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircleIcon className="w-12 h-12 text-green-600" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            Refill Request Submitted!
                        </h1>
                        <p className="text-lg text-gray-700 mb-6">
                            Thank you, {form.firstName}! We've received your prescription refill request.
                        </p>
                        <div className="bg-sky-50 border border-sky-200 rounded-lg p-6 mb-8 text-left">
                            <h3 className="font-semibold text-gray-900 mb-3">What happens next?</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-sky-700 font-bold">1.</span>
                                    <span>We'll process your request within 2-4 hours</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-sky-700 font-bold">2.</span>
                                    <span>You'll receive a confirmation call or text at {form.phone}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-sky-700 font-bold">3.</span>
                                    <span>
                                        {form.pickupMethod === "pickup" 
                                            ? "Your prescription will be ready for pickup" 
                                            : "We'll deliver your prescription to your address"}
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => {
                                    setSubmitted(false);
                                    setForm({
                                        firstName: "",
                                        lastName: "",
                                        phone: "",
                                        email: "",
                                        dateOfBirth: "",
                                        rxNumbers: [""],
                                        pickupMethod: "pickup",
                                        deliveryAddress: "",
                                        preferredTime: "",
                                        notes: "",
                                    });
                                }}
                                className="btn-primary"
                            >
                                Submit Another Refill
                            </button>
                            <a href="/" className="btn-secondary">
                                Return Home
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">
                        Prescription Refill Request
                    </h1>
                    <p className="text-lg text-gray-600">
                        Fill out the form below and we'll have your prescription ready in no time
                    </p>
                </div>

                {/* Info Banner */}
                <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 mb-8">
                    <p className="text-sm text-sky-900">
                        <span className="font-semibold">Quick turnaround:</span> Most refills are ready within 2-4 hours. 
                        We'll contact you when your prescription is ready.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 md:p-10 space-y-8">
                    {/* Patient Information */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
                            Patient Information
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    First Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    name="firstName"
                                    required
                                    value={form.firstName}
                                    onChange={handleChange}
                                    className="input"
                                    placeholder="John"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Last Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    name="lastName"
                                    required
                                    value={form.lastName}
                                    onChange={handleChange}
                                    className="input"
                                    placeholder="Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    name="phone"
                                    type="tel"
                                    required
                                    value={form.phone}
                                    onChange={handleChange}
                                    className="input"
                                    placeholder="(407) 555-0000"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="input"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Date of Birth <span className="text-red-500">*</span>
                                </label>
                                <input
                                    name="dateOfBirth"
                                    type="date"
                                    required
                                    value={form.dateOfBirth}
                                    onChange={handleChange}
                                    className="input"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Prescription Numbers */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
                            Prescription Numbers
                        </h2>

                        <p className="text-sm text-gray-600 mb-4">
                            Enter your prescription number(s) found on your medication bottle label
                        </p>

                        <div className="space-y-3">
                            {form.rxNumbers.map((rx, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <span className="text-sm font-semibold text-gray-700 w-8">
                                        #{i + 1}
                                    </span>
                                    <input
                                        className="input flex-1"
                                        placeholder="Enter Rx number (e.g., 123456)"
                                        value={rx}
                                        required={i === 0}
                                        onChange={(e) => handleRxChange(i, e.target.value)}
                                    />
                                    {form.rxNumbers.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeRxField(i)}
                                            className="text-red-600 hover:text-red-700 font-semibold text-sm px-3 py-2"
                                        >
                                            Remove
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={addRxField}
                            className="mt-4 text-sky-700 hover:text-sky-800 font-semibold text-sm flex items-center gap-2"
                        >
                            <span className="text-xl">+</span> Add Another Prescription
                        </button>
                    </section>

                    {/* Pickup or Delivery */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
                            Pickup or Delivery?
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            <label className="relative cursor-pointer">
                                <input
                                    type="radio"
                                    name="pickupMethod"
                                    value="pickup"
                                    checked={form.pickupMethod === "pickup"}
                                    onChange={handleChange}
                                    className="peer sr-only"
                                />
                                <div className="border-2 border-gray-300 rounded-lg p-6 peer-checked:border-sky-700 peer-checked:bg-sky-50 transition">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
                                            form.pickupMethod === "pickup" 
                                                ? "border-sky-700 bg-sky-700" 
                                                : "border-gray-400 bg-white"
                                        }`}>
                                            {form.pickupMethod === "pickup" && (
                                                <div className="w-2 h-2 bg-white rounded-full" />
                                            )}
                                        </div>
                                        <h3 className="font-bold text-lg text-gray-900">Pickup</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 ml-8">
                                        Pick up at our pharmacy location
                                    </p>
                                </div>
                            </label>

                            <label className="relative cursor-pointer">
                                <input
                                    type="radio"
                                    name="pickupMethod"
                                    value="delivery"
                                    checked={form.pickupMethod === "delivery"}
                                    onChange={handleChange}
                                    className="peer sr-only"
                                />
                                <div className="border-2 border-gray-300 rounded-lg p-6 peer-checked:border-sky-700 peer-checked:bg-sky-50 transition">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
                                            form.pickupMethod === "delivery" 
                                                ? "border-sky-700 bg-sky-700" 
                                                : "border-gray-400 bg-white"
                                        }`}>
                                            {form.pickupMethod === "delivery" && (
                                                <div className="w-2 h-2 bg-white rounded-full" />
                                            )}
                                        </div>
                                        <h3 className="font-bold text-lg text-gray-900">Delivery</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 ml-8">
                                        Free local delivery to your address
                                    </p>
                                </div>
                            </label>
                        </div>

                        {form.pickupMethod === "delivery" && (
                            <div className="mt-6 space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Delivery Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        name="deliveryAddress"
                                        required={form.pickupMethod === "delivery"}
                                        value={form.deliveryAddress}
                                        onChange={handleChange}
                                        className="input"
                                        placeholder="123 Main St, Orlando, FL 32801"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Preferred Delivery Time
                                    </label>
                                    <select
                                        name="preferredTime"
                                        value={form.preferredTime}
                                        onChange={handleChange}
                                        className="input"
                                    >
                                        <option value="">No preference</option>
                                        <option value="morning">Morning (9 AM - 12 PM)</option>
                                        <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                                        <option value="evening">Evening (5 PM - 7 PM)</option>
                                    </select>
                                </div>
                            </div>
                        )}
                    </section>

                    {/* Additional Notes */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
                            Additional Information
                        </h2>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Special Instructions or Notes
                            </label>
                            <textarea
                                name="notes"
                                value={form.notes}
                                onChange={handleChange}
                                rows={4}
                                className="input resize-none"
                                placeholder="Any special instructions, questions, or concerns? (Optional)"
                            />
                        </div>
                    </section>

                    {/* Submit Button */}
                    <div className="pt-6 border-t-2 border-gray-200">
                        <button
                            type="submit"
                            disabled={loading}
                            className="btn-secondary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-3">
                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Processing...
                                </span>
                            ) : (
                                "Submit Refill Request"
                            )}
                        </button>
                        <p className="text-center text-sm text-gray-600 mt-4">
                            By submitting, you agree to our terms and privacy policy
                        </p>
                    </div>
                </form>

                {/* Help Section */}
                <div className="mt-8 bg-white rounded-lg shadow p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-3">Need Help?</h3>
                    <p className="text-gray-700 mb-4">
                        If you have questions or need assistance with your refill request, please contact us:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="tel:4075551234" className="text-sky-700 hover:text-sky-800 font-semibold">
                            📞 (407) 555-1234
                        </a>
                        <a href="mailto:info@riverchasepharmacy.com" className="text-sky-700 hover:text-sky-800 font-semibold">
                            ✉️ info@riverchasepharmacy.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
