export default function Footer() {
    return (
        <footer className="bg-gray-300 relative w-full bg-gradient-to-r text-gray-100 pt-20 pb-8 mt-8 shadow-lg">


            <div
                className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">


                <div className="flex flex-col justify-center items-center space-y-4 text-black">
                    <a className="text-black transition-colors duration text-lg font-extrabold text-xl">Contact:</a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors duration-300"
                    >
                        GitHub ↗
                    </a>
                    <a
                        href="mailto:harigian545@gmail.com"
                        className="hover:text-white transition-colors duration-300"
                    >
                        Email ↗
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors duration-300"
                    >
                        LinkedIn ↗
                    </a>
                </div>

                <div className="flex flex-col justify-center items-center space-y-4 text-black ">
                    <a className="text-black transition-colors duration text-lg font-extrabold text-xl">Programmiersprachen:</a>
                    <a
                        href="https://tailwindcss.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors duration-300 "
                    >
                        Tailwind CSS ↗
                    </a>
                    <a
                        href="https://www.typescriptlang.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors duration-300"
                    >
                        TypeScript ↗
                    </a>
                </div>

                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-extrabold text-black ">Portfolio Webseite</h2>
                    <p className="text-sm text-black">
                        &copy; {new Date().getFullYear()} Alle Rechte vorbehalten.
                    </p>
                </div>

                <div className="flex flex-col space-y-4">
                    <a
                        href="#impressum"
                        className="text-black text-lg hover:text-white transition-colors duration-300"
                    >
                        Impressum
                    </a>
                    <a
                        href="#datenschutz"
                        className="text-black text-lg hover:text-white transition-colors duration-300"
                    >
                        Datenschutz
                    </a>
                </div>
            </div>
        </footer>
    );
}
