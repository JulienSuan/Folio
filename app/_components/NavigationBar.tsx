"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FiUser,
  FiBriefcase,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiClock,
  FiDownload,
  FiMessageSquare,
  FiHome,
} from 'react-icons/fi';

import NavigationProfile from './NavigationProfile';
import { FaCar } from 'react-icons/fa';
import { LuCar } from 'react-icons/lu';
import { label } from 'framer-motion/client';
import { RiDiscordLine } from 'react-icons/ri';

export default function NavigationBar() {
  const pathname = usePathname();

  const navItems = [
    {label: 'Home', href: '/', icon: FiHome},
    { label: 'Profile', href: '/profile', icon: FiUser },
    { label: 'Experiences', href: '/experiences', icon: FiBriefcase },
    { label: 'Contact', href: '/contact', icon: FiMail },
  ];

  return (
    <div className="h-screen left-0 top-0 sticky z-50 flex flex-col gap-6 p-6 min-w-[260px] bg-base-200/80 border-r border-base-300/30 shadow-xl rounded-r-2xl">
      <NavigationProfile />

      <ul className="flex flex-col gap-1.5 mt-6">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`
                  group flex items-center gap-3.5 px-4 py-3 rounded-lg
                  text-base-content/70 hover:text-base-content/95
                  hover:bg-base-300/40 hover:translate-x-1 transition-all duration-200
                  ${isActive ? 'bg-base-300/50 text-base-content/100 translate-x-1' : ''}
                `}
              >
                <item.icon
                  size={22}
                  className={`transition-opacity duration-200 ${
                    isActive ? 'opacity-100 text-secondary' : 'opacity-60 group-hover:opacity-80'
                  }`}
                />
                <span className="text-base font-medium">{item.label}</span>
                <div
                  className={`absolute right-3 top-1/2 -translate-y-1/2 w-1 h-6 rounded-full bg-secondary/70 transition-opacity duration-200 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-auto pt-10 border-t border-base-content/5 space-y-6 text-sm">
        <a
          href="/cv_bigot_julien.pdf" 
          download="/cv_bigot_julien.pdf"
          className={`
            flex items-center justify-center gap-3
            px-5 py-3.5 rounded-lg
            bg-base-300/40 hover:bg-base-300/60
            text-base-content/90 hover:text-white
            border border-base-content/10 hover:border-secondary/30
            transition-all duration-300
            hover:translate-y-[-1px] hover:shadow-md
            font-medium
          `}
        >
          <FiDownload size={18} className="text-secondary" />
          Télécharger mon CV
        </a>

        <div className="space-y-2 text-base-content/60">
          <div className="flex items-center gap-2">
            <FiMapPin size={15} className="text-secondary/80" />
            <span>Guérande, France (44)</span>
          </div>
          <div className="flex items-center gap-2">
            <FiClock size={15} className="text-secondary/80" />
            <span>Disponible immédiatement</span>
          </div>
          <div className="flex items-center gap-2">
            <LuCar size={15} className="text-secondary/80" />
            <span>Permis B</span>
          </div>
        </div>

        <div className="flex justify-center gap-5 text-base-content/60">
          <a href="https://github.com/JulienSuan" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
            <FiGithub size={18} />
          </a>
          <a href="https://linkedin.com/in/..." target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
            <FiLinkedin size={18} />
          </a>
          <a href="mailto:jbigot.dev@gmail.com" className="hover:text-secondary transition-colors">
            <FiMail size={18} />
          </a>
          <a href="https://discord.com/users/..." target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
            <RiDiscordLine size={20} />
          </a>
        </div>

        <p className="text-center text-base-content/40 text-xs pt-2">
          © {new Date().getFullYear()} Julien Bigot
        </p>
      </div>
    </div>
  );
}