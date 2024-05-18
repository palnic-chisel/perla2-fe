import Location from '@/app/components/Location/Location';
import React from 'react';
import BrandLogo from '@/app/components/BrandLogo/BrandLogo';
import Arrow from '@/app/components/Arrow/Arrow';
import Social from '@/app/components/Social/Social';
import Illustration from '@/app/components/Illustration/Illustration';

export default function Contacts() {
  return (
    <>
      <div className="absolute left-[1rem] top-[1rem] desktopsm:right-[1rem] desktopsm:left-auto">
        <h2>DOVE TROVARMI</h2>
      </div>
      <div className="z-40">
        <div
          id="contacts-arrow"
          className="hidden absolute left-[-10rem] top-[-1rem] tabletsm:block tabletsm:transform tabletsm:rotate-[-165deg] tabletsm:right-[-1rem] tabletsm:top-auto tabletsm:bottom-[2rem] desktopxs:bottom-[4rem] desktopsm:rotate-[60deg] desktopsm:bottom-auto desktopsm:left-[-17rem] desktopsm:top-[12rem] desktopmd:top-[0rem] desktopmd:left-[-11rem] desktopmd:right-auto"
        >
          <Arrow />
        </div>
        <div
          id="location-wrapper"
          className="sm:absolute left-0 bottom-[2rem] sm:bottom-[0rem] md:left-[15%] desktopsm:left-[18%] desktoplg:left-[25%] desktopxl:left-[30%]"
        >
          <Location />
        </div>
        {/*<div className="absolute left-[50%] translate-x-[-50%] translate-y-[50%] bottom-[3rem] sm:left-[3rem] sm:top-[-20rem] md:left-[20%] desktopsm:bottom-[30%] desktopsm:top-auto desktopsm:left-[10%]">*/}
        {/*  <Social />*/}
        {/*</div>*/}
        <div className="hidden absolute bottom-[0rem] right-[-6.5rem] desktopsm:block">
          <BrandLogo theme={'dark'} dimension="big" />
        </div>
      </div>
      <div className="absolute z-30 top-[-1rem] right-[-0.2rem] desktopsm:hidden">
        <Illustration type={'Illustration6'} />
      </div>
    </>
  );
}
