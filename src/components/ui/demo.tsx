"use client";

import { WarpCarousel } from "@/components/ui/warp-carousel";

/** Warp Carousel filling the preview. */
export function WarpCarouselDemo() {
  return (
    <main
      className="relative h-screen min-h-[340px] w-full overflow-hidden"
      style={{ backgroundColor: "#0b0f17" }}
    >
      <WarpCarousel style={{ width: "100%", height: "100%" }} />
    </main>
  );
}

export default WarpCarouselDemo;
