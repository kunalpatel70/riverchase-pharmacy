import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Refill Prescription",
    description:
        "Submit your prescription refill request online at Riverchase Pharmacy. Fast turnaround with free home delivery available in Hoover, AL. Call (205) 536-6014.",
};

export default function RefillLayout({ children }: { children: React.ReactNode }) {
    return children;
}
