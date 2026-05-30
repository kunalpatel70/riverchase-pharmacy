import {
    SITE_URL,
    ADDRESS,
    PHONE,
    OPENING_HOURS,
    AVAILABLE_SERVICES,
    AREAS_SERVED,
    GOOGLE_MAPS_URL,
} from "@/lib/business";

export default function StructuredData() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Pharmacy",
        name: "Riverchase Pharmacy",
        description:
            "Independent neighborhood pharmacy in Hoover, AL offering prescription refills, free home delivery, immunizations, and medical supplies.",
        url: `${SITE_URL}/`,
        logo: `${SITE_URL}/logo.png`,
        image: `${SITE_URL}/og.jpg`,
        telephone: PHONE,
        priceRange: "$$",
        address: {
            "@type": "PostalAddress",
            ...ADDRESS,
        },
        hasMap: GOOGLE_MAPS_URL,
        openingHoursSpecification: OPENING_HOURS.map((h) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [...h.dayOfWeek],
            opens: h.opens,
            closes: h.closes,
        })),
        paymentAccepted: "Cash, Credit Card, Health Insurance",
        currenciesAccepted: "USD",
        areaServed: AREAS_SERVED.map((name) => ({
            "@type": "City",
            name,
        })),
        availableService: AVAILABLE_SERVICES.map((name) => ({
            "@type": "Service",
            name,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
