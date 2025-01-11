'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const socialMediaLinks = [
  { name: 'Facebook', url: 'https://facebook.com', icon: '/svgs/footer/facebook.svg' },
  { name: 'Twitter', url: 'https://twitter.com', icon: '/svgs/footer/twitter.svg' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: '/svgs/footer/linkedin.svg' },
];

const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
  const [email, setEmail] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleSubscription = () => {
    if (email.trim()) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div className="w-full bg-[#13536c] px-6 md:px-12 py-10 md:py-16 rounded-tl-[45px] rounded-tr-[45px] flex flex-col gap-10 max-w-screen-xl mx-auto">
      {/* Top Section */}
      <div className="flex flex-col gap-10 md:gap-16">
        <div className="flex flex-wrap justify-between items-center gap-8">
          {/* Logo */}
          <Image
            className="w-[150px] md:w-[198px] h-auto max"
            src="/images/footer/FullLogo_Transparent_for_OneShot_Translation_2.png"
            alt="OneShot Translation"
            width={198}
            height={80}
          />

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-start items-center gap-6 md:gap-10">
            {['About us', 'Services', 'Use Cases', 'Pricing', 'Blog'].map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-[#bad3da] text-sm md:text-lg font-black font-['DM Sans'] hover:text-white transition duration-300 "
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-start items-center gap-5">
            {socialMediaLinks.map(({ name, url, icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-[30px] md:h-[30px] relative"
              >
                <Image
                  src={icon}
                  alt={`${name} icon`}
                  className="w-full h-full bg-white rounded-full"
                  width={30}
                  height={30}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Contact and Subscription Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-16">
          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <div className="px-2 bg-[#1da5cb] rounded-md">
              <div className="text-[#13536c] text-sm md:text-lg font-medium font-['DM Sans']">
                Contact us:
              </div>
            </div>
            <div className="flex flex-col gap-3 text-white text-sm md:text-lg font-medium font-['DM Sans']">
              <div>Email: info@OneShotTranslation.com</div>
              <div>Phone: 555-567-8901</div>
              <div>
                Address: 1234 Main St
                <br />
                Moonstone City, Stardust State 12345
              </div>
            </div>
          </div>

          {/* Subscription Form */}
          <div className="w-full max-w-[675px] px-6 py-6 bg-[#1da5cb] rounded-lg flex flex-col md:flex-row justify-between items-center gap-4 sm:px-8 sm:py-8">
            <div className="flex-1 w-full md:w-auto">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-[#13536c] text-[#bad3da] text-sm md:text-lg font-semibold font-['DM Sans'] rounded-md placeholder-[#bad3da] outline-none border border-[#13536c]"
              />
            </div>
            <button
              onClick={handleSubscription}
              className="px-4 py-2 bg-[#5ccce4] text-[#13536c] text-sm md:text-lg font-semibold font-['DM Sans'] rounded-md transition duration-300 transform active:scale-95 hover:bg-[#1a8fa1] focus:ring-2 focus:ring-offset-2 focus:ring-[#5ccce4] border-2 border-[#5ccce4]"
            >
              Subscribe to news
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-4">
        <div className="w-full border-t border-white"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[#bad3da] text-sm md:text-lg font-semibold font-['DM Sans']">
            © {currentYear} OneShot Translation. All Rights Reserved.
          </span>
          <Link
          href="/privacy-policy"
           className="text-[#bad3da] text-sm md:text-lg font-semibold font-['DM Sans'] hover:text-white transition duration-300">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
