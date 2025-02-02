import { Metadata } from "next";

import LandingHero from "@/components/LandingHero";
import { LandingSectionInfo } from "@/components/LandingSectionInfo";
import { LandingFeatures } from "@/components/LandingFeatures";
import { LandingTestimonials } from "@/components/LandingTestimonials";
import { LandingFaqs } from "@/components/LandingFaqs";

export const metadata: Metadata = {
    title: 'Wealthy AI',
    description: 'Your companion for all your personal finances'
}

export default async function Page() {
    return (
        <div className="mx-auto py-20">
            <section id="hero" className="min-h-screen bg-[radial-gradient(hsl(0, 72%, 65%, 40%), hsl(24, 62%, 73%, 40%), hsl(var(--background))_60%)] items-center justify-center text-center text-balance flex flex-col gap-8 px-4">
                 <LandingHero />
            </section>
            <section id="featured-section">
                <LandingSectionInfo />
             </section>
            <section id="features">
                <LandingFeatures />
            </section>
            <section id="testimonials">
                <LandingTestimonials />
            </section>
            <section id="faq">
                <LandingFaqs />
            </section>
        </div>
    )
}