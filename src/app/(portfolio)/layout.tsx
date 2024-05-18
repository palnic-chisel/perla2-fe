import React from 'react';
import Navbar from '@/app/components/Navbar/Navbar';
import Image from 'next/image';
import logoLight from '../../../public/logo_light.svg';
import { FiArrowUpRight } from 'react-icons/fi';
import LocationDetail from '@/app/components/LocationDetail/LocationDetail';
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from 'react-icons/fa';
import {
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  LINKEDIN_LINK,
  WHATSAPP_LINK,
} from '@/app/components/Social/mock';
import Link from 'next/link';

const LOGO_NAME = 'Chiara';
const LOGO_LASTNAME = 'Ganga';
const LOGO_CAPTION = 'psicoterapia e mindfulness';
const LOGO_S = 'SCEGLI TE STESS*';

const PARTITAIVA = 'P.IVA: 1234567890';
const TELEFONO = 'TELEFONO: 3450383042';
const COPYRIGHT = 'Created by palnic';

const linksMock = [
  { label: 'HOME PAGE', href: '/' },
  { label: 'CHI SONO', href: '/about' },
  { label: 'IL MIO APPROCCIO', href: '/approach' },
  { label: 'MINDFULNESS', href: '/mindfulness' },
];

const STUDIO1 = 'Corso Marconi 2, Torino';
const STUDIO2 = 'Spazio Intrecci, Via Morgari 2, Torino';
const STUDIO3 = 'Online';

function FooterLogo() {
  return (
    <div className="flex items-center gap-[0.5rem] p-[1rem] desktopsm:p-[3rem]">
      <div className="w-[3.5625rem] h-[4rem]">
        <Image priority src={logoLight} alt="Logo" />
      </div>

      <div className="relative flex flex-col gap-[-10rem]">
        <div>
          <span
            className={`font-bold text-[1.5rem] text-white cursor-default leading-[0.1rem]`}
          >
            {LOGO_NAME}
          </span>
          <span
            className={`font-normal text-[1.5rem] text-white cursor-default leading-[0.1rem]`}
          >
            {LOGO_LASTNAME}
          </span>
        </div>
        <div>
          <span
            className={`font-normal text-[1rem] text-white cursor-default leading-[0.1rem]`}
          >
            {LOGO_CAPTION}
          </span>
        </div>
        <div>
          <span
            className={`font-bold text-[1rem] text-white cursor-default tracking-[0.20rem] leading-[0.1rem]`}
          >
            {LOGO_S}
          </span>
        </div>
      </div>
    </div>
  );
}

function FooterLinks() {
  return (
    <div
      id="footer-links-container"
      className="flex flex-col gap-[1rem] items-center desktopsm:items-start"
    >
      {linksMock.map((link) => {
        return (
          <Link key={link.href} href={link.href}>
            <div className="flex gap-[0.5rem] cursor-pointer">
              <span className="font-semibold text-[0.8rem] text-white tracking-[0.10rem]">
                {link.label}
              </span>
              <FiArrowUpRight className="w-[1rem] h-[1rem] text-white" />
            </div>
          </Link>
        );
      })}
    </div>
  );
}

function FooterLocation() {
  return (
    <div className="hidden flex-col gap-[1rem] desktopsm:flex">
      <LocationDetail location={STUDIO1} />
      <LocationDetail location={STUDIO2} />
      <LocationDetail location={STUDIO3} />
    </div>
  );
}

function FooterSection() {
  return (
    <div className="flex flex-col gap-[1rem] desktopsm:p-[3rem] desktopsm:px-[5rem]">
      <div className="flex gap-[10rem] items-center justify-center desktopsm:justify-start">
        <FooterLinks />
        <FooterLocation />
      </div>
      <div className="h-[0.125rem] w-full bg-[white] opacity-20"></div>

      <div className="flex flex-col justify-between items-center desktopsm:flex-row">
        <div>
          <span
            className={`font-bold text-[0.81rem] text-white cursor-default`}
          >
            {TELEFONO}
          </span>
        </div>
        <div>
          <span
            className={`font-bold text-[0.81rem] text-white cursor-default`}
          >
            {PARTITAIVA}
          </span>
        </div>
        <div className="flex gap-[1rem] p-[1rem] pt-[2rem] desktopsm:p-0 desktopsm:pt-0">
          <a href={INSTAGRAM_LINK}>
            <FaInstagram
              className="cursor-pointer w-[1.875rem] h-[1.875rem]"
              color="white"
            />
          </a>

          <a href={WHATSAPP_LINK}>
            <FaWhatsapp
              className="cursor-pointer w-[1.875rem] h-[1.875rem]"
              color="white"
            />
          </a>

          <a href={FACEBOOK_LINK}>
            <FaFacebook
              className="cursor-pointer w-[1.875rem] h-[1.875rem]"
              color="white"
            />
          </a>

          <a href={LINKEDIN_LINK}>
            <FaLinkedinIn
              className="cursor-pointer w-[1.875rem] h-[1.875rem]"
              color="white"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

function Copyright() {
  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
      <span
        className={`font-thin text-[0.81rem] text-white tracking-[0.0625rem]`}
      >
        {COPYRIGHT}
      </span>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bottom-[-28rem] h-[28rem] w-full bg-[#6FA7C7] mt-[23rem] flex flex-col justify-start items-center gap-[2rem] desktopsm:items-start desktopsm:justify-between desktopsm:flex-row desktopsm:bottom-[-23rem] desktopsm:h-[23rem] ">
      <FooterLogo />
      <FooterSection />
      <Copyright />
    </div>
  );
}

export default function Layout({ children }) {
  return (
    <div className="relative">
      <Navbar />
      <div className="mt-[6rem] relative">{children}</div>
      <Footer />
    </div>
  );
}
