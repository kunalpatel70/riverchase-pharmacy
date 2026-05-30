// Single source of truth for business data used in structured data (JSON-LD)
// and (eventually) display components.
//
// Hours use 24-hour HH:MM format per schema.org openingHoursSpecification.

export const SITE_URL = "https://www.riverchasepharmacy.com";

export const ADDRESS = {
    streetAddress: "3075 John Hawkins Pkwy, Suite G",
    addressLocality: "Hoover",
    addressRegion: "AL",
    postalCode: "35244",
    addressCountry: "US",
} as const;

export const PHONE = "+1-205-536-6014";
export const PHONE_DISPLAY = "(205) 536-6014";

// Schema.org-compliant opening hours.
// Mon-Fri 8:30 AM – 4:30 PM; Sat 8:30 AM – 2:30 PM; Closed Sun.
export const OPENING_HOURS = [
    {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "16:30",
    },
    {
        dayOfWeek: ["Saturday"],
        opens: "08:30",
        closes: "14:30",
    },
] as const;

// Cross-checked against /services page — all entries map to real, advertised offerings.
export const AVAILABLE_SERVICES = [
    "Prescription refills",
    "Free home prescription delivery",
    "Immunizations and vaccinations",
    "Medical supplies and durable medical equipment",
    "Medication therapy management",
    "Multi-dose packaging",
] as const;

// Birmingham-metro cities served by free home delivery.
export const AREAS_SERVED = [
    "Hoover",
    "Birmingham",
    "Pelham",
    "Helena",
    "Vestavia Hills",
] as const;

export const GOOGLE_MAPS_URL =
    "https://www.google.com/maps/place/3075+John+Hawkins+Pkwy+Suite+G+Hoover+AL+35244";
