import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-3">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center hover:opacity-90 transition">
                        <Image
                            src="/logo.png"
                            alt="River Chase Pharmacy"
                            width={280}
                            height={100}
                            priority
                            className="h-20 w-auto object-contain"
                        />
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/about" className="text-gray-700 hover:text-sky-700 font-medium transition">About</Link>
                        <Link href="/services" className="text-gray-700 hover:text-sky-700 font-medium transition">Services</Link>
                        <Link href="/contact" className="text-gray-700 hover:text-sky-700 font-medium transition">Contact</Link>
                        <Link href="/refill" className="bg-sky-700 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-sky-800 transition shadow-sm">
                            Refill Rx
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Link href="/refill" className="bg-sky-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                            Refill
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
