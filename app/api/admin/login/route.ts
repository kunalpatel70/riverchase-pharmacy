import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { password } = await req.json();

    if (password !== process.env.ADMIN_PASSWORD) {
        return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    const token = Buffer.from(`admin:${Date.now()}`).toString("base64");

    const res = NextResponse.json({ success: true });
    res.cookies.set("admin_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 8, // 8 hours
        path: "/",
    });

    return res;
}
