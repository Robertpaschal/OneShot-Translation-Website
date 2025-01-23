'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// TeamMemberCard: Component for individual team member cards
interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
  linkedin: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  description,
  image,
  linkedin,
}) => {
  return (
    <div
      className="w-full md:w-[387px] p-10 bg-white rounded-[45px] shadow-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.30)] shadow-[0px_8px_12px_6px_rgba(0,0,0,0.3)] border-b-4 border-[#13536c] border-r border-l border-t flex flex-col gap-4 overflow-hidden"
      style={{
        boxShadow:
          '0px 4px 4px rgba(0, 0, 0, 0.3), 0px 8px 12px 6px rgba(0, 0, 0, 0.2)',
      }}
    >
      {/* Profile section */}
      <div className="flex items-center gap-5">
        <div className="relative w-[105px] h-[105px]">
          <Image
            src={image}
            alt={`${name}'s profile`}
            className="rounded-full object-cover"
            fill
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#13536c]">{name}</h3>
          <p className="text-lg text-[#13536c]">{role}</p>
        </div>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 bg-[#13536c] rounded-full flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            width="16"
            height="16"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v5.5h-3v-10h3v1.268c.878-1.172 2.172-1.268 3.5-1.268 2.481 0 4.5 2.019 4.5 4.5v5.5z" />
          </svg>
        </a>
      </div>
      <div className="w-full border border-[#13536c]"></div>
      <p className="text-lg text-[#13536c]">{description}</p>
    </div>
  );
};

// HeaderSection: Component for the header section
const HeaderSection = () => (
  <div className="flex flex-col items-center md:flex-row md:items-start gap-8 px-6 py-7 md:px-12 md:py-0 md:ml-20 mt-10 mb-0">
    <div className="text-center md:text-left w-full md:w-auto">
      <div className="px-3 py-1 bg-[#bad3da] rounded-lg inline-block">
        <h1 className="text-[40px] font-bold text-[#13536c] font-dm-sans">
          Team
        </h1>
      </div>
    </div>
    <p className="text-[21px] text-[#13536c] w-[473px] font-bold text-center md:text-left font-['DM Sans'] capitalize w-full md:w-auto">
      Meet the skilled and experienced team <br />
      behind our successful strategies.
    </p>
  </div>
);

// TeamMembersSection: Component for the team members section
interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  linkedin: string;
}

interface TeamMembersSectionProps {
  teamMembers: TeamMember[];
  showAll: boolean;
  onToggleShowAll: () => void;
}

const TeamMembersSection: React.FC<TeamMembersSectionProps> = ({
  teamMembers,
  showAll,
  onToggleShowAll,
}) => (
  <div className="flex flex-wrap justify-center gap-12 px-8 py-8 md:px-20 md:py-12 mt-0 mb-12">
    {teamMembers
      .slice(0, showAll ? teamMembers.length : 6)
      .map((member, index) => (
        <TeamMemberCard
          key={index}
          name={member.name}
          role={member.role}
          description={member.description}
          image={member.image}
          linkedin={member.linkedin}
        />
      ))}
    <div className="w-full flex justify-center mt-8">
      <button
        onClick={onToggleShowAll}
        className="w-[269px] h-[68px] px-[35px] py-5 bg-[#13536c] rounded-[14px] justify-center items-center gap-2.5 inline-flex transition-transform transform hover:scale-105 active:scale-100"
        style={{
          boxShadow:
            '0px 4px 4px rgba(0, 0, 0, 0.3), 0px 8px 12px 6px rgba(0, 0, 0, 0.2)',
        }}
      >
        <div className="text-center text-[#a9c0c6] text-xl font-bold font-['DM Sans'] leading-7">
          {showAll ? 'Hide team members' : 'See all team'}
        </div>
      </button>
    </div>
  </div>
);

// Teams: Main component for rendering the team section
const Teams = () => {
  const [showAll, setShowAll] = useState(false);

  // Team members data
  const teamMembers = [
    {
      name: 'Samuel Marseille',
      role: 'CEO and Founder',
      description:
        '15+ years of experience in translation services. Collaborated with leading brands as a business coach for transforming visions into market-ready products.',
      image: '/images/home/team/samuel.png',
      linkedin: 'https://www.linkedin.com/in/samuel-marseille/',
    },
    {
      name: 'Jane Doe',
      role: 'Director of Operations',
      description:
        '7+ years of experience in project management and team leadership. Strong organizational and communication skills.',
      image: '/images/home/team/jane.png',
      linkedin: 'https://www.linkedin.com/in/jane-doe/',
    },
    {
      name: 'Michael Brown',
      role: 'Senior SEO Specialist',
      description:
        '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization.',
      image: '/images/home/team/michael.png',
      linkedin: 'https://www.linkedin.com/in/michael-brown/',
    },
    {
      name: 'Emily Johnson',
      role: 'PPC Manager',
      description:
        'Expert in pay-per-click advertising with proven success in driving targeted traffic and increasing conversions.',
      image: '/images/home/team/emily.png',
      linkedin: 'https://www.linkedin.com/in/emily-johnson/',
    },
    {
      name: 'Brian Williams',
      role: 'Social Media Specialist',
      description:
        '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement.',
      image: '/images/home/team/brian.png',
      linkedin: 'https://www.linkedin.com/in/brian-williams/',
    },
    {
      name: 'Sarah Kim',
      role: 'Content Creator',
      description:
        '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries.',
      image: '/images/home/team/sarah.png',
      linkedin: 'https://www.linkedin.com/in/sarah-kim/',
    },
    {
      name: 'David Smith',
      role: 'Graphic Designer',
      description:
        '6+ years of experience in graphic design. Expert in creating visually appealing designs for digital and print media.',
      image: '/images/home/team/david.png',
      linkedin: 'https://www.linkedin.com/in/david-smith/',
    },
    {
      name: 'Laura White',
      role: 'Marketing Strategist',
      description:
        '8+ years of experience in marketing strategy. Skilled in developing and implementing effective marketing campaigns.',
      image: '/images/home/team/laura.png',
      linkedin: 'https://www.linkedin.com/in/laura-white/',
    },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto mb-0">
      <HeaderSection />
      <div className="mt-0">
        <TeamMembersSection
          teamMembers={teamMembers}
          showAll={showAll}
          onToggleShowAll={() => setShowAll(!showAll)}
        />
      </div>
    </div>
  );
};

export default Teams;
