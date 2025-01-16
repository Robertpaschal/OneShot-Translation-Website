import Head from "next/head";
import ContactUs from "./components/home/contactUs";
import TestimonialCarousel from "./components/home/testimonials"; 
import Teams from "./components/home/team";
import WorkingProcess from "./components/home/workingProcess";
import CaseStudies from "./components/home/caseStudies";
import CTASection from "./components/home/CTA";
import Services from "./components/home/services";

const Section = ({ children }: { children: React.ReactNode }) => (
    <div className="w-full px-8">
        {children}
    </div>
);

export default function HomePage() {
    return (
        <>
            <Head>
                <title>OneShot Translation Home Page</title>
            </Head>
            <div className="w-full min-h-screen bg-white border border-white">
                {/* Main Content Section */}
                <div className="flex flex-col justify-center items-center min-h-screen">
                    {/* Other home page content */}
                    <h1 className="text-3xl font-bold mb-8">Welcome to OneShot Translation</h1>

                    {/* Services Section */}
                    <Section>
                        <Services />
                    </Section>

                    {/* CTA Section */}
                    <Section>
                        <CTASection />
                    </Section>

                    {/* Case Studies Section */}
                    <Section>
                        <CaseStudies />
                    </Section>

                    {/* Working Process Section */}
                    <Section>
                        <WorkingProcess />
                    </Section>
                    
                    {/* Teams Section */}
                    <Section>
                        <Teams />
                    </Section>

                    {/* Testimonial Carousel Section */}
                    <Section>
                        <TestimonialCarousel />
                    </Section>
                </div>

                {/* Contact Us Section */}
                <ContactUs />
            </div>
        </>
    );
}
