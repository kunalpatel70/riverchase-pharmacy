import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import type { Metadata } from 'next'

const siteUrl = 'https://www.riverchasepharmacy.com'

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: 'River Chase Pharmacy - Prescription Refills, Medical Supplies & Immunizations - Hoover, AL',
        template: '%s | River Chase Pharmacy',
    },
    description:
        'River Chase Pharmacy is your trusted independent pharmacy in Hoover, Alabama. We offer prescription refills, free home delivery, immunizations, medical supplies, and personalized care. Call (205) 536-6014.',
    keywords: [
        'River Chase Pharmacy', 'pharmacy Hoover AL', 'prescription refills Hoover',
        'medical supplies Hoover Alabama', 'immunizations Hoover', 'free prescription delivery',
        'independent pharmacy Hoover', 'drugstore Hoover AL',
    ],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteUrl,
        siteName: 'River Chase Pharmacy',
        title: 'River Chase Pharmacy - Hoover, AL',
        description:
            'Your trusted independent pharmacy in Hoover, Alabama. Prescription refills, free home delivery, immunizations, and medical supplies.',
    },
    twitter: {
        card: 'summary',
        title: 'River Chase Pharmacy - Hoover, AL',
        description:
            'Your trusted independent pharmacy in Hoover, Alabama. Call (205) 536-6014.',
    },
    alternates: {
        canonical: siteUrl,
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        </body>
        </html>
    )
}