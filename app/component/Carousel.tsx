import { Suspense, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { images } from "../lib/image_gallery";
import { cn } from "../utils/cn";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const interval = 3000;

  /* Create an array of dots with the same length as images */
  const dots = Array.from({ length: images.length }, (_, index) => index);

  /* Function that changes the slide to the next one. */
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  /* Function that changes the slide to the next one. */
  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  /* Function that changes the slide to the next one. */
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  /* Automatically change the slide every 3 seconds */
  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, goToNext, interval]);

  return (
    <div>
      <h2 className="text-balance pb-2 font-semibold">
        Some of my latest recommendations from clients I have worked with:
      </h2>
      <div className="relative mx-auto h-[19rem] w-full overflow-hidden rounded-md md:h-[19rem] md:w-[80%]">
        <Suspense>
          <div className="relative size-full">
            {images.map(({ src, title, text }, index) => (
              /* Slides */
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="relative flex h-full w-full flex-col bg-slate-800/50 pt-4 md:gap-2">
                  <Image
                    src={src}
                    alt={`Slide ${src}`}
                    priority
                    height={300}
                    width={250}
                    className="mx-auto h-32 w-32 rounded-full object-cover object-center"
                  />
                  <h3 className="text-center font-semibold">{title}</h3>
                  <p className="text-balance text-center">
                    <span className="font-quicksand absolute left-1 text-[5rem] text-slate-500 md:left-28">
                      &quot;
                    </span>
                    {text}
                  </p>
                </div>

                {/* Dots */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                  {dots.map((dot) => (
                    <button
                      key={dot}
                      className={`mx-1 size-3 rounded-full transition-colors duration-300 ${currentIndex === dot ? "bg-orange-700" : "bg-gray-400 hover:bg-gray-500"}`}
                      onClick={() => goToSlide(dot)}
                    ></button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Suspense>

        {/* Left Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-900 p-2 text-white"
        >
          <span aria-hidden="true"></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </button>

        {/* Right Arrows */}
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-900 p-2 text-white"
        >
          <span aria-hidden="true"></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
