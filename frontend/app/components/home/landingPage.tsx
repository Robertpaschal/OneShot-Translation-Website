'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from '../../customStyles/landingPage.module.css';

const companyLogos = [
  "/svgs/HeroSection/Amazon-logo.svg",
  "/svgs/HeroSection/Dribble-logo.svg",
  "/svgs/HeroSection/HubSpot-logo.svg",
  "/svgs/HeroSection/Notion-logo.svg",
  "/svgs/HeroSection/Netflix-logo.svg",
  "/svgs/HeroSection/Zoom-logo.svg",
];

// Initially triple the logos to fill space
const initialLogos = [...companyLogos, ...companyLogos, ...companyLogos, ...companyLogos, ...companyLogos, ...companyLogos];

const LandingPage: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [logos, setLogos] = useState<string[]>(initialLogos);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    let animationFrame: number;

    const checkAndAddMoreLogos = () => {
      const logoWidth = container.children[0]?.clientWidth || 0;
      const visibleLogos = Math.floor(container.clientWidth / logoWidth);

      if (visibleLogos >= 12 && logos.length < 12 * 6) {
        setLogos((prevLogos) => [...prevLogos, ...companyLogos]);
      }
    };

    const startScrolling = () => {
      let scrollPosition = 0;

      const scroll = () => {
        scrollPosition += 1;
        if (scrollPosition >= container.scrollWidth / 2) {
          scrollPosition = -container.clientWidth;
        }
        container.scrollLeft = scrollPosition;
        animationFrame = requestAnimationFrame(scroll);
      };

      scroll();
    };

    checkAndAddMoreLogos();
    startScrolling();

    window.addEventListener('resize', checkAndAddMoreLogos);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', checkAndAddMoreLogos);
    };
  }, [logos]);

  return (
    <div className={styles.landingPage}>
      <section className={styles.hero}>
        {isMobile ? (
          // Mobile Layout (h1, logo, p, button)
          <div className={styles.heroText}>
            <h1>Michigan's premier multilingual communication service</h1>
            <div className={styles.heroImage}>
              <img
                src="/images/home/heroSection/hero-illustration.png"
                alt="Hero Illustration"
              />
            </div>
            <p>
              Our agency helps businesses by providing rapid, precise, and
              dependable translation and interpretation services by combining
              the best of human expertise with cutting-edge AI technology.
            </p>
            <Link href="/book-consultation">
              <button className={styles.consultationButton}>Book a Consultation</button>
            </Link>
          </div>
        ) : (
          <div className={styles.heroText}>
            <h1>Michigan's premier multilingual communication service</h1>
            <p>
              Our agency helps businesses by providing rapid, precise, and
              dependable translation and interpretation services by combining
              the best of human expertise with cutting-edge AI technology.
            </p>
            <Link href="/book-consultation">
              <button className={styles.consultationButton}>Book a Consultation</button>
            </Link>
          </div>
        )}

        {!isMobile && (
          <div className={styles.heroImage}>
            <img
              src="/images/home/heroSection/hero-illustration.png"
              alt="Hero Illustration"
            />
          </div>
        )}
      </section>

      {/* Footer with Carousel */}
      <footer className={styles.footer}>
        <div className={styles.carousel}>
          <div ref={carouselRef} className={styles.carouselTrack}>
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Company ${index % companyLogos.length + 1}`}
                className={styles.carouselLogo}
              />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
