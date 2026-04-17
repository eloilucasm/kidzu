"use client";

import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Layout Components
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Home Components
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import AboutSection from "@/components/home/AboutSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import CounterSection from "@/components/home/CounterSection";
import ExtracurricularActivities from "@/components/home/ExtracurricularActivities";
import DailyScheduleSection from "@/components/home/DailyScheduleSection";
import BookAdmissionSection from "@/components/home/BookAdmissionSection";
import TeamSection from "@/components/home/TeamSection";
import FaqSection from "@/components/home/FaqSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import NewsSection from "@/components/home/NewsSection";
import BrandSection from "@/components/home/BrandSection";
import InstagramSection from "@/components/home/InstagramSection";

export default function HomePage() {
  useEffect(() => {
    // Definir Swiper globalmente para que o main.js legado o encontre
    if (typeof window !== "undefined") {
      (window as any).Swiper = Swiper;
      
      // Forçar a ocultação do preloader após a montagem do componente
      const preloader = document.querySelector(".preloader");
      if (preloader) {
        setTimeout(() => {
          (preloader as HTMLElement).style.display = "none";
        }, 1000); // 1 segundo de segurança
      }
    }
  }, []);

  return (
    <main>
      <div className="page-wrapper">
        {/* Back To Top */}
        <button id="back-top" className="back-to-top">
          <i className="fa-regular fa-arrow-up"></i>
        </button>

        {/* MouseCursor */}
        <div className="mouseCursor cursor-outer"></div>
        <div className="mouseCursor cursor-inner"></div>

        <Header />

        <div>
          <div>
            <HeroSection />
            <FeaturesSection />
            <AboutSection />
            <ProgramsSection />
            <WhyChooseUsSection />
            <CounterSection />
            <ExtracurricularActivities />
            <DailyScheduleSection />
            <BookAdmissionSection />
            <TeamSection />
            <FaqSection />
            <TestimonialSection />
            <NewsletterSection />
            <NewsSection />
            <BrandSection />
            <InstagramSection />
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
