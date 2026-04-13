import { NextResponse } from "next/server";
import { client } from "@/lib/amplify";
import { sendRefillNotification } from "@/lib/ses";

export async function POST(req: Request) {
    const body = await req.json();

    const { data, errors } = await client.models.RefillRequest.create({
        firstName: body.firstName,
        lastName: body.lastName,
        phone: body.phone,
        email: body.email || null,
        dateOfBirth: body.dateOfBirth,
        rxNumbers: body.rxNumbers,
        pickupMethod: body.pickupMethod,
        deliveryAddress: body.deliveryAddress || null,
        preferredTime: body.preferredTime || null,
        notes: body.notes || null,
        status: "pending",
    });

    if (errors) {
        console.error("DynamoDB error:", errors);
        return NextResponse.json({ success: false, errors }, { status: 500 });
    }

    try {
        await sendRefillNotification(body);
    } catch (err) {
        console.error("SES error:", err);
    }

    return NextResponse.json({ success: true, id: data?.id });
}
