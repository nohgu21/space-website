import { useState } from "react"
import type { Technology } from "../types/space"
import techImage1 from "../assets/technology/image-launch-vehicle-portrait.jpg"
import techImage2 from "../assets/technology/image-spaceport-portrait.jpg"
import techImage3 from "../assets/technology/image-space-capsule-portrait.jpg"
import techImage1Landscape from "../assets/technology/image-launch-vehicle-landscape.jpg"
import techImage2Landscape from "../assets/technology/image-spaceport-landscape.jpg"
import techImage3Landscape from "../assets/technology/image-space-capsule-landscape.jpg"

const TechnologyPage: React.FC = () => {
    const [activeTechnology, setActiveTechnology] = useState<"tech1" | "tech2" | "tech3">("tech1")

    const techItems = [
        { id: "tech1", number: "1"},
        { id: "tech2", number: "2" },
        { id: "tech3", number: "3" },
    ];

    const techCarrier: Record<string, Technology> = {
        tech1: {
            header:"THE TERMINOLOGY",
            name:"LAUNCH VEHICLE",
            image: `${techImage1}`,
            description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle\nused to carry a payload from Earth's surface to space, usually\nto Earth orbit or beyond. Our WEB-X carrier rocket is the most\npowerful in operation. Standing 150 metres tall, it's quite an\nawe-inspiring sight on the launch pad!",
        },
        tech2: {
            header:"THE TERMINOLOGY",
            name:"SPACEPORT",
            image: `${techImage2}`,
            description: "A spaceport or cosmodrome is a site for launching (or\nreceiving) spacecraft, by analogy to the seaport for ships or\nairport for aircraft. Based in the famous Cape Canaveral, our\nspaceport is ideally situated to take advantage of the Earth's\nrotation for launch.",
        },
        tech3: {
            header:"THE TERMINOLOGY",
            name:"SPACE CAPSULE",
            image: `${techImage3}`,
            description: "A space capsule is an often-crewed spacecraft that uses\na blunt-body reentry capsule to reenter the Earth's atmosphere\nwithout wings. Our capsule is where you'll spend your time\nduring the flight. It includes a space gym, cinema, and plenty of\nother activities to keep you entertained.",
        },
    };

    const currentTechnology = techCarrier[activeTechnology];

    const landscapeImages: Record<string, string> = {
    tech1: techImage1Landscape,
    tech2: techImage2Landscape,
    tech3: techImage3Landscape,
    };

    return (
        <div className="overflow-hidden">
            <div className="mt-8 md:mt-20 px-4 md:px-10 flex gap-2">
                <span className="text-gray-300/50 text-lg md:text-xl">03</span>
                <h2 className="text-lg md:text-xl text-gray-300 tracking-widest">SPACE LAUNCH 101</h2>
            </div>

            <div className="lg:hidden">
                <div className="mt-8 mb-8 flex justify-center">
                    <img 
                        src={landscapeImages[activeTechnology]} 
                        alt={currentTechnology.name}
                        className="w-full h-60"
                    />
                </div>

                {/* mobile/tablet */}
                <nav aria-label="theTech" className='flex justify-center mb-8'>
                    <ul className='flex gap-4 md:gap-6'>
                        {techItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => {
                                        console.log("Clicked:", item.id);
                                        setActiveTechnology(item.id as "tech1" | "tech2" | "tech3");
                                    }}
                                    className={`flex items-center justify-center text-lg md:text-xl border-2 rounded-full h-10 w-10 md:h-12 md:w-12 font-bold transition-all ${
                                        activeTechnology === item.id 
                                            ? "border-white text-black bg-white" 
                                            : "border-gray-300 text-white/60 hover:text-white hover:border-white"
                                    }`}
                                >
                                    {item.number}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-lg md:text-xl text-gray-100/50 mb-4 tracking-wide">
                        {currentTechnology.header}
                    </h2>
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-6 ">
                        {currentTechnology.name}
                    </h1>
                    <p className="font-barlow text-[#D0D6F9] text-base md:text-lg leading-relaxed px-4">
                        {currentTechnology.description}
                    </p>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block">
                {currentTechnology && (
                    <div className="flex items-center justify-between gap-12 max-w-6xl mx-auto mt-12">
                        <div className="flex gap-12 flex-1">
                            <nav aria-label="theTech">
                                <ul className='flex flex-col gap-6'>
                                    {techItems.map((item) => (
                                        <li key={item.id}>
                                            <button
                                                onClick={() => {
                                                    console.log("Clicked:", item.id);
                                                    setActiveTechnology(item.id as "tech1" | "tech2" | "tech3");
                                                }}
                                                className={`flex items-center justify-center text-xl border-2 rounded-full h-16 w-16 font-bold transition-all ${
                                                    activeTechnology === item.id 
                                                        ? "border-white text-black bg-white" 
                                                        : "border-gray-300 text-white/60 hover:text-white hover:border-white"
                                                }`}
                                            >
                                                {item.number}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            <div className="flex-1 max-w-lg">
                                <h2 className="text-2xl text-gray-100/50 mb-4 tracking-wide">
                                    {currentTechnology.header}
                                </h2>
                                <h1 className="text-4xl font-bold text-white mb-6 uppercase tracking-widest">
                                    {currentTechnology.name}
                                </h1>
                                <p className="font-barlow text-[#D0D6F9] text-sm leading-relaxed preserve-newlines">
                                    {currentTechnology.description}
                                </p>
                            </div>
                        </div>

                        <div className="flex-1 flex justify-end">
                            <img 
                                src={currentTechnology.image} 
                                alt={currentTechnology.name}
                                className="max-w-full h-auto"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TechnologyPage;