"use client";

import { MapPin } from "lucide-react";
import { useState } from "react";

export default function Home() {

    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <div className="flex justify-center h-screen absolute top-0 left-0 right-0 bottom-0">
            <div className="flex items-center gap-6">

                <div className="flex-shrink-0 w-1/3">
                <img
                        src="https://placehold.co/150x150"
                        alt="Bild von mir"
                        className="w-40 h-40 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 object-cover rounded-2xl shadow-2xl"
                    />
                </div>

                <div className="w-2/5 flex flex-col justify-start">

                    <h1
                        className={`text-5xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold text-white drop-shadow-xl text-left whitespace-nowrap 
                            transform transition-all duration-300 ease-in-out ${hovered ? 'scale-110' : ''}`}
                        onMouseEnter={() => setHovered(true)} // Hover ein
                        onMouseLeave={() => setHovered(false)} // Hover aus
                    >
                        Hari Gian
                    </h1>

                    <div className="flex items-center mt-2 space-x-2 text-gray-300 text-sm">
                        <MapPin className="w-5 h-5 text-pink-400"/> {/* Location-Icon */}
                        <a
                            href="https://www.google.com/maps?q=47.269786,8.644454"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            Meilen, Schweiz
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}
