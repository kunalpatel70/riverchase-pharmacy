import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="bg-white shadow px-6 py-6">
            <div className="max-w-6xl mx-auto flex justify-between items-center">

                <Link href="/" className="flex items-center space-x-3">
                    <Image
                        src="/logo.png"
                        alt="River Chase Pharmacy Logo"
                        width={400}
                        height={200}
                        priority
                        className="h-30 md:h-40 w-auto object-contain"
                    />
                </Link>

                <div className="space-x-6 text-gray-700">
                    <Link href="/about" className="hover:text-blue-600">About</Link>
                    <Link href="/services" className="hover:text-blue-600">Services</Link>
                    <Link href="/refill" className="hover:text-blue-600">Refill</Link>
                    <Link href="/contact" className="hover:text-blue-600">Contact</Link>
                </div>
            </div>
        </nav>
    );
}
