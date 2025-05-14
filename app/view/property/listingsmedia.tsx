"use client";

import React, { MutableRefObject, useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react";
import { Image } from "@nextui-org/react";

interface Property {
  images: string; // This is assumed to be a stringified array of images
}

interface PropertyProps {
  properties: Property[];
}

// Thumbnail Plugin for Keen Slider
function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>,
): KeenSliderPlugin {
  return (slider) => {
    const removeActive = () => {
      slider.slides.forEach((slide) => slide.classList.remove("active"));
    };

    const addActive = (idx: number) => {
      slider.slides[idx]?.classList.add("active");
    };

    const addClickEvents = () => {
      slider.slides.forEach((slide, idx) => {
        const clickHandler = () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        };

        slide.addEventListener("click", clickHandler);
        slider.on("destroyed", () =>
          slide.removeEventListener("click", clickHandler),
        );
      });
    };

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;

        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

const ListingsMedia: React.FC<PropertyProps> = ({ properties }) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
  });

  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 5,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)],
  );

  const handlePrev = () => {
    instanceRef.current?.prev();
  };

  const handleNext = () => {
    instanceRef.current?.next();
  };

  useEffect(() => {
    return () => {
      instanceRef.current?.destroy();
    };
  }, []);

  const parsedImages: string[] = (() => {
    try {
      // Parsing the images for the first property in the list
      return JSON.parse(properties[0]?.images || "[]");
    } catch (error) {
      throw new Error(
        `Failed to fetch properties: ${error instanceof Error ? error.message : error}`,
      );
    }
  })();

  return (
    <div className="mb-6">
      {/* Main Slider */}
      <div className="relative">
        <div ref={sliderRef} className="keen-slider">
          {parsedImages.map((image, index) => (
            <div key={index} className="keen-slider__slide">
              <Image
                alt={`Slide ${index}`}
                className="w-full max-h-[250px] md:max-h-[600px] object-cover rounded-lg object-center overflow-hidden"
                src={ `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}properties/images/${image}`}
                width={1000}
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
          <button
            className="bg-blue-600 opacity-75 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition hover:opacity-100"
            onClick={handlePrev}
          >
            &#8249; {/* Left arrow */}
          </button>
          <button
            className="bg-blue-600 text-white opacity-75 py-2 px-4 rounded-full hover:bg-blue-700 transition hover:opacity-100"
            onClick={handleNext}
          >
            &#8250;
          </button>
        </div>
      </div>

      {/* Thumbnail Slider */}
      <div ref={thumbnailRef} className="keen-slider thumbnail mt-4">
        {parsedImages.map((image, index) => (
          <div key={index} className="keen-slider__slide">
            <Image
              alt={`Thumbnail ${index}`}
              className="h-[50px] lg:h-[100px] w-52 object-cover rounded-lg object-center overflow-hidden"
              src={ `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}properties/images/${image}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingsMedia;
