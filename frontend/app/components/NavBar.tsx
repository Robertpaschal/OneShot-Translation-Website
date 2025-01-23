'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import styles from '../customStyles/NavBar.module.css';

const NAV_ITEMS = ['About us', 'Services', 'Use Cases', 'Pricing', 'Blog'];

const getLinkFromLabel = (label: string): string => {
  return `/${label
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')}`;
};

const NavBar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isSticky, setIsSticky] = useState(false); // State to track sticky header
  const [activeItem, setActiveItem] = useState<string | null>(null);

  // Toggle the navigation bar visibility
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Handle scroll event to hide/show nav bar and make header sticky
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Scrolling direction detection
      if (currentScrollPos > prevScrollPos) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }

      // Update sticky state when the header reaches top
      if (currentScrollPos > 50) {
        // Arbitrary offset for sticky effect
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`${styles.header} ${scrollingDown ? styles.hideNav : ''} ${isSticky ? styles.stuck : ''}`}
    >
      <div className={styles.logoWrapper}>
        <Link href="/" passHref legacyBehavior>
          <a className={styles.logoLink}>
            <img
              className={styles.logo}
              src="/images/navbar/logo.png"
              alt="Company Logo"
            />
          </a>
        </Link>
      </div>
      <button
        className={styles.menuToggle}
        onClick={toggleNav}
        aria-label="Toggle menu"
      >
        {isNavOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="32"
            height="32"
            fill="currentColor"
          >
            <path
              d="M6 18L18 6M6 6l12 12"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="32"
            height="32"
            fill="currentColor"
          >
            <path
              d="M3 6h18M3 12h18m-18 6h18"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
      <nav
        className={`${styles.nav} ${styles.navContainer} ${isNavOpen ? styles.visible : styles.hidden}`}
      >
        {NAV_ITEMS.map(item => {
          const link = getLinkFromLabel(item);
          return (
            <Link
              key={item}
              href={link}
              className={`${styles.navItem} ${activeItem === item ? styles.active : ''}`}
              aria-current={activeItem === item ? 'page' : undefined}
              onClick={() => setActiveItem(item)}
            >
              <span>{item}</span>
              {activeItem === item && <div className={styles.activeDivider} />}
            </Link>
          );
        })}
        <Link href="/request-quote">
          <div className={styles.quoteButton}>Request a Quote</div>
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
