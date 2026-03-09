import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({ region: process.env.REGION_AWS ?? "us-east-1" });

export async function sendRefillNotification(body: {
    firstName: string;
    lastName: string;
    phone: string;
    dateOfBirth: string;
    rxNumbers: string[];
    pickupMethod: string;
    deliveryAddress?: string;
    preferredTime?: string;
    notes?: string;
}) {
    const rxList = body.rxNumbers.map((rx, i) => `  ${i + 1}. ${rx}`).join("\n");

    await ses.send(
        new SendEmailCommand({
            Source: process.env.SES_FROM_EMAIL!,
            Destination: { ToAddresses: [process.env.PHARMACY_NOTIFY_EMAIL!] },
            Message: {
                Subject: { Data: `New Refill Request – ${body.firstName} ${body.lastName}` },
                Body: {
                    Text: {
                        Data: [
                            `New prescription refill request received.`,
                            ``,
                            `Patient: ${body.firstName} ${body.lastName}`,
                            `Phone: ${body.phone}`,
                            `DOB: ${body.dateOfBirth}`,
                            ``,
                            `Rx Numbers:`,
                            rxList,
                            ``,
                            `Pickup Method: ${body.pickupMethod}`,
                            body.deliveryAddress ? `Delivery Address: ${body.deliveryAddress}` : null,
                            body.preferredTime ? `Preferred Time: ${body.preferredTime}` : null,
                            body.notes ? `Notes: ${body.notes}` : null,
                        ]
                            .filter(Boolean)
                            .join("\n"),
                    },
                },
            },
        })
    );
}
