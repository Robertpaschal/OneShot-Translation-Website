'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define the social media links with SVGs
const socialMediaLinks = [
  {
    name: 'Facebook',
    url: 'https://facebook.com',
    svg: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        className="fill-[#5ccce4] transition-all duration-300 ease-in-out cursor-pointer hover:fill-[#1877f2]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M30.001 15.0913C30.001 6.75456 23.2873 0 15.001 0C6.71469 0 0.000976562 6.75456 0.000976562 15.0913C0.000976562 22.6369 5.44452 28.9047 12.6421 30V19.4726H8.83162V15.0913H12.6421V11.8053C12.6421 8.03245 14.88 5.90264 18.2671 5.90264C19.9607 5.90264 21.6542 6.2069 21.6542 6.2069V9.91886H19.7792C17.9042 9.91886 17.2994 11.0751 17.2994 12.2921V15.0913H21.4727L20.8074 19.4726H17.2994V30C24.4969 28.9047 30.001 22.6369 30.001 15.0913Z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    svg: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        className="fill-[#5ccce4] hover:fill-[#1da1f2] transition-all duration-300 ease-in-out cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Social icon">
          <circle cx="15.001" cy="15" r="15" />
          <path
            d="M21.9971 11.4915C22.6864 10.9745 23.3068 10.3541 23.7894 9.63028C23.1689 9.90602 22.4451 10.1128 21.7213 10.1818C22.4796 9.73369 23.0311 9.04435 23.3068 8.18267C22.6175 8.59628 21.8247 8.90648 21.032 9.07881C20.3427 8.35501 19.4121 7.94141 18.378 7.94141C16.379 7.94141 14.759 9.56135 14.759 11.5604C14.759 11.8362 14.7935 12.1119 14.8624 12.3876C11.8638 12.2153 9.17538 10.7677 7.3831 8.59628C7.0729 9.11328 6.90056 9.73369 6.90056 10.423C6.90056 11.6638 7.52097 12.7668 8.52051 13.4216C7.93457 13.3872 7.34863 13.2493 6.8661 12.9736V13.008C6.8661 14.7659 8.1069 16.2135 9.76132 16.5581C9.48558 16.6271 9.14091 16.696 8.83071 16.696C8.58944 16.696 8.38264 16.6615 8.14137 16.6271C8.58944 18.0747 9.93365 19.1087 11.5191 19.1432C10.2783 20.1082 8.72731 20.6942 7.03843 20.6942C6.72823 20.6942 6.45249 20.6597 6.17676 20.6252C7.76224 21.6592 9.65792 22.2452 11.7259 22.2452C18.378 22.2452 21.9971 16.7649 21.9971 11.974C21.9971 11.8017 21.9971 11.6638 21.9971 11.4915Z"
            className="fill-[#13536c] transition-all duration-300 ease-in-out"
          />
        </g>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    svg: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        className="fill-[#5ccce4] transition-all duration-300 ease-in-out cursor-pointer hover:fill-[#0077b5]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Social icon">
          <circle cx="15.001" cy="15" r="15" />
          <g
            id="linkedin"
            className="hover:fill-[#1da1f2] transition-all duration-300 ease-in-out"
          >
            <path
              d="M8.22251 22.0588H11.3066V12.0745H8.22251V22.0588Z"
              className="fill-[#13536c]"
            />
            <path
              d="M7.94214 8.88696C7.94214 9.87134 8.73653 10.6682 9.76457 10.6682C10.7459 10.6682 11.5403 9.87134 11.5403 8.88696C11.5403 7.90259 10.7459 7.05884 9.76457 7.05884C8.73653 7.05884 7.94214 7.90259 7.94214 8.88696Z"
              className="fill-[#13536c]"
            />
            <path
              d="M19.8113 22.0588H22.9421V16.5745C22.9421 13.9026 22.3347 11.7932 19.2038 11.7932C17.7085 11.7932 16.6805 12.637 16.2599 13.4338H16.2132V12.0745H13.2692V22.0588H16.3534V17.137C16.3534 15.8245 16.587 14.5588 18.2225 14.5588C19.8113 14.5588 19.8113 16.0588 19.8113 17.1838V22.0588Z"
              className="fill-[#13536c]"
            />
          </g>
        </g>
      </svg>
    ),
  },
];

const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );
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
      <div className="flex flex-col gap-10 md:gap-16 justify-center">
        {/* Medium and Smaller Screens Layout */}
        <div className="flex flex-col md:hidden items-center gap-6 text-center">
          {/* Logo */}
          <Image
            className="w-[150px] h-auto"
            src="/images/footer/FullLogo_Transparent_for_OneShot_Translation_2.png"
            alt="OneShot Translation"
            width={198}
            height={80}
          />
          {/* Navigation Links */}
          <div className="flex flex-col items-center gap-6 mb-6">
            {['About us', 'Services', 'Use Cases', 'Pricing', 'Blog'].map(
              link => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-[#bad3da] text-m font-black font-['DM Sans'] hover:text-white transition duration-300"
                >
                  {link}
                </Link>
              )
            )}
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-5">
            {socialMediaLinks.map(({ name, url, svg }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 relative"
              >
                {svg}
              </a>
            ))}
          </div>
        </div>

        {/* Larger Screens Layout */}
        <div className="hidden md:flex flex-wrap md:justify-between justify-center items-center gap-8 text-center md:text-left">
          {/* Logo */}
          <Image
            className="w-[150px] md:w-[198px] h-auto"
            src="/images/footer/FullLogo_Transparent_for_OneShot_Translation_2.png"
            alt="OneShot Translation"
            width={198}
            height={80}
          />

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row justify-center md:justify-start text-center items-center gap-6 md:gap-10">
            {['About us', 'Services', 'Use Cases', 'Pricing', 'Blog'].map(
              link => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-[#bad3da] text-sm md:text-lg font-black font-['DM Sans'] hover:text-white transition duration-300 "
                >
                  {link}
                </Link>
              )
            )}
          </div>

          {/* Social Media Icons */}
          <div className="flex md:justify-start justify-center gap-5">
            {socialMediaLinks.map(({ name, url, svg }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-[30px] md:h-[30px] relative"
              >
                {svg}
              </a>
            ))}
          </div>
        </div>

        {/* Contact and Subscription Section */}
        <div className="flex flex-col md:flex-row justify-between text-center md:text-left gap-6 md:gap-16">
          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <div className="px-4 py-2 bg-[#1da5cb] rounded-md">
              <div className="text-[#13536c] text-sm md:text-lg font-semibold font-['DM Sans']">
                Contact us:
              </div>
            </div>
            <div className="flex flex-col gap-3 text-white text-sm md:text-lg font-medium font-['DM Sans'] space-y-3 text-center md:text-left">
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
                onChange={e => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-[#13536c] text-[#bad3da] text-sm md:text-lg font-semibold font-['DM Sans'] rounded-md placeholder-[#bad3da] outline-none border border-[#13536c]"
              />
            </div>
            <button
              onClick={handleSubscription}
              className="px-4 py-2 bg-[#5ccce4] text-[#13536c] text-sm md:text-lg font-bold font-['DM Sans'] rounded-md transition duration-300 transform active:scale-95 hover:bg-[#1a8fa1] focus:ring-2 focus:ring-offset-2 focus:ring-[#5ccce4] border-2 border-[#5ccce4]"
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
            className="text-[#bad3da] text-sm md:text-lg font-semibold font-['DM Sans'] hover:text-white transition duration-300"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
