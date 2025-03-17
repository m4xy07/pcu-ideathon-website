'use client';
import { useState, useEffect } from "react";
import Balatro from "@/components/Balatro/Balatro";
import ModernAnimatedButtonVariant1 from "@/components/RaycastButton";
import Image from "next/image";

export const Hero = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="Home"
      className="h-[492px] md:h-[800px] flex items-center justify-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
    >
      <Balatro isRotate={false} mouseInteraction={false} pixelFilter={2000} />

      <div className="container absolute flex flex-col items-center justify-center h-full text-center">
        {/* Animated Image */}
        
        <div
          className={`h-72 w-72 flex items-center justify-center transition-opacity duration-1000 ${showContent ? "opacity-0" : "animate-scalePulse"}`}
        >
          <Image src="/images/Heist_Card.png" alt="Heist Card" width={1920} height={1080} className="mx-auto" />
        </div>

        {/* Fade-in Content */}
        <div
          className={`transition-all absolute duration-1000 delay-500 flex flex-col items-center justify-center h-full ${showContent ? "opacity-100 translate-y-2" : "opacity-0 translate-y-5"}`}
        >
          <h1 className="text-7xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
            EcoCred
          </h1>
          <p className="text-lg md:text-xl text-white/70 mt-5 max-w-xl">
            Incentivizing Recycling Through Technology
          </p>
          <div className="mt-5">
            <ModernAnimatedButtonVariant1 />
          </div>
        </div>
      </div>

      {/* Custom animation for scale pulse */}
      <style jsx>{`
        @keyframes scalePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-scalePulse {
          animation: scalePulse 2s ease-in-out;
        }
      `}</style>
    </section>
  );
};
