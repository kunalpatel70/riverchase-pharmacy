"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const res = await fetch("/api/refill", {
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
                            Thanks, {form.firstName || "there"}. Your refill request is in.
                        </h1>
                        <div className="mt-8 hairline-t pt-6 space-y-3 text-ink-soft">
                            <div className="flex gap-4">
                                <span className="font-display text-sm text-ink-mute tabular-nums">01</span>
                                <span>We&apos;ll process your request within 2–4 hours during business hours.</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="font-display text-sm text-ink-mute tabular-nums">02</span>
                                <span>Look for a confirmation call or text at <span className="text-ink tabular-nums">{form.phone}</span>.</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="font-display text-sm text-ink-mute tabular-nums">03</span>
                                <span>
                                    {form.pickupMethod === "pickup"
                                        ? "Your prescription will be ready for pickup at the shop."
                                        : "We'll deliver your prescription to the address you provided."}
                                </span>
                            </div>
                        </div>
                        <div className="mt-10 flex flex-wrap gap-3">
                            <button
                                onClick={() => {
                                    setSubmitted(false);
                                    setForm({
                                        firstName: "", lastName: "", phone: "", email: "",
                                        dateOfBirth: "", rxNumbers: [""], pickupMethod: "pickup",
                                        deliveryAddress: "", preferredTime: "", notes: "",
                                    });
                                }}
                                className="btn btn-primary"
                            >
                                Submit another refill
                            </button>
                            <Link href="/" className="btn btn-ghost">
                                Back home
                            </Link>
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
                        <p className="eyebrow kicker-rule mb-5">Refill prescription</p>
                        <h1 className="display-xl text-ink">Refill in a minute. Ready in a few hours.</h1>
                    </div>
                    <div className="lg:col-span-4 lg:col-start-9">
                        <p className="text-ink-soft text-lg leading-relaxed">
                            Most refills are ready in 2–4 hours during business hours. We&apos;ll
                            text or call once yours is ready — or on the truck.
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
                                <div>
                                    <label className="block text-xs uppercase tracking-[0.14em] text-ink-soft mb-2">
                                        First name <span style={{ color: "var(--terracotta)" }}>*</span>
                                    </label>
                                    <input name="firstName" required value={form.firstName} onChange={handleChange} className="input" placeholder="Jane" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-[0.14em] text-ink-soft mb-2">
                                        Last name <span style={{ color: "var(--terracotta)" }}>*</span>
                                    </label>
                                    <input name="lastName" required value={form.lastName} onChange={handleChange} className="input" placeholder="Doe" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-[0.14em] text-ink-soft mb-2">
                                        Phone <span style={{ color: "var(--terracotta)" }}>*</span>
                                    </label>
                                    <input name="phone" type="tel" required value={form.phone} onChange={handleChange} className="input" placeholder="(205) 555-0000" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-[0.14em] text-ink-soft mb-2">
                                        Email
                                    </label>
                                    <input name="email" type="email" value={form.email} onChange={handleChange} className="input" placeholder="jane@example.com" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-[0.14em] text-ink-soft mb-2">
                                        Date of birth <span style={{ color: "var(--terracotta)" }}>*</span>
                                    </label>
                                    <input name="dateOfBirth" type="date" required value={form.dateOfBirth} onChange={handleChange} className="input" />
                                </div>
                            </div>
                        </section>

                        {/* Rx numbers */}
                        <section>
                            <div className="flex items-baseline gap-4 mb-8 hairline-b pb-4">
                                <span className="font-display text-sm text-ink-mute tabular-nums">02</span>
                                <h2 className="font-display text-2xl text-ink">Prescription numbers</h2>
                            </div>
                            <p className="text-sm text-ink-soft mb-5">
                                Find the Rx number printed on your medication label.
                            </p>
                            <div className="space-y-3">
                                {form.rxNumbers.map((rx, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <span className="font-display text-sm text-ink-mute tabular-nums w-8 text-right">
                                            #{i + 1}
                                        </span>
                                        <input
                                            className="input flex-1"
                                            placeholder="Rx number (e.g., 123456)"
                                            value={rx}
                                            required={i === 0}
                                            onChange={(e) => handleRxChange(i, e.target.value)}
                                        />
                                        {form.rxNumbers.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeRxField(i)}
                                                className="text-sm text-ink-mute hover:text-ink transition-colors px-2"
                                                style={{ color: "var(--terracotta)" }}
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
                                className="mt-5 text-sm font-semibold text-sage-deep hover:text-moss transition-colors inline-flex items-center gap-1.5"
                            >
                                <span className="text-lg leading-none">＋</span> Add another prescription
                            </button>
                        </section>

                        {/* Delivery */}
                        <section>
                            <div className="flex items-baseline gap-4 mb-8 hairline-b pb-4">
                                <span className="font-display text-sm text-ink-mute tabular-nums">03</span>
                                <h2 className="font-display text-2xl text-ink">Pickup or delivery</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                {(["pickup", "delivery"] as const).map((method) => {
                                    const active = form.pickupMethod === method;
                                    return (
                                        <label key={method} className="relative cursor-pointer">
                                            <input
                                                type="radio"
                                                name="pickupMethod"
                                                value={method}
                                                checked={active}
                                                onChange={handleChange}
                                                className="peer sr-only"
                                            />
                                            <div
                                                className={`p-6 border transition-all ${
                                                    active
                                                        ? "border-ink bg-paper"
                                                        : "border-rule bg-cream hover:border-ink-mute"
                                                }`}
                                                style={{ borderRadius: "var(--radius-sm)" }}
                                            >
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span
                                                        className={`w-4 h-4 rounded-full border transition-all ${
                                                            active
                                                                ? "border-ink bg-ink"
                                                                : "border-ink-mute"
                                                        } flex items-center justify-center`}
                                                    >
                                                        {active && <span className="w-1.5 h-1.5 rounded-full bg-cream" />}
                                                    </span>
                                                    <h3 className="font-display text-lg text-ink font-medium capitalize">
                                                        {method}
                                                    </h3>
                                                </div>
                                                <p className="text-sm text-ink-soft pl-7">
                                                    {method === "pickup"
                                                        ? "Pick up at our shop — Suite G, John Hawkins Pkwy."
                                                        : "Free local delivery to your door."}
                                                </p>
                                            </div>
                                        </label>
                                    );
                                })}
                            </div>

                            {form.pickupMethod === "delivery" && (
                                <div className="mt-6 space-y-4">
                                    <div>
                                        <label className="block text-xs uppercase tracking-[0.14em] text-ink-soft mb-2">
                                            Delivery address <span style={{ color: "var(--terracotta)" }}>*</span>
                                        </label>
                                        <input
                                            name="deliveryAddress"
                                            required
                                            value={form.deliveryAddress}
                                            onChange={handleChange}
                                            className="input"
                                            placeholder="123 Main St, Hoover, AL 35244"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase tracking-[0.14em] text-ink-soft mb-2">
                                            Preferred time
                                        </label>
                                        <select
                                            name="preferredTime"
                                            value={form.preferredTime}
                                            onChange={handleChange}
                                            className="input"
                                        >
                                            <option value="">No preference</option>
                                            <option value="morning">Morning (9 AM – 12 PM)</option>
                                            <option value="afternoon">Afternoon (12 PM – 5 PM)</option>
                                            <option value="evening">Evening (5 PM – 7 PM)</option>
                                        </select>
                                    </div>
                                </div>
                            )}
                        </section>

                        {/* Notes */}
                        <section>
                            <div className="flex items-baseline gap-4 mb-8 hairline-b pb-4">
                                <span className="font-display text-sm text-ink-mute tabular-nums">04</span>
                                <h2 className="font-display text-2xl text-ink">Anything else?</h2>
                            </div>
                            <label className="block text-xs uppercase tracking-[0.14em] text-ink-soft mb-2">
                                Special instructions (optional)
                            </label>
                            <textarea
                                name="notes"
                                value={form.notes}
                                onChange={handleChange}
                                rows={4}
                                className="input resize-none"
                                placeholder="Allergies, questions, or notes for the pharmacist."
                            />
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
                                        Submit refill request
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
