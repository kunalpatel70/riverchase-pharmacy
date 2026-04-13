"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        const res = await fetch("/api/admin/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password }),
        });

        setLoading(false);

        if (!res.ok) {
            setError("Invalid password");
            return;
        }

        router.push("/admin/dashboard");
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm">
                <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">Admin Portal</h1>
                <p className="text-sm text-gray-500 mb-6 text-center">River Chase Pharmacy</p>

                {error && (
                    <div className="bg-red-50 text-red-700 text-sm rounded p-3 mb-4">{error}</div>
                )}

                <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-sky-600"
                    placeholder="Enter admin password"
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-sky-700 text-white font-semibold py-3 rounded-lg hover:bg-sky-800 transition disabled:opacity-50"
                >
                    {loading ? "Signing in..." : "Sign In"}
                </button>
            </form>
        </div>
    );
}
