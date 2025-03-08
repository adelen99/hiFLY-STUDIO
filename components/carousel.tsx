"use client";
import { useEffect, useRef, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export function CarouselPortofoliu() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Sample video URLs - replace with your actual videos
  const videos = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ];

  // Set up the carousel API and track the current slide
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    // Call once to set initial index
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Control video playback based on active slide
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === currentIndex) {
        video.play().catch((err) => console.log("Video play error:", err));
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [currentIndex]);

  return (
    <Carousel
      setApi={setApi}
      className="w-full max-w-7xl sm:p-2 p-4"
      opts={{
        align: "center",
        loop: true,
      }}
    >
      <CarouselContent className="-ml-4 ">
        {videos.map((videoSrc, index) => (
          <CarouselItem
            key={index}
            className="pl-4 md:basis-1/2 lg:basis-2/5 transition-all duration-300"
          >
            <div className="p-1">
              <Card
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? "scale-100 z-10"
                    : "scale-[0.85] opacity-70"
                }`}
              >
                <CardContent className="p-0 overflow-hidden aspect-[2/3]">
                  <video
                    src={videoSrc}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                    loop
                  >
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-semibold bg-background/80 p-2 rounded">
                      {index + 1}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="sm:left-0 left-6 " />
      <CarouselNext className="sm:right-0 right-6" />
    </Carousel>
  );
}
