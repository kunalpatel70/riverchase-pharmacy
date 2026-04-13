import { NextRequest, NextResponse } from "next/server";
import { client } from "@/lib/amplify";

export async function GET(req: NextRequest) {
    if (!req.cookies.get("admin_token")) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data, errors } = await client.models.RefillRequest.list({
        limit: 200,
    });

    if (errors) {
        return NextResponse.json({ error: errors }, { status: 500 });
    }

    // Sort by createdAt descending (newest first)
    const sorted = (data ?? []).sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return NextResponse.json({ data: sorted });
}
