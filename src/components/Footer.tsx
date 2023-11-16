
export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
                        <h3 className="text-lg font-bold mb-2">ProProfileAI</h3>
                        <p className="text-gray-600 text-sm">© {currentYear} PPAI Ltd. All rights reserved.</p>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
                        <h3 className="text-lg font-bold mb-2">Links</h3>
                        <ul className="list-reset leading-normal">
                            <li className="hover:text-gray-600 text-gray-800 text-sm mb-2"><a href="/faq">FAQ</a></li>
                            <li className="hover:text-gray-600 text-gray-800 text-sm mb-2"><a href="/contact">Contact Us</a></li>
                            <li className="hover:text-gray-600 text-gray-800 text-sm mb-2"><a href="/privacy-policy">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
