import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    REGION_AWS: process.env.REGION_AWS,
    SES_FROM_EMAIL: process.env.SES_FROM_EMAIL,
    PHARMACY_NOTIFY_EMAIL: process.env.PHARMACY_NOTIFY_EMAIL,
    SES_ACCESS_KEY_ID: process.env.SES_ACCESS_KEY_ID,
    SES_SECRET_ACCESS_KEY: process.env.SES_SECRET_ACCESS_KEY,
  },
};

export default nextConfig;
