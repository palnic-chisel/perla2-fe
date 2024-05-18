import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { FiArrowLeftCircle } from 'react-icons/fi';
import {
  animated,
  config,
  useTransition,
  UseTransitionProps,
} from 'react-spring';
import Link from 'next/link';

interface NavItems {
  label: string;
  href: string;
}

interface BurgerProps {
  navItems: NavItems[];
}

function BurgerPopup({ navItems, toggleMenu, handleNavItemClick, isOpen }) {
  const overlayTransition = useTransition<boolean, UseTransitionProps<boolean>>(
    isOpen,
    {
      from: { opacity: 0, transform: 'translateY(-100%)' },
      enter: { opacity: 1, transform: 'translateY(0%)' },
      leave: { opacity: 0, transform: 'translateY(-100%)' },
      config: config.default,
    } as UseTransitionProps<boolean>
  );

  return (
    <div
      onClick={toggleMenu}
      className="fixed inset-0 flex items-center justify-center bg-[#6fa7c7] bg-opacity-70 z-50 transition-all"
    >
      {overlayTransition((style, item) =>
        item ? (
          <animated.div
            className="bg-[#6fa7c7] bg-opacity-70 w-full h-full flex items-center justify-center z-50"
            style={{ ...style } as any}
          >
            <button
              className="absolute top-[1.5rem] left-[2rem]"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <FiArrowLeftCircle size={50} color="white" />
            </button>
            <ul className="list-none p-0 w-[90%]">
              {navItems.map((item) => {
                return (
                  <Link key={item.href} href={item.href}>
                    <li
                      onClick={() => handleNavItemClick(item.href)}
                      className="my-2 hover:bg-white hover:bg-opacity-20 transition-all text-white rounded-[0.2rem] h-[5rem] flex justify-center items-center cursor-pointer"
                    >
                      <span>{item.label}</span>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </animated.div>
        ) : null
      )}
    </div>
  );
}

export default function Burger({ navItems }: BurgerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavItemClick = (href) => {
    setIsOpen(false);
    console.log('gotopage', href);
  };

  return (
    <div className="relative">
      <button className="block" onClick={toggleMenu} aria-label="Toggle Menu">
        <FiMenu size={50} color="white" />
      </button>

      {isOpen && (
        <BurgerPopup
          navItems={navItems}
          toggleMenu={toggleMenu}
          handleNavItemClick={handleNavItemClick}
          isOpen={isOpen}
        />
      )}
    </div>
  );
}
