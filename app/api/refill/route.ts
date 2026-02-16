import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();

    // Temporary local dev behavior
    console.log("Refill Request:", body);

    return NextResponse.json({ success: true });
}
