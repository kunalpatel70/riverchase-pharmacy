import { NextRequest, NextResponse } from "next/server";
import { client } from "@/lib/amplify";

export async function GET(req: NextRequest) {
    if (!req.cookies.get("admin_token")) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const [refills, transfers] = await Promise.all([
        client.models.RefillRequest.list({ limit: 200 }),
        client.models.TransferRequest.list({ limit: 200 }),
    ]);

    if (refills.errors || transfers.errors) {
        return NextResponse.json({ error: refills.errors || transfers.errors }, { status: 500 });
    }

    const combined = [
        ...(refills.data ?? []).map((r) => ({ ...r, type: "refill" as const })),
        ...(transfers.data ?? []).map((r) => ({ ...r, type: "transfer" as const })),
    ].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return NextResponse.json({ data: combined });
}
