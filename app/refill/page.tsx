"use client";

import { useState } from "react";

export default function RefillPage() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        rxNumbers: ["", "", "", "", ""],
        otc: Array(5).fill({ name: "", qty: "" }),
        pickupMethod: "pickup",
        notify: "",
    });

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRxChange = (index: number, value: string) => {
        const updated = [...form.rxNumbers];
        updated[index] = value;
        setForm({ ...form, rxNumbers: updated });
    };

    const handleOtcChange = (index: number, field: string, value: string) => {
        const updated = [...form.otc];
        updated[index] = { ...updated[index], [field]: value };
        setForm({ ...form, otc: updated });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log(form);
        alert("Refill submitted (dev mode)");
    };

    return (
        <div className="bg-gray-100 py-16 px-6">
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-10">
                <h1 className="text-3xl font-bold text-blue-700 mb-2">
                    RX Refills
                </h1>
                <p className="mb-6 text-gray-600">
                    Fill and submit the form below with the correct information.
                </p>

                <p className="text-red-500 text-sm mb-4">
                    * = Required Information
                </p>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Patient Info */}
                    <div>
                        <h2 className="font-semibold mb-4">
                            Who is this prescription for?
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block mb-1">
                                    Last Name *
                                </label>
                                <input
                                    name="lastName"
                                    required
                                    onChange={handleChange}
                                    className="input"
                                    placeholder="Enter last name here"
                                />
                            </div>

                            <div>
                                <label className="block mb-1">
                                    First Name *
                                </label>
                                <input
                                    name="firstName"
                                    required
                                    onChange={handleChange}
                                    className="input"
                                    placeholder="Enter first name here"
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="block mb-1">
                                Phone Number *
                            </label>
                            <input
                                name="phone"
                                required
                                onChange={handleChange}
                                className="input"
                                placeholder="Enter phone number here"
                            />
                        </div>
                    </div>

                    {/* RX Numbers */}
                    <div>
                        <h2 className="font-semibold mb-4">
                            RX Refill Numbers
                        </h2>

                        <div className="space-y-4">
                            {form.rxNumbers.map((rx, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <span className="w-6">{i + 1}</span>
                                    <input
                                        className="input flex-1"
                                        placeholder="Enter RX refill number here"
                                        value={rx}
                                        required={i === 0}
                                        onChange={(e) =>
                                            handleRxChange(i, e.target.value)
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* OTC Items */}
                    <div>
                        <h2 className="font-semibold mb-4">
                            Add More Prescriptions (Over the Counter Item)
                        </h2>

                        <div className="space-y-4">
                            {form.otc.map((item, i) => (
                                <div
                                    key={i}
                                    className="grid md:grid-cols-3 gap-4 items-center"
                                >
                                    <span>{i + 1}</span>
                                    <input
                                        className="input"
                                        placeholder="Enter name here"
                                        value={item.name}
                                        onChange={(e) =>
                                            handleOtcChange(i, "name", e.target.value)
                                        }
                                    />
                                    <input
                                        className="input"
                                        placeholder="Enter quantity here"
                                        value={item.qty}
                                        onChange={(e) =>
                                            handleOtcChange(i, "qty", e.target.value)
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pickup or Delivery */}
                    <div>
                        <h2 className="font-semibold mb-2">
                            Pick Up or Delivery?
                        </h2>

                        <div className="flex gap-6">
                            <label>
                                <input
                                    type="radio"
                                    name="pickupMethod"
                                    value="pickup"
                                    defaultChecked
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Pickup
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="pickupMethod"
                                    value="delivery"
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Delivery
                            </label>
                        </div>
                    </div>

                    {/* Notification */}
                    <div>
                        <h2 className="font-semibold mb-2">
                            Would you like to notify you when ready?
                        </h2>

                        <select
                            name="notify"
                            onChange={handleChange}
                            className="input max-w-sm"
                        >
                            <option value="">Please select</option>
                            <option value="no">No, thanks</option>
                            <option value="phone">Yes, via phone</option>
                            <option value="text">Yes, via text</option>
                        </select>
                    </div>

                    {/* Submit */}
                    <div className="text-right">
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-600 text-white px-10 py-3 rounded-lg text-lg font-semibold transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
