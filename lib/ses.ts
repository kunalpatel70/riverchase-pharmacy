import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({
    region: process.env.REGION_AWS ?? "us-east-1",
    ...(process.env.SES_ACCESS_KEY_ID && process.env.SES_SECRET_ACCESS_KEY
        ? {
              credentials: {
                  accessKeyId: process.env.SES_ACCESS_KEY_ID,
                  secretAccessKey: process.env.SES_SECRET_ACCESS_KEY,
              },
          }
        : {}),
});

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

export async function sendTransferNotification(body: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    pharmacyName: string;
    pharmacyPhone: string;
    transferAll: boolean;
    medications?: string[];
    rxNumbers?: string[];
    notes?: string;
}) {
    const meds = body.transferAll
        ? "  Transfer ALL prescriptions"
        : (body.medications || [])
              .map((m, i) => m ? `  ${i + 1}. ${m}${body.rxNumbers?.[i] ? ` (Rx# ${body.rxNumbers[i]})` : ""}` : null)
              .filter(Boolean)
              .join("\n") || "  None specified";

    await ses.send(
        new SendEmailCommand({
            Source: process.env.SES_FROM_EMAIL!,
            Destination: { ToAddresses: [process.env.PHARMACY_NOTIFY_EMAIL!] },
            Message: {
                Subject: { Data: `New Transfer Request – ${body.firstName} ${body.lastName}` },
                Body: {
                    Text: {
                        Data: [
                            `New prescription transfer request received.`,
                            ``,
                            `Patient: ${body.firstName} ${body.lastName}`,
                            `DOB: ${body.dateOfBirth}`,
                            `Phone: ${body.phone}`,
                            `Address: ${body.address}, ${body.city}, ${body.state} ${body.zip}`,
                            ``,
                            `Current Pharmacy: ${body.pharmacyName}`,
                            `Pharmacy Phone: ${body.pharmacyPhone}`,
                            ``,
                            `Prescriptions:`,
                            meds,
                            body.notes ? `\nNotes: ${body.notes}` : null,
                        ]
                            .filter(Boolean)
                            .join("\n"),
                    },
                },
            },
        })
    );
}
