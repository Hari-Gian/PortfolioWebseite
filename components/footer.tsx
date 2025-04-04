export default function Footer() {
    return (
        <footer
            className="w-full bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 text-gray-100 py-8 mt-8">
            <div
                className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

                <div className="flex flex-col justify-center items-center space-y-4">
                    <a
                        className="text-white transition-colors duration text-lg"
                    >
                        Contact:
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-400 transition-colors duration-300"
                    >
                        GitHub ↗
                    </a>
                    <a
                        href="mailto:harigian545@gmail.com"
                        className="hover:text-pink-400 transition-colors duration-300"
                    >
                        Email ↗
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-400 transition-colors duration-300"
                    >
                        LinkedIn ↗
                    </a>

                </div>

                <div className="flex flex-col justify-center items-center space-y-4">
                    <a
                        className="text-white transition-colors duration text-lg"
                    >
                        Programmiersprachen:
                    </a>
                    <a
                        href="https://tailwindcss.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-400 transition-colors duration-300"
                    >
                        tailwind css ↗
                    </a>

                    <a
                        href="https://www.typescriptlang.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-400 transition-colors duration-300"
                    >
                        Typescript ↗
                    </a>

                </div>

                {/* Branding */}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-extrabold text-white">Portfolio Webseite</h2>
                    <p className="text-sm text-gray-300">
                        &copy; {new Date().getFullYear()} Alle Rechte vorbehalten.
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-col space-y-4">
                    <a
                        href="#impressum"
                        className="text-gray-300 text-lg hover:text-white transition-colors duration-300"
                    >
                        Impressum
                    </a>
                    <a
                        href="#datenschutz"
                        className="text-gray-300 text-lg hover:text-white transition-colors duration-300"
                    >
                        Datenschutz
                    </a>
                </div>
            </div>
        </footer>
    )
}