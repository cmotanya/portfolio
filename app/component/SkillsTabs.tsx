import { useEffect, useState } from "react";
import Image from "next/image";
import { tabImg } from "../lib/image_gallery";

function SkillsTab() {
  const [activeTab, setActiveTab] = useState(0);
  const [imgLoad, setImageLoad] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const delayLoading = async () => {
      setShowLoader(false);
      await delay(500);
      setShowLoader(true);
    };

    delayLoading();
  }, [activeTab]);

  return (
    <div className="flex w-full flex-col items-center justify-center rounded-lg bg-gray-900/50 px-2 pb-4 md:px-0">
      {/* Tab navigation */}
      <nav className="flex flex-shrink-0 gap-3 md:space-x-9">
        {tabImg.map((tab, index) => (
          <button
            key={index}
            className={`active:outline-primaryColor focus-within:bg-primaryColor/40 focus-within:outline-primaryColor hover:outline-primaryColor/30 my-8 rounded-full px-6 py-2 text-stone-100 outline-none outline-gray-800/50 transition-colors duration-100 active:bg-gray-800/50 ${index === activeTab ? "outline-offset-primaryColor outline-primaryColor/30 bg-gray-800 outline-offset-2" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.name}
          </button>
        ))}
      </nav>

      {/* Tab content */}
      <div className="w-full md:w-[80%]">
        <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-3">
          {tabImg[activeTab].images.map(
            (image, index) =>
              image && (
                <div
                  key={index}
                  className={`relative h-[11rem] w-full overflow-hidden md:h-[15rem] ${imgLoad ? "translate-y-0 opacity-100 delay-100" : "translate-y-4 opacity-0"}`}
                >
                  {!showLoader ? (
                    <SkeletonLoader />
                  ) : (
                    <Image
                      src={image}
                      alt={`${activeTab}-${index}`}
                      priority
                      fill
                      sizes="100vw 15rem, 30rem"
                      className="absolute h-full w-full origin-center transform overflow-hidden rounded-md object-cover object-center transition-transform duration-300 ease-in-out hover:scale-110 hover:overflow-hidden"
                      onLoad={() => setImageLoad(true)}
                    />
                  )}
                </div>
              ),
          )}
        </div>
      </div>
    </div>
  );
}

function SkeletonLoader() {
  return (
    <div className="h-[15rem] w-full animate-pulse overflow-hidden rounded-md bg-gray-400 md:h-[15rem]"></div>
  );
}

export default SkillsTab;
