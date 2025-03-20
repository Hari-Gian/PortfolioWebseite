export default function Header() {
    return (
        <header
            className="w-[35%] max-w-4xl h-16 bg-gradient-to-r from-purple-700 to-indigo-600 rounded-full flex justify-between items-center px-6 absolute top-4 left-1/2 transform -translate-x-1/2 shadow-2xl">
            {["Home", "Projects", "About Me", "Contact"].map((label) => (
                <button
                    key={label}
                    className="bg-purple-500 text-white font-semibold text-lg px-6 py-2 rounded-full shadow-md hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105">

                    {label}
                </button>
            ))}
        </header>
    );
}



