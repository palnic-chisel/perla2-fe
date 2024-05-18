import { FiMapPin } from 'react-icons/fi';
import React from 'react';
import Illustration from '@/app/components/Illustration/Illustration';
import sample_map from '../../../../public/sample_map.png';
import Image from 'next/image';

function LocationDetail({ location }: { location: string }) {
  return (
    <div className="grid grid-cols-3 gap-3 w-[80%] items-center p-2">
      <FiMapPin
        className="cursor-pointer w-[1.875rem] h-[1.875rem] col-span-1"
        color="white"
      />
      <h3 className="text-white col-span-2">{location}</h3>
    </div>
  );
}

function LocationMap() {
  return (
    <div className="shadow-md w-[15.625rem] h-[15.625rem] sm:w-[18rem] sm:h-[18rem] md:w-[18.75rem] md:h-[18.75rem] relative rounded-full shadow-xl xl:w-[14rem] xl:h-[14rem]">
      <Image src={sample_map} fill alt={'mappa'} className="rounded-full" />
    </div>
  );
}

const STUDIO1 = 'Corso Marconi 2, Torino';
const STUDIO2 = 'Spazio Intrecci, Via Morgari 2, Torino';
const STUDIO3 = 'Online';

export default function Location() {
  return (
    <div className="relative w-fit flex flex-col justify-center items-center">
      <div className="relative z-20 sm:absolute sm:top-[-15rem] sm:right-[-7rem] md:top-[-17rem] sm:right-[-10rem] xl:top-[-8rem] xl:right-[-10rem]">
        <LocationMap />
      </div>

      <div className="relative bottom-[2rem] w-[17rem] h-[20rem] overflow-hidden">
        <Illustration type="Illustration3" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <LocationDetail location={STUDIO1} />
          <LocationDetail location={STUDIO2} />
          <LocationDetail location={STUDIO3} />
        </div>
      </div>
    </div>
  );
}
