import { a, defineData, type ClientSchema } from "@aws-amplify/backend";

const schema = a.schema({
    RefillRequest: a
        .model({
            firstName: a.string().required(),
            lastName: a.string().required(),
            phone: a.string().required(),
            email: a.string(),
            dateOfBirth: a.string().required(),
            rxNumbers: a.string().array().required(),
            pickupMethod: a.string().required(),
            deliveryAddress: a.string(),
            preferredTime: a.string(),
            notes: a.string(),
            status: a.string().default("pending"),
            pharmacistNotes: a.string(),
        })
        .authorization((allow) => [allow.publicApiKey()]),

    TransferRequest: a
        .model({
            firstName: a.string().required(),
            lastName: a.string().required(),
            dateOfBirth: a.string().required(),
            phone: a.string().required(),
            address: a.string().required(),
            city: a.string().required(),
            state: a.string().required(),
            zip: a.string().required(),
            pharmacyName: a.string().required(),
            pharmacyPhone: a.string().required(),
            transferAll: a.boolean().required(),
            medications: a.string().array(),
            rxNumbers: a.string().array(),
            notes: a.string(),
            status: a.string().default("pending"),
            pharmacistNotes: a.string(),
        })
        .authorization((allow) => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
    schema,
    authorizationModes: {
        defaultAuthorizationMode: "apiKey",
        apiKeyAuthorizationMode: { expiresInDays: 365 },
    },
});
