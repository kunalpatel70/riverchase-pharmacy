import { NextResponse } from "next/server";
import { client } from "@/lib/amplify";
import { sendTransferNotification } from "@/lib/ses";

export async function POST(req: Request) {
    const body = await req.json();

    const { data, errors } = await client.models.TransferRequest.create({
        firstName: body.firstName,
        lastName: body.lastName,
        dateOfBirth: body.dateOfBirth,
        phone: body.phone,
        address: body.address,
        city: body.city,
        state: body.state,
        zip: body.zip,
        pharmacyName: body.pharmacyName,
        pharmacyPhone: body.pharmacyPhone,
        transferAll: body.transferAll,
        medications: body.medications?.filter(Boolean) || [],
        rxNumbers: body.rxNumbers?.filter(Boolean) || [],
        notes: body.notes || null,
        status: "pending",
    });

    if (errors) {
        console.error("DynamoDB error:", errors);
        return NextResponse.json({ success: false, errors }, { status: 500 });
    }

    try {
        await sendTransferNotification(body);
    } catch (err) {
        console.error("SES error:", err);
    }

    return NextResponse.json({ success: true, id: data?.id });
}
