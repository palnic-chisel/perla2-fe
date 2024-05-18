'use client';
import React from 'react';
import Header from '@/app/components/Header/Header';
import Burger from '@/app/components/Burger/Burger';
import { FiArrowLeftCircle } from 'react-icons/fi';
import Link from 'next/link';

export default function Navbar() {
  const navItems = [
    { label: 'LA MIA FORMAZIONE', href: 'about' },
    { label: 'IL MIO APPROCCIO', href: 'approach' },
    { label: 'MINDFULNESS', href: 'mindfulness' },
  ];

  return (
    <nav
      id="navbar"
      className="items-center gap-[1rem] py-[1rem] px-[2rem] w-full flex mr-[3rem] fixed z-20 bg-[#6fa7c7] justify-between h-[6rem] top-0"
    >
      <Link href={'/'}>
        <FiArrowLeftCircle size={50} color="white" />
      </Link>
      <div className="hidden tabletsm:block">
        <Header theme="light" />
      </div>
      <Burger navItems={navItems} />
    </nav>
  );
}
