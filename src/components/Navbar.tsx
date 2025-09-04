import React, { useState } from 'react';
import Logo from '../assets/shared/logo.svg'

interface NavbarProps {
    active?: string;
    onSelect?: (section: "mainHome" | "location" | "theCrew" | "tech") => void;
}

const Navbar: React.FC<NavbarProps> = ({ active = "mainHome", onSelect }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const menuItems = [
        { id: "mainHome", label: "00 HOME" },
        { id: "location", label: "01 DESTINATION" },
        { id: "theCrew", label: "02 CREW" },
        { id: "tech", label: "03 TECHNOLOGY" }
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuClick = (itemId: string) => {
        console.log("Clicked:", itemId);
        onSelect?.(itemId as "mainHome" | "location" | "theCrew" | "tech");
        setIsMenuOpen(false); 
    };

    return (
        <>
            <nav aria-label="main" className='flex justify-between items-center px-4 md:px-6 lg:px-8 py-4 relative'>
                <img 
                    src={Logo} 
                    alt='space logo' 
                    className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                />
                
                <hr className='hidden xl:block absolute left-25 top-1/2 transform w-[90%] border-white/50' />
                
                {/* Tablet & Desktop Menu */}
                <div className='hidden sm:block'>
                    <ul className='flex items-center bg-white/10 backdrop-blur-md px-4 md:px-6 lg:px-8 py-4 space-x-3 md:space-x-6 lg:space-x-8'>
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => handleMenuClick(item.id)}
                                    className={`font-barlow-condensed text-sm md:text-sm font-light tracking-wide transition-all duration-300 ${
                                        active === item.id 
                                            ? "text-white border-b-2 border-white pb-2" 
                                            : "text-white/75 hover:text-white hover:border-b-2 hover:border-white/50 pb-2"
                                    }`}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile */}
                <button
                    onClick={toggleMenu}
                    className="sm:hidden text-white p-2 z-50 relative"
                    aria-label="Toggle navigation menu"
                >
                    {isMenuOpen ? (
                        <div className="w-6 h-6 flex items-center justify-center">
                            <span className="text-xl">✕</span>
                        </div>
                    ) : (
                        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                            <span className="w-6 h-0.5 bg-white"></span>
                            <span className="w-6 h-0.5 bg-white"></span>
                            <span className="w-6 h-0.5 bg-white"></span>
                        </div>
                    )}
                </button>
            </nav>

            {/* Mobile Menu */}
            <div className={`
                sm:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out
                ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
            `}>
                <div 
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    onClick={toggleMenu}
                />
                
                {/* Menu Panel */}
                <div className={`
                    absolute right-0 top-0 h-full w-64 bg-white/10 backdrop-blur-md
                    transform transition-transform duration-300 ease-in-out
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}>
                    <div className="pt-20 px-6">
                        <ul className="space-y-6">
                            {menuItems.map((item, index) => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => handleMenuClick(item.id)}
                                        className={`
                                            block w-full text-left text-lg font-light tracking-wider
                                            transition-all duration-300 py-3 border-b border-white/10
                                            ${active === item.id 
                                                ? "text-white" 
                                                : "text-white/75 hover:text-white hover:translate-x-2"
                                            }
                                        `}
                                        style={{
                                            animationDelay: isMenuOpen ? `${index * 100}ms` : '0ms'
                                        }}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;