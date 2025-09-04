import type { Destination } from "../types/space"
import { useState } from "react"
import moonImage  from "../assets/destination/image-moon.png"
import marsImage from "../assets/destination/image-mars.png"
import europaImage from "../assets/destination/image-europa.png"
import titanImage from "../assets/destination/image-titan.png"

const DestinationPage: React.FC = () => {
    const [activeDestination, setActiveDestination] = useState<"destination1" | "destination2" | "destination3" | "destination4">("destination1")

    const menuItems = [
        { id: "destination1", name: "Moon" },
        { id: "destination2", name: "Mars" },
        { id: "destination3", name: "Europa" },
        { id: "destination4", name: "Titan" }
    ];

    const destinations: Record<string, Destination> = {
        destination1: {
            name: "Moon",
            description: "See our planet as you've never seen it before. A perfect\n relaxing trip away to help regain perspective and come\n back refreshed. While you're there, take in some history\n by visiting the Luna 2 and Apollo 11 landing sites.",
            image: moonImage,
            distance: "384,400 km",
            travelTime: "3 days"
        },
        destination2: {
            name: "Mars",
            description: "Don't forget to pack your hiking boots. You'll need them to\ntackle Olympus Mons, the tallest planetary mountain in\n our solar system. It's two and a half times the size of\n Everest!",
            image: marsImage,
            distance: "225 mil. km",
            travelTime: "9 months"
        },
        destination3: {
            name: "Europa",
            description: "The smallest of the four Galilean moons orbiting Jupiter,\nEuropa is a winter lover's dream. With an icy surface, it's\nperfect for a bit of ice skating, curling, hockey, or simple\nrelaxation in your snug wintery cabin.",
            image: europaImage,
            distance: "628 mil. km",
            travelTime: "3 years"
        },
        destination4: {
            name: "Titan",
            description: "The only moon known to have a dense atmosphere other\nthan Earth, Titan is a home away from home (just a few\nhundred degrees colder!). As a bonus, you get striking\nviews of the Rings of Saturn.",
            image: titanImage,
            distance: "1.6 bil. km",
            travelTime: "7 years"
        }
    };

    // Get the currently selected destination
    const currentDestination = destinations[activeDestination];

    return (
        <div className="overflow-hidden">
            <div className="mt-8 md:mt-20 px-4 md:px-10 flex gap-2">
                <span className="text-gray-300/50 text-lg md:text-xl">01</span>
                <h2 className="text-lg md:text-xl text-gray-300 tracking-widest">PICK YOUR DESTINATION</h2>
            </div>

            {/* Mobile/Tablet Layout */}
            <div className="lg:hidden flex flex-col items-center px-4">
                <div className="mt-8 mb-8">
                    <img 
                        src={currentDestination.image} 
                        alt={currentDestination.name}
                        className="w-48 md:w-64 mx-auto"
                    />
                </div>

                <nav aria-label="destinations" className='mb-8'>
                    <ul className='flex gap-4 md:gap-8'>
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => {
                                        console.log("Clicked:", item.id);
                                        setActiveDestination(item.id as "destination1" | "destination2" | "destination3" | "destination4");
                                    }}
                                    className={`px-2 md:px-4 py-2 text-sm uppercase tracking-widest transition-colors ${
                                        activeDestination === item.id 
                                            ? "border-b-2 border-white text-white" 
                                            : "text-gray-400 hover:text-gray-200 hover:border-b-2 hover:border-gray-400"
                                    }`}
                                >
                                    {item.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="text-center max-w-lg">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 uppercase">
                        {currentDestination.name}
                    </h1>
                    
                    <p className="font-barlow text-[#D0D6F9] text-base md:text-lg mb-8 leading-relaxed px-4 ">
                        {currentDestination.description}
                    </p>
                    
                    <hr className="border-gray-100/20 mb-6 mx-4" />
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-8 px-4">
                        <div>
                            <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-3">
                                Avg. Distance
                            </h3>
                            <p className="text-white text-xl md:text-2xl font-bold uppercase">
                                {currentDestination.distance}
                            </p>
                        </div>
                        
                        <div>
                            <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-3">
                                Est. Travel Time
                            </h3>
                            <p className="text-white text-xl md:text-2xl font-bold uppercase">
                                {currentDestination.travelTime}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block">
                <nav aria-label="destinations" className='flex ml-[50%] mb-2'>
                    <div className='flex items-center'>
                        <ul className='flex justify-between items-center mt-20 cursor-pointer'>
                            {menuItems.map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => {
                                            console.log("Clicked:", item.id);
                                            setActiveDestination(item.id as "destination1" | "destination2" | "destination3" | "destination4");
                                        }}
                                        className={`px-4 py-2 text-sm uppercase tracking-widest transition-colors ${
                                            activeDestination === item.id 
                                                ? "border-b-2 border-white text-white" 
                                                : "text-gray-400 hover:text-gray-200 hover:border-b-2 hover:border-gray-400"
                                        }`}
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
                
                {currentDestination && (
                    <div className="flex items-center justify-between gap-12 max-w-6xl mx-auto">
                        <div className="flex-1 text-center">
                            <img 
                                src={currentDestination.image} 
                                alt={currentDestination.name}
                                className=""
                            />
                        </div>
                        
                        <div className="flex-1 text-left -ml-3">
                            <h1 className="text-7xl font-bold text-white mb-6 uppercase">
                                {currentDestination.name}
                            </h1>
                            
                            <p className="font-barlow text-[#D0D6F9] text-sm mb-12 leading-relaxed preserve-newlines">
                                {currentDestination.description}
                            </p>
                            
                            <hr className="border-gray-100/20 mb-4" />
                            
                            <div className="flex gap-12">
                                <div>
                                    <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-3">
                                        Avg. Distance
                                    </h3>
                                    <p className="text-white text-2xl font-bold uppercase">
                                        {currentDestination.distance}
                                    </p>
                                </div>
                                
                                <div>
                                    <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-3">
                                        Est. Travel Time
                                    </h3>
                                    <p className="font-bellefair text-white text-xl font-thin">
                                        {currentDestination.travelTime}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DestinationPage;