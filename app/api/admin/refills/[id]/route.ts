import { NextRequest, NextResponse } from "next/server";
import { client } from "@/lib/amplify";

export async function PATCH(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    if (!req.cookies.get("admin_token")) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const body = await req.json();
    const updates = {
        id,
        ...(body.status && { status: body.status }),
        ...(body.pharmacistNotes !== undefined && { pharmacistNotes: body.pharmacistNotes }),
    };

    const result = body.type === "transfer"
        ? await client.models.TransferRequest.update(updates)
        : await client.models.RefillRequest.update(updates);

    if (result.errors) {
        return NextResponse.json({ error: result.errors }, { status: 500 });
    }

    return NextResponse.json({ data: result.data });
}
