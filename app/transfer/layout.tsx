import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Transfer Prescription",
    description:
        "Transfer your prescriptions to Riverchase Pharmacy. Easy online form to get started. Call (205) 536-6014 for assistance.",
};

export default function TransferLayout({ children }: { children: React.ReactNode }) {
    return children;
}
