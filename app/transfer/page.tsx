"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const RX_COUNT = 5;

export default function TransferPage() {
    const [form, setForm] = useState({
        firstName: "", lastName: "", dateOfBirth: "", phone: "",
        address: "", city: "", state: "", zip: "",
        pharmacyName: "", pharmacyPhone: "",
        transferAll: false,
        medications: Array(RX_COUNT).fill(""),
        rxNumbers: Array(RX_COUNT).fill(""),
        notes: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const target = e.target as HTMLInputElement;
        const { name, value, type, checked } = target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };

    const handleArrayChange = (field: "medications" | "rxNumbers", index: number, value: string) => {
        const updated = [...form[field]];
        updated[index] = value;
        setForm({ ...form, [field]: updated });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
            <div className="bg-cream min-h-[70vh] py-20 px-6">
                <div className="max-w-2xl mx-auto">
                    <div className="surface-panel bg-cream p-8 md:p-12">
                        <CheckCircleIcon className="w-10 h-10 text-sage" />
                        <p className="eyebrow mt-5">Received</p>
                        <h1 className="display-md text-ink mt-3">
                            Thanks, {form.firstName || "there"}. Your transfer is in motion.
                        </h1>
                        <div className="mt-8 hairline-t pt-6 space-y-3 text-ink-soft">
                            <div className="flex gap-4">
                                <span className="font-display text-sm text-ink-mute tabular-nums">01</span>
                                <span>Our pharmacist will contact your current pharmacy to initiate the transfer.</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="font-display text-sm text-ink-mute tabular-nums">02</span>
                                <span>You&apos;ll receive a confirmation call at <span className="text-ink tabular-nums">{form.phone}</span>.</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="font-display text-sm text-ink-mute tabular-nums">03</span>
                                <span>Your prescriptions will be ready at Riverchase — pickup or free delivery.</span>
                            </div>
                        </div>
                        <div className="mt-10">
                            <Link href="/" className="btn btn-primary">Back home</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            {/* Page head */}
            <section className="bg-cream hairline-b">
                <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 md:pt-24 md:pb-16 grid lg:grid-cols-12 gap-10 items-end rise-in">
                    <div className="lg:col-span-7">
                        <p className="eyebrow kicker-rule mb-5">Transfer a prescription</p>
                        <h1 className="display-xl text-ink">We&apos;ll handle the handoff.</h1>
                    </div>
                    <div className="lg:col-span-4 lg:col-start-9">
                        <p className="text-ink-soft text-lg leading-relaxed">
                            Fill this out and we&apos;ll call your current pharmacy directly — no
                            awkward phone calls, no paperwork on your end.
                        </p>
                    </div>
                </div>
            </section>

            {/* Form */}
            <section className="bg-cream">
                <div className="max-w-4xl mx-auto px-6 py-16">
                    <form onSubmit={handleSubmit} className="space-y-14">
                        {/* Patient */}
                        <section>
                            <div className="flex items-baseline gap-4 mb-8 hairline-b pb-4">
                                <span className="font-display text-sm text-ink-mute tabular-nums">01</span>
                                <h2 className="font-display text-2xl text-ink">Patient information</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <Field label="First name" required>
                                    <input name="firstName" required value={form.firstName} onChange={handleChange} className="input" placeholder="Jane" />
                                </Field>
                                <Field label="Last name" required>
                                    <input name="lastName" required value={form.lastName} onChange={handleChange} className="input" placeholder="Doe" />
                                </Field>
                                <Field label="Date of birth" required>
                                    <input name="dateOfBirth" type="date" required value={form.dateOfBirth} onChange={handleChange} className="input" />
                                </Field>
                                <Field label="Phone" required>
                                    <input name="phone" type="tel" required value={form.phone} onChange={handleChange} className="input" placeholder="(205) 555-0000" />
                                </Field>
                                <div className="md:col-span-2">
                                    <Field label="Address" required>
                                        <input name="address" required value={form.address} onChange={handleChange} className="input" placeholder="123 Main St" />
                                    </Field>
                                </div>
                                <Field label="City" required>
                                    <input name="city" required value={form.city} onChange={handleChange} className="input" placeholder="Hoover" />
                                </Field>
                                <div className="grid grid-cols-2 gap-4">
                                    <Field label="State" required>
                                        <input name="state" required value={form.state} onChange={handleChange} className="input" placeholder="AL" />
                                    </Field>
                                    <Field label="Zip" required>
                                        <input name="zip" required value={form.zip} onChange={handleChange} className="input" placeholder="35244" />
                                    </Field>
                                </div>
                            </div>
                        </section>

                        {/* Current pharmacy */}
                        <section>
                            <div className="flex items-baseline gap-4 mb-8 hairline-b pb-4">
                                <span className="font-display text-sm text-ink-mute tabular-nums">02</span>
                                <h2 className="font-display text-2xl text-ink">Your current pharmacy</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <Field label="Pharmacy name" required>
                                    <input name="pharmacyName" required value={form.pharmacyName} onChange={handleChange} className="input" placeholder="Current pharmacy name" />
                                </Field>
                                <Field label="Pharmacy phone" required>
                                    <input name="pharmacyPhone" type="tel" required value={form.pharmacyPhone} onChange={handleChange} className="input" placeholder="(205) 555-0000" />
                                </Field>
                            </div>
                        </section>

                        {/* Prescriptions */}
                        <section>
                            <div className="flex items-baseline gap-4 mb-8 hairline-b pb-4">
                                <span className="font-display text-sm text-ink-mute tabular-nums">03</span>
                                <h2 className="font-display text-2xl text-ink">Prescriptions to transfer</h2>
                            </div>

                            <label className="flex items-center gap-3 mb-8 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="transferAll"
                                    checked={form.transferAll}
                                    onChange={handleChange}
                                    className="w-4 h-4 accent-[var(--ink)]"
                                />
                                <span className="text-ink">Transfer <em className="italic">all</em> my prescriptions.</span>
                            </label>

                            {!form.transferAll && (
                                <div className="space-y-3">
                                    <p className="text-sm text-ink-soft">
                                        Otherwise, list each medication you&apos;d like to move.
                                    </p>
                                    <div className="grid grid-cols-[auto_1fr_1fr] gap-3 items-center text-xs uppercase tracking-[0.14em] text-ink-mute pb-2 hairline-b">
                                        <span className="w-12 text-center">Rx</span>
                                        <span>Medication</span>
                                        <span>Rx #</span>
                                    </div>
                                    {Array.from({ length: RX_COUNT }).map((_, i) => (
                                        <div key={i} className="grid grid-cols-[auto_1fr_1fr] gap-3 items-center">
                                            <span className="font-display text-sm text-ink-mute tabular-nums w-12 text-center">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            <input
                                                className="input"
                                                placeholder="Medication name"
                                                value={form.medications[i]}
                                                onChange={(e) => handleArrayChange("medications", i, e.target.value)}
                                            />
                                            <input
                                                className="input"
                                                placeholder="Rx #"
                                                value={form.rxNumbers[i]}
                                                onChange={(e) => handleArrayChange("rxNumbers", i, e.target.value)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>

                        {/* Notes */}
                        <section>
                            <div className="flex items-baseline gap-4 mb-8 hairline-b pb-4">
                                <span className="font-display text-sm text-ink-mute tabular-nums">04</span>
                                <h2 className="font-display text-2xl text-ink">Anything else?</h2>
                            </div>
                            <Field label="Special instructions (optional)">
                                <textarea
                                    name="notes"
                                    value={form.notes}
                                    onChange={handleChange}
                                    rows={4}
                                    className="input resize-none"
                                    placeholder="Allergies, questions, or notes for the pharmacist."
                                />
                            </Field>
                        </section>

                        {/* Submit */}
                        <div className="hairline-t pt-8">
                            <button
                                type="submit"
                                disabled={loading}
                                className="btn btn-primary w-full py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <span className="flex items-center gap-3">
                                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Submitting…
                                    </span>
                                ) : (
                                    <>
                                        Submit transfer request
                                        <ArrowRightIcon className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                            <p className="text-center text-xs text-ink-mute mt-4">
                                By submitting, you agree to our terms and privacy policy.
                            </p>
                        </div>
                    </form>

                    {/* Help */}
                    <div className="mt-16 hairline-t pt-8">
                        <p className="eyebrow mb-4">Need a hand?</p>
                        <p className="text-ink-soft mb-5 max-w-lg">
                            Our team is happy to help. Call or email — we&apos;ll pick up.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <a href="tel:2055366014" className="link-underline inline-flex items-center gap-2 text-ink">
                                <PhoneIcon className="w-4 h-4 text-sage" />
                                <span className="tabular-nums">(205) 536-6014</span>
                            </a>
                            <a href="mailto:riverchasepharmacy@gmail.com" className="link-underline inline-flex items-center gap-2 text-ink">
                                <EnvelopeIcon className="w-4 h-4 text-sage" />
                                riverchasepharmacy@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function Field({
    label,
    required,
    children,
}: {
    label: string;
    required?: boolean;
    children: React.ReactNode;
}) {
    return (
        <div>
            <label className="block text-xs uppercase tracking-[0.14em] text-ink-soft mb-2">
                {label}
                {required && <span style={{ color: "var(--terracotta)" }}> *</span>}
            </label>
            {children}
        </div>
    );
}
