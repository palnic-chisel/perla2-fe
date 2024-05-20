import React from 'react';
import Image from 'next/image';

import { Service } from '@/app/components/Services/Services';
import { Picture } from '@/app/model/common';

function ServiceCardImage({ image }: Picture) {
  return (
    <div className="relative z-[1] w-[75vw] h-[75vw]">
      <Image
        priority
        fill
        src={image.src}
        alt={image.alt}
        className="tabletsm:rounded-[0px] tabletsm:rounded-tl-[7.8125rem] tabletsm:rounded-bl-[4.0625rem] object-cover"
      />
    </div>
  );
}

function ServiceCardDescription({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="relative z-[2] w-[60vw] flex flex-col items-end justify-center bg-[#6fa7c7] p-[2rem] top-[-3.5rem] opacity-90 gap-[0.5em]">
      <h2 className="font-bold text-white text-[1.25rem] text-right">
        {title}
      </h2>
      <p className="font-medium text-white text-[0.8rem] text-right">
        {description}
      </p>
    </article>
  );
}

const ServiceCard = ({ service }: Service) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center tabletsm:flex-row tabletsm:h-auto tabletsm:w-auto">
      <ServiceCardImage image={service.image} />
      <ServiceCardDescription
        description={service.description}
        title={service.title}
      />
    </div>
  );
};

export default ServiceCard;
