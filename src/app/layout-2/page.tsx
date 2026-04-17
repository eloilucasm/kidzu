"use client";

import React, { useEffect } from "react";
import Header2 from "@/components/layout/Header2";
import HeroSection from "@/components/home-v2/HeroSection";
import MarqueeSection from "@/components/home-v2/MarqueeSection";
import AboutSection from "@/components/home-v2/AboutSection";
import ProgramsSection from "@/components/home-v2/ProgramsSection";
import SchoolFacilitiesSection from "@/components/home-v2/SchoolFacilitiesSection";
import ChooseUsSection from "@/components/home-v2/ChooseUsSection";
import FoodKidsSection from "@/components/home-v2/FoodKidsSection";
import ExtraActivitiesSection from "@/components/home-v2/ExtraActivitiesSection";
import ValuesSection from "@/components/home-v2/ValuesSection";
import SpecialOfferSection from "@/components/home-v2/SpecialOfferSection";
import TeamSection from "@/components/home-v2/TeamSection";
import FaqSection from "@/components/home-v2/FaqSection";
import TestimonialSection from "@/components/home-v2/TestimonialSection";
import NewsSection from "@/components/home-v2/NewsSection";
import BrandSection from "@/components/home-v2/BrandSection";
import NewsletterSection from "@/components/home-v2/NewsletterSection";
import Footer from "@/components/layout/Footer";

export default function Layout2Page() {
  useEffect(() => {
    // Injetar a classe de fundo específica do layout 2
    document.body.classList.add("body-bg-2");
    return () => {
      document.body.classList.remove("body-bg-2");
    };
  }, []);

  return (
    <>
      <Header2 />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroSection />
            <MarqueeSection />
            <AboutSection />
            <ProgramsSection />
            <SchoolFacilitiesSection />
            <ChooseUsSection />
            <FoodKidsSection />
            <ExtraActivitiesSection />
            <ValuesSection />
            <SpecialOfferSection />
            <TeamSection />
            <FaqSection />
            <TestimonialSection />
            <NewsSection />
            <BrandSection />
            <NewsletterSection />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
