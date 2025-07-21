'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export function Contact() {
  // Contact information
  const contactInfo = {
    name: 'Md A Rahman',
    email: 'ara02434@ttu.edu',
    phone: '+1 (806) 239-9112',
    handle: '@ronstagrram',
    socials: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/md-a-rahman-558519194',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/ronyrahmaan',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/ronstagrram/',
      },
      {
        name: 'Research Profile',
        url: 'https://github.com/ronyrahmaan',
      },
      {
        name: 'Texas Tech University',
        url: 'https://www.depts.ttu.edu/cs/',
      },
    ],
  };

  // Function to handle opening links
  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="mx-auto mt-8 w-full">
      <div className="bg-accent w-full overflow-hidden rounded-3xl px-6 py-8 font-sans sm:px-10 md:px-16 md:py-12">
        {/* Header Section */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
            Let's Collaborate
          </h2>
          <span className="mt-2 sm:mt-0">
            {contactInfo.handle}
          </span>
        </div>

        {/* Contact Section */}
        <div className="mt-8 flex flex-col md:mt-10">
          <div
            className="group mb-5 cursor-pointer"
            onClick={() => openLink(`mailto:${contactInfo.email}`)}
          >
            <div className="flex items-center gap-1">
              <span className="text-base font-medium text-blue-500 hover:underline sm:text-lg">
                {contactInfo.email}
              </span>
              <ChevronRight className="h-5 w-5 text-blue-500 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>

          {/* Phone */}
          <div className="group mb-5 cursor-pointer">
            <div className="flex items-center gap-1">
              <span className="text-base font-medium text-gray-600 hover:underline sm:text-lg">
                {contactInfo.phone}
              </span>
            </div>
          </div>

          {/* Professional Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-5 sm:gap-x-8">
            {contactInfo.socials.map((social) => (
              <button
                key={social.name}
                className="text-muted-foreground hover:text-foreground cursor-pointer text-sm transition-colors"
                onClick={() => openLink(social.url)}
                title={social.name}
              >
                {social.name}
              </button>
            ))}
          </div>

          {/* Collaboration Note */}
          <div className="mt-8 rounded-2xl bg-neutral-100 dark:bg-neutral-800 p-6">
            <h3 className="text-lg font-semibold mb-3">Open to Collaboration</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              I'm always interested in research partnerships, internships, and industry collaborations in AI/ML, 
              NLP, sensor data processing, and ethical AI development. Feel free to reach out for research 
              discussions, academic-industry bridge opportunities, or innovative AI projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;