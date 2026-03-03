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
