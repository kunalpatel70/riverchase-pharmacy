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

    const { data, errors } = await client.models.RefillRequest.update({
        id,
        ...(body.status && { status: body.status }),
        ...(body.pharmacistNotes !== undefined && { pharmacistNotes: body.pharmacistNotes }),
    });

    if (errors) {
        return NextResponse.json({ error: errors }, { status: 500 });
    }

    return NextResponse.json({ data });
}
