import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Fraunces, Instrument_Sans } from 'next/font/google'

import type { Metadata } from 'next'

const fraunces = Fraunces({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-fraunces',
    axes: ['SOFT', 'WONK', 'opsz'],
})

const instrument = Instrument_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-instrument',
    weight: ['400', '500', '600', '700'],
})

const siteUrl = 'https://www.riverchasepharmacy.com'

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: 'Riverchase Pharmacy - Prescription Refills, Medical Supplies & Immunizations - Hoover, AL',
        template: '%s | Riverchase Pharmacy',
    },
    description:
        'Riverchase Pharmacy is your trusted independent pharmacy in Hoover, Alabama. We offer prescription refills, free home delivery, immunizations, medical supplies, and personalized care. Call (205) 536-6014.',
    keywords: [
        'Riverchase Pharmacy', 'pharmacy Hoover AL', 'prescription refills Hoover',
        'medical supplies Hoover Alabama', 'immunizations Hoover', 'free prescription delivery',
        'independent pharmacy Hoover', 'drugstore Hoover AL',
    ],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteUrl,
        siteName: 'Riverchase Pharmacy',
        title: 'Riverchase Pharmacy - Hoover, AL',
        description:
            'Your trusted independent pharmacy in Hoover, Alabama. Prescription refills, free home delivery, immunizations, and medical supplies.',
    },
    twitter: {
        card: 'summary',
        title: 'Riverchase Pharmacy - Hoover, AL',
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
        <html lang="en" className={`${fraunces.variable} ${instrument.variable}`}>
        <body className="flex flex-col min-h-screen bg-cream text-ink">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        </body>
        </html>
    )
}
