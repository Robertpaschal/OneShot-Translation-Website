import Head from "next/head";
import ContactUs from "./components/home/contactUs";
import TestimonialCarousel from "./components/home/testimonials"; 

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

          {/* Testimonial Carousel Section */}
          <div className="w-full px-8">
            <TestimonialCarousel />
          </div>
        </div>

        {/* Contact Us Section */}
        <ContactUs />
      </div>
    </>
  );
}
