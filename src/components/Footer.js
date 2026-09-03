function Footer() {
    return (
        <footer className="bg-green-800 text-white mt-2">

            {/* Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-12">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* About */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                            BENS ☕
                        </h2>

                        <p className="text-gray-200 leading-7">
                            Fresh coffee, delicious food and a warm place
                            to relax. Every cup is brewed with love and care.
                        </p>
                    </div>


                    {/* Quick Links */}
                    <div>
                        <h3 className="text-[#ff5a00] text-xl font-bold mb-5">
                            Quick Links
                        </h3>

                        <div className="space-y-3">
                            <a
                                href="/home"
                                className="block hover:text-[#ff5a00] transition"
                            >
                                Home
                            </a>

                            <a
                                href="/about"
                                className="block hover:text-[#ff5a00] transition"
                            >
                                About
                            </a>

                            <a
                                href="/shop"
                                className="block hover:text-[#ff5a00] transition"
                            >
                                Shop
                            </a>

                            <a
                                href="/menu"
                                className="block hover:text-[#ff5a00] transition"
                            >
                                Menu
                            </a>

                            <a
                                href="/contact"
                                className="block hover:text-[#ff5a00] transition"
                            >
                                Contact
                            </a>
                        </div>
                    </div>


                    {/* Opening Hours */}
                    <div>
                        <h3 className="text-[#ff5a00] text-xl font-bold mb-5">
                            Opening Hours
                        </h3>

                        <p className="text-gray-200 mb-2">
                            Monday - Friday
                        </p>

                        <p className="text-gray-300 mb-4">
                            8:00 AM - 10:00 PM
                        </p>

                        <p className="text-gray-200 mb-2">
                            Saturday - Sunday
                        </p>

                        <p className="text-gray-300">
                            9:00 AM - 11:00 PM
                        </p>
                    </div>


                    {/* Contact */}
                    <div>
                        <h3 className="text-[#ff5a00] text-xl font-bold mb-5">
                            Contact Us
                        </h3>

                        <p className="text-gray-200 mb-3">
                            📍 Chennai, Tamil Nadu
                        </p>

                        <p className="text-gray-200 mb-3">
                            📞 +91 98765 43210
                        </p>

                        <p className="text-gray-200">
                            ✉️ benscoffee@gmail.com
                        </p>
                    </div>

                </div>
            </div>


            {/* Bottom */}
            <div className="border-t border-white/20 bg-[#043d31]">

                <div className="max-w-7xl mx-auto px-6 py-5 text-center">

                    <p className="text-gray-300 text-sm">
                        © 2026 BENS Coffee. All Rights Reserved.
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;