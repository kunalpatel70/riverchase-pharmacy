"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type RequestItem = {
    id: string;
    type: "refill" | "transfer";
    firstName: string;
    lastName: string;
    phone: string;
    email?: string;
    dateOfBirth: string;
    rxNumbers?: string[];
    pickupMethod?: string;
    deliveryAddress?: string;
    preferredTime?: string;
    pharmacyName?: string;
    pharmacyPhone?: string;
    transferAll?: boolean;
    medications?: string[];
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
    notes?: string;
    status: string;
    pharmacistNotes?: string;
    createdAt: string;
    updatedAt: string;
};

const STATUSES = ["pending", "in-progress", "ready", "completed", "rejected"] as const;

const STATUS_COLORS: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-800",
    "in-progress": "bg-blue-100 text-blue-800",
    ready: "bg-green-100 text-green-800",
    completed: "bg-gray-100 text-gray-600",
    rejected: "bg-red-100 text-red-800",
};

const NEXT_ACTIONS: Record<string, { label: string; to: string }[]> = {
    pending: [{ label: "Start Processing", to: "in-progress" }],
    "in-progress": [
        { label: "Mark Ready", to: "ready" },
        { label: "Reject", to: "rejected" },
    ],
    ready: [{ label: "Mark Completed", to: "completed" }],
    completed: [],
    rejected: [],
};

export default function AdminDashboard() {
    const [refills, setRefills] = useState<RequestItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<string>("active");
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [notesInput, setNotesInput] = useState<Record<string, string>>({});
    const [updating, setUpdating] = useState<string | null>(null);
    const router = useRouter();

    const fetchRefills = async () => {
        const res = await fetch("/api/admin/refills");
        if (res.status === 401) {
            router.push("/admin");
            return;
        }
        const json = await res.json();
        setRefills(json.data ?? []);
        setLoading(false);
    };

    useEffect(() => {
        fetchRefills();
    }, []);

    const updateRefill = async (id: string, type: string, status?: string, pharmacistNotes?: string) => {
        setUpdating(id);
        await fetch(`/api/admin/refills/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ type, status, pharmacistNotes }),
        });
        await fetchRefills();
        setUpdating(null);
    };

    const filtered = refills.filter((r) => {
        if (filter === "active") return !["completed", "rejected"].includes(r.status);
        if (filter === "all") return true;
        return r.status === filter;
    });

    const counts = STATUSES.reduce(
        (acc, s) => ({ ...acc, [s]: refills.filter((r) => r.status === s).length }),
        {} as Record<string, number>
    );

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-gray-500">Loading...</p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Requests</h1>
                    <p className="text-gray-500 mt-1">{refills.length} total requests</p>
                </div>
                <button
                    onClick={fetchRefills}
                    className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-50"
                >
                    ↻ Refresh
                </button>
            </div>

            {/* Status summary cards */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
                {STATUSES.map((s) => (
                    <button
                        key={s}
                        onClick={() => setFilter(s)}
                        className={`rounded-lg p-3 text-center border transition ${
                            filter === s ? "ring-2 ring-sky-600 border-sky-600" : "border-gray-200 bg-white"
                        }`}
                    >
                        <div className="text-2xl font-bold text-gray-900">{counts[s]}</div>
                        <div className="text-xs font-medium text-gray-500 capitalize">{s}</div>
                    </button>
                ))}
            </div>

            {/* Filter tabs */}
            <div className="flex gap-2 mb-6">
                {["active", "all", ...STATUSES].map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${
                            filter === f
                                ? "bg-sky-700 text-white"
                                : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
                        }`}
                    >
                        <span className="capitalize">{f}</span>
                    </button>
                ))}
            </div>

            {/* Table */}
            {filtered.length === 0 ? (
                <div className="bg-white rounded-lg shadow p-12 text-center text-gray-500">
                    No requests found
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50 border-b">
                            <tr>
                                <th className="text-left px-4 py-3 font-semibold text-gray-600">Patient</th>
                                <th className="text-left px-4 py-3 font-semibold text-gray-600">Type</th>
                                <th className="text-left px-4 py-3 font-semibold text-gray-600">Details</th>
                                <th className="text-left px-4 py-3 font-semibold text-gray-600">Status</th>
                                <th className="text-left px-4 py-3 font-semibold text-gray-600">Submitted</th>
                                <th className="text-left px-4 py-3 font-semibold text-gray-600">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((r) => (
                                <tr key={r.id} className="border-b last:border-0 hover:bg-gray-50">
                                    {/* Main row */}
                                    <td className="px-4 py-3">
                                        <button
                                            onClick={() => setExpandedId(expandedId === r.id ? null : r.id)}
                                            className="text-left hover:text-sky-700"
                                        >
                                            <div className="font-medium text-gray-900">
                                                {r.firstName} {r.lastName}
                                            </div>
                                            <div className="text-xs text-gray-500">{r.phone}</div>
                                        </button>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                            r.type === "transfer"
                                                ? "bg-purple-100 text-purple-800"
                                                : "bg-teal-100 text-teal-800"
                                        }`}>
                                            {r.type}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-gray-700 text-xs">
                                        {r.type === "transfer"
                                            ? r.transferAll ? "Transfer all" : r.medications?.filter(Boolean).join(", ") || "—"
                                            : r.rxNumbers?.join(", ")}
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${STATUS_COLORS[r.status] ?? ""}`}>
                                            {r.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-gray-500 text-xs">
                                        {new Date(r.createdAt).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            hour: "numeric",
                                            minute: "2-digit",
                                        })}
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex gap-2">
                                            {NEXT_ACTIONS[r.status]?.map((action) => (
                                                <button
                                                    key={action.to}
                                                    disabled={updating === r.id}
                                                    onClick={() => updateRefill(r.id, r.type, action.to)}
                                                    className={`px-3 py-1 rounded text-xs font-semibold transition disabled:opacity-50 ${
                                                        action.to === "rejected"
                                                            ? "bg-red-50 text-red-700 hover:bg-red-100"
                                                            : "bg-sky-50 text-sky-700 hover:bg-sky-100"
                                                    }`}
                                                >
                                                    {action.label}
                                                </button>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {/* Expanded detail rows rendered separately */}
                            {filtered.map((r) =>
                                expandedId === r.id ? (
                                    <tr key={`${r.id}-detail`} className="bg-gray-50">
                                        <td colSpan={6} className="px-6 py-4">
                                            <div className="grid md:grid-cols-2 gap-6 text-sm">
                                                <div className="space-y-2">
                                                    <Detail label="DOB" value={r.dateOfBirth} />
                                                    {r.type === "refill" ? (
                                                        <>
                                                            <Detail label="Email" value={r.email || "—"} />
                                                            <Detail label="Rx Numbers" value={r.rxNumbers?.join(", ") || "—"} />
                                                            <Detail label="Pickup" value={r.pickupMethod || "—"} />
                                                            {r.deliveryAddress && <Detail label="Delivery Address" value={r.deliveryAddress} />}
                                                            {r.preferredTime && <Detail label="Preferred Time" value={r.preferredTime} />}
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Detail label="Address" value={`${r.address}, ${r.city}, ${r.state} ${r.zip}`} />
                                                            <Detail label="From Pharmacy" value={`${r.pharmacyName} — ${r.pharmacyPhone}`} />
                                                            <Detail label="Transfer All" value={r.transferAll ? "Yes" : "No"} />
                                                            {!r.transferAll && r.medications?.filter(Boolean).length ? (
                                                                <Detail label="Medications" value={r.medications.filter(Boolean).map((m, i) => `${m}${r.rxNumbers?.[i] ? ` (Rx# ${r.rxNumbers[i]})` : ""}`).join(", ")} />
                                                            ) : null}
                                                        </>
                                                    )}
                                                    {r.notes && <Detail label="Patient Notes" value={r.notes} />}
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-semibold text-gray-600 mb-1">
                                                        Pharmacist Notes
                                                    </label>
                                                    <textarea
                                                        rows={3}
                                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-600 resize-none"
                                                        placeholder="Add internal notes..."
                                                        value={notesInput[r.id] ?? r.pharmacistNotes ?? ""}
                                                        onChange={(e) =>
                                                            setNotesInput({ ...notesInput, [r.id]: e.target.value })
                                                        }
                                                    />
                                                    <button
                                                        disabled={updating === r.id}
                                                        onClick={() => updateRefill(r.id, r.type, undefined, notesInput[r.id])}
                                                        className="mt-2 bg-sky-700 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-sky-800 transition disabled:opacity-50"
                                                    >
                                                        Save Notes
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ) : null
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

function Detail({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <span className="font-semibold text-gray-600">{label}: </span>
            <span className="text-gray-900">{value}</span>
        </div>
    );
}
