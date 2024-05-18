import { FiMapPin } from 'react-icons/fi';
import React from 'react';

export default function LocationDetail({ location }: { location: string }) {
  return (
    <div className="flex items-center gap-[1rem]">
      <FiMapPin
        className="cursor-pointer w-[1.875rem] h-[1.875rem] w-fit"
        color="white"
      />
      <h3 className="text-white">{location}</h3>
    </div>
  );
}
