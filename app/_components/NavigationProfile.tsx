// components/NavigationProfile.tsx
import Image from "next/image";
import React from "react";

export default function NavigationProfile() {
  return (
    <div className="flex items-center gap-4 pb-8 border-b border-white/5">
      <div className="relative">
        <Image
          src="/icons/pfp.jpg" 
          alt="Julien Bigot"
          width={64}
          height={64}
          className="rounded-full aspect-square object-cover ring-2 ring-secondary/60 ring-offset-2 ring-offset-base-950"
        />
        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-base-950" />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white">Julien Bigot</h2>
        <p className="text-secondary text-sm font-medium">Développeur Front-end • Next.js / React</p>
      </div>
    </div>
  );
}