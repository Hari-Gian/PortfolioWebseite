export default function Footer() {
    return (
        <footer className="w-full bg-gray-100 text-gray-600 pt-16 pb-8 mt-16 border-t shadow-sm">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8">

                {/* Kontakt */}
                <div className="flex flex-col items-center md:items-start space-y-2">
                    <h3 className="text-black text-lg font-bold">Kontakt</h3>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition-colors duration-300"
                    >
                        GitHub ↗
                    </a>
                    <a
                        href="mailto:harigian545@gmail.com"
                        className="hover:text-black transition-colors duration-300"
                    >
                        Email ↗
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition-colors duration-300"
                    >
                        LinkedIn ↗
                    </a>
                </div>

                {/* Programmiersprachen */}
                <div className="flex flex-col items-center md:items-start space-y-2">
                    <h3 className="text-black text-lg font-bold">Technologien</h3>
                    <a
                        href="https://tailwindcss.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition-colors duration-300"
                    >
                        Tailwind CSS ↗
                    </a>
                    <a
                        href="https://www.typescriptlang.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition-colors duration-300"
                    >
                        TypeScript ↗
                    </a>
                </div>

                {/* Portfolio Info */}
                <div className="text-center md:text-left space-y-2">
                    <h2 className="text-2xl font-extrabold text-black">Portfolio Webseite</h2>
                    <p className="text-sm text-gray-700">
                        &copy; {new Date().getFullYear()} Alle Rechte vorbehalten.
                    </p>
                </div>

                {/* Rechtliches */}
                <div className="flex flex-col items-center md:items-start space-y-2">
                    <h3 className="text-black text-lg font-bold">Rechtliches</h3>
                    <a
                        href="#impressum"
                        className="hover:text-black transition-colors duration-300"
                    >
                        Impressum
                    </a>
                    <a
                        href="#datenschutz"
                        className="hover:text-black transition-colors duration-300"
                    >
                        Datenschutz
                    </a>
                </div>

            </div>
        </footer>
    );
}
