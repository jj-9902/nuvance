"use client";

import CoreValueSection from "./sections/core-value";
import FooterSection from "./sections/footer";
import HeroSection from "./sections/hero";
import MembersSection from "./sections/members";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <MembersSection />
      <CoreValueSection />
      <FooterSection />
    </div>
  );
}
