import { useState } from "react";
import Navbar from "./Navbar";
import DestinationPage from "./Destinationpage";
import CrewPage from "./Crewpage";
import TechnologyPage from "./Technologypage";
import BackgroundImage from "../assets/home/background-home-desktop.jpg";
import DestinationImage from "../assets/destination/background-destination-desktop.jpg";
import crewImage from "../assets/crew/background-crew-desktop.jpg";
import techImage from "../assets/technology/background-technology-desktop.jpg";

const SpacePage: React.FC = () => {
  const [section, setSection] = useState<
    "mainHome" | "location" | "theCrew" | "tech"
  >("mainHome");

  const renderPageContent = () => {
    switch (section) {
      case "mainHome":
        return (
          <>
            <div className="lg:hidden flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-4 text-center">
              <div className="mb-12 md:mb-16">
                <h2 className="font-barlow-condensed text-sm  md:text-lg text-gray-300 mb-4 md:mb-6">
                  SO, YOU WANT TO TRAVEL TO
                </h2>
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 md:mb-8">
                  SPACE
                </h1>
                <p className="font-barlow text-[#D0D6F9] text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed px-2">
                  Let's face it; if you want to go to space, you might as well
                  genuinely go to outer space and not hover kind of on the edge of
                  it. Well sit back, and relax because we'll give you a truly out
                  of this world experience!
                </p>
              </div>
              
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/10 flex items-center justify-center hover:bg-gray-200/20 transition-all duration-300">
                <button onClick={() => setSection("location")} className="bg-white text-black w-28 h-28 md:w-36 md:h-36 rounded-full text-sm md:text-lg font-semibold hover:bg-gray-200/70 transition-colors cursor-pointer">
                  EXPLORE
                </button>
              </div>
            </div>

            {/* Desktop Layout - Side by side */}
            <div className="hidden lg:flex py-20 gap-[40%] items-end">
              <div className="flex flex-col mt-[15%]">
                <h2 className="text-xl text-gray-300 mb-4">
                  SO, YOU WANT TO TRAVEL TO
                </h2>
                <h1 className="text-8xl font-bold text-white mb-6">SPACE</h1>
                <p className="font-barlow text-[#D0D6F9] max-w-xl mx-auto mb-12 leading-relaxed">
                  Let's face it; if you want to go to space, you might as well
                  genuinely go to outer space and not hover kind of on the edge of
                  it. Well sit back, <br/> and relax because we'll give you a truly out
                  of this world experience!
                </p>
              </div>
              <div className="w-90 h-90 rounded-full bg-white/10 flex items-center justify-center hover:bg-gray-200/20">
                <button onClick={() => setSection("location")} className="bg-white text-black w-40 h-40 rounded-full text-lg font-semibold hover:bg-gray-200/70 transition-colors cursor-pointer">
                  EXPLORE
                </button>
              </div>
            </div>
          </>
        );

      case "location":
        return <DestinationPage />;

      case "theCrew":
        return <CrewPage />;

      case "tech":
        return <TechnologyPage />;

      default:
        return null;
    }
  };

  const getBackgroundImage = () => {
    switch (section) {
      case "mainHome":
        return BackgroundImage;
      case "location":
        return DestinationImage;
      case "theCrew":
        return crewImage;
      case "tech":
        return techImage;
      default:
        return BackgroundImage;
    }
  };

  const backgroundImage = getBackgroundImage();

  return (
    <>
      <div
        className="min-h-screen bg-no-repeat bg-cover bg-center"
        style={
          backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}
        }
      >
        <div className="absolute top-0 left-0 right-0 z-10 bg-transparent">
          <Navbar active={section} onSelect={setSection} />
        </div>
        <div className="container mx-auto px-4 md:px-8 lg:px-12 pt-20">
          {renderPageContent()}
        </div>
      </div>
    </>
  );
};

export default SpacePage;