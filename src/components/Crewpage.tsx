import { useState } from "react"
import type { Crew } from "../types/space"
import commanderImage from "../assets/crew/image-douglas-hurley.png"
import pilotImage from "../assets/crew/image-victor-glover.png"
import specialistImage from "../assets/crew/image-mark-shuttleworth.png"
import engineerImage from "../assets/crew/image-anousheh-ansari.png"

const CrewPage: React.FC = () => {
    const [activeCrew, setActiveCrew] = useState<"crew1" | "crew2" | "crew3" | "crew4">("crew1")

    const crewItems = [
        { id: "crew1" },
        { id: "crew2" },
        { id: "crew3" },
        { id: "crew4" }
    ];

    const crewMembers: Record<string, Crew> = {
        crew1: {
            name: "Douglas Hurley",
            image: `${commanderImage}`,
            role: "Commander",
            bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        },
        crew2: {
            name: "Mark Shuttleworth",
            image: `${specialistImage}`,
            role: "Mission Specialist",
            bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        },
        crew3: {
            name: "Victor Glover",
            image: `${pilotImage}`,
            role: "Pilot",
            bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
        },
        crew4: {
            name: "Anousheh Ansari",
            image: `${engineerImage}`,
            role: "Engineer",
            bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
        },
    };

    const currentCrewMember = crewMembers[activeCrew];

    return (
        <div className="overflow-hidden min-h-screen">
            <div className="mt-8 md:mt-20 md:px-10 flex gap-2">
                <span className="text-gray-300/50 text-lg md:text-xl">02</span>
                <h2 className="text-lg md:text-xl text-gray-300 tracking-widest">MEET YOUR CREW</h2>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden px-4">
                <div className="text-center max-w-2xl mx-auto mt-8 mb-8">
                    <p className="text-gray-100/50 text-lg md:text-xl font-bold uppercase mb-3 md:mb-4 tracking-wide">
                        {currentCrewMember.role}
                    </p>
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 uppercase">
                        {currentCrewMember.name}
                    </h1>
                    <p className="font-barlow text-[#D0D6F9] text-sm md:text-base leading-relaxed px-4 mb-8">
                        {currentCrewMember.bio}
                    </p>
                </div>

                <nav aria-label="crew navigation" className='flex justify-center mb-8'>
                    <ul className='flex space-x-4'>
                        {crewItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => {
                                        console.log("Clicked:", item.id);
                                        setActiveCrew(item.id as "crew1" | "crew2" | "crew3" | "crew4");
                                    }}
                                    className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-colors ${
                                        activeCrew === item.id 
                                            ? "bg-white" 
                                            : "bg-gray-500 hover:bg-gray-300"
                                    }`}
                                />
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex justify-center">
                    <div className="relative w-full max-w-sm md:max-w-md">
                        <img 
                            src={currentCrewMember.image} 
                            alt={currentCrewMember.name}
                            className="w-full h-auto object-contain mx-auto"
                        />
                    </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block">
                {currentCrewMember && (
                    <div className="flex items-end justify-between px-20 mt-8 h-[calc(100vh-200px)]">
                        
                        <div className="flex-1 max-w-lg self-center">
                            <p className="text-gray-100/50 text-2xl font-bold uppercase mb-4">
                                {currentCrewMember.role}
                            </p>

                            <h1 className="text-4xl font-bold text-white mb-6 uppercase">
                                {currentCrewMember.name}
                            </h1>

                            <p className="font-barlow text-[#D0D6F9] text-lg leading-relaxed mb-8">
                                {currentCrewMember.bio}
                            </p>

                            <nav aria-label="crew navigation" className='mt-15'>
                                <ul className='flex space-x-4'>
                                    {crewItems.map((item) => (
                                        <li key={item.id}>
                                            <button
                                                onClick={() => {
                                                    console.log("Clicked:", item.id);
                                                    setActiveCrew(item.id as "crew1" | "crew2" | "crew3" | "crew4");
                                                }}
                                                className={`w-2 h-2 rounded-full transition-colors ${
                                                    activeCrew === item.id 
                                                        ? "bg-white" 
                                                        : "bg-gray-500 hover:bg-gray-300"
                                                }`}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        <div className="flex-1 flex justify-end items-end h-full max-w-md">
                            <div className="relative w-full h-full max-h-[500px]">
                                <img 
                                    src={currentCrewMember.image} 
                                    alt={currentCrewMember.name}
                                    className="absolute bottom-0 right-25 max-h-full w-auto object-contain object-bottom"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CrewPage;