"use client";

import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const RX_COUNT = 5;

export default function TransferPage() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        pharmacyName: "",
        pharmacyPhone: "",
        transferAll: false,
        medications: Array(RX_COUNT).fill(""),
        rxNumbers: Array(RX_COUNT).fill(""),
        notes: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };

    const handleArrayChange = (field: "medications" | "rxNumbers", index: number, value: string) => {
        const updated = [...form[field]];
        updated[index] = value;
        setForm({ ...form, [field]: updated });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        const res = await fetch("/api/transfer", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        setLoading(false);

        if (!res.ok) {
            alert("Something went wrong. Please try again.");
            return;
        }

        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-teal-50/20 py-16 px-6">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircleIcon className="w-12 h-12 text-green-600" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            Transfer Request Submitted!
                        </h1>
                        <p className="text-lg text-gray-700 mb-6">
                            Thank you, {form.firstName}! We've received your prescription transfer request.
                        </p>
                        <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mb-8 text-left">
                            <h3 className="font-semibold text-gray-900 mb-3">What happens next?</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-teal-700 font-bold">1.</span>
                                    <span>Our pharmacist will contact your current pharmacy to initiate the transfer</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-teal-700 font-bold">2.</span>
                                    <span>You'll receive a confirmation call at {form.phone}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-teal-700 font-bold">3.</span>
                                    <span>Your prescriptions will be ready at Riverchase Pharmacy</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-teal-50/20 py-12 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">
                        Transfer Your Prescriptions
                    </h1>
                    <p className="text-lg text-gray-600">
                        Fill out the form below and we'll handle the rest
                    </p>
                </div>

                <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-8">
                    <p className="text-sm text-teal-900">
                        <span className="font-semibold">Easy transfer:</span> We'll contact your current pharmacy directly to transfer your prescriptions.
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
                                <input name="firstName" required value={form.firstName} onChange={handleChange} className="input" placeholder="John" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Last Name <span className="text-red-500">*</span>
                                </label>
                                <input name="lastName" required value={form.lastName} onChange={handleChange} className="input" placeholder="Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Date of Birth <span className="text-red-500">*</span>
                                </label>
                                <input name="dateOfBirth" type="date" required value={form.dateOfBirth} onChange={handleChange} className="input" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input name="phone" type="tel" required value={form.phone} onChange={handleChange} className="input" placeholder="(205) 555-0000" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Address <span className="text-red-500">*</span>
                                </label>
                                <input name="address" required value={form.address} onChange={handleChange} className="input" placeholder="123 Main St" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    City <span className="text-red-500">*</span>
                                </label>
                                <input name="city" required value={form.city} onChange={handleChange} className="input" placeholder="Hoover" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        State <span className="text-red-500">*</span>
                                    </label>
                                    <input name="state" required value={form.state} onChange={handleChange} className="input" placeholder="AL" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Zip Code <span className="text-red-500">*</span>
                                    </label>
                                    <input name="zip" required value={form.zip} onChange={handleChange} className="input" placeholder="35244" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Current Pharmacy */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
                            Current Pharmacy Information
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Pharmacy Name <span className="text-red-500">*</span>
                                </label>
                                <input name="pharmacyName" required value={form.pharmacyName} onChange={handleChange} className="input" placeholder="Current pharmacy name" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Pharmacy Phone <span className="text-red-500">*</span>
                                </label>
                                <input name="pharmacyPhone" type="tel" required value={form.pharmacyPhone} onChange={handleChange} className="input" placeholder="(205) 555-0000" />
                            </div>
                        </div>
                    </section>

                    {/* Prescriptions to Transfer */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
                            Prescriptions to be Transferred
                        </h2>

                        <p className="text-sm text-gray-600 mb-4">
                            If you would like to transfer all prescriptions, simply check the box below.
                        </p>

                        <label className="flex items-center gap-3 mb-6 cursor-pointer">
                            <input
                                type="checkbox"
                                name="transferAll"
                                checked={form.transferAll}
                                onChange={handleChange}
                                className="w-5 h-5 rounded border-gray-300 text-teal-700 focus:ring-teal-500"
                            />
                            <span className="font-semibold text-gray-900">Transfer all my prescriptions</span>
                        </label>

                        {!form.transferAll && (
                            <>
                                <p className="text-sm text-gray-600 mb-4">
                                    If you would like to selectively transfer your prescriptions, list them below.
                                </p>

                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="text-left text-gray-700 font-semibold border-b-2 border-gray-200">
                                                <th className="pb-3 pr-4 w-8"></th>
                                                <th className="pb-3 pr-4">Medication Name</th>
                                                <th className="pb-3">Rx # from Current Pharmacy</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Array.from({ length: RX_COUNT }).map((_, i) => (
                                                <tr key={i} className="border-b border-gray-100">
                                                    <td className="py-3 pr-4 font-semibold text-gray-500">Rx{i + 1}</td>
                                                    <td className="py-3 pr-4">
                                                        <input
                                                            className="input"
                                                            placeholder="Enter medication name"
                                                            value={form.medications[i]}
                                                            onChange={(e) => handleArrayChange("medications", i, e.target.value)}
                                                        />
                                                    </td>
                                                    <td className="py-3">
                                                        <input
                                                            className="input"
                                                            placeholder="Rx #"
                                                            value={form.rxNumbers[i]}
                                                            onChange={(e) => handleArrayChange("rxNumbers", i, e.target.value)}
                                                        />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </>
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

                    {/* Submit */}
                    <div className="pt-6 border-t-2 border-gray-200">
                        <button type="submit" disabled={loading} className="btn-secondary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed">
                            {loading ? (
                                <span className="flex items-center justify-center gap-3">
                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Processing...
                                </span>
                            ) : (
                                "Submit Transfer Request"
                            )}
                        </button>
                        <p className="text-center text-sm text-gray-600 mt-4">
                            By submitting, you agree to our terms and privacy policy
                        </p>
                    </div>
                </form>

                <div className="mt-8 bg-white rounded-lg shadow p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-3">Need Help?</h3>
                    <p className="text-gray-700 mb-4">
                        If you have questions or need assistance with your transfer request, please contact us:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="tel:2055366014" className="text-teal-700 hover:text-teal-800 font-semibold">
                            📞 (205) 536-6014
                        </a>
                        <a href="mailto:riverchasepharmacy@gmail.com" className="text-teal-700 hover:text-teal-800 font-semibold">
                            ✉️ riverchasepharmacy@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
