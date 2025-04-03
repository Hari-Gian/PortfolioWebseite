export default function Home() {
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r ">
            <div className="flex-shrink-0 w-1/5">
                <img
                    src="https://placehold.co/100x100"
                    alt="Bild von mir"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                />
            </div>

            <div className="w-1/4 flex justify-center items-center">
                <h1 className="text-7xl font-extrabold text-white drop-shadow-xl text-center">
                    Home
                </h1>
            </div>
        </div>
    );
}
