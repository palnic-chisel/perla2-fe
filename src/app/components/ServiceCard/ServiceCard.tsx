import React from 'react';
import Image from 'next/image';

import { Service } from '@/app/components/Services/Services';
import { Picture } from '@/app/model/common';

function ServiceCardImage({ image }: Picture) {
  return (
    <div className="relative left-auto right-auto top-auto bottom-auto z-40 rounded-full tabletsm:rounded-[0px] tabletsm:rounded-tl-[7.8125rem] tabletsm:rounded-bl-[4.0625rem] w-[15rem] h-[16rem] sm:w-[20rem] sm:h-[21rem] tabletsm:min-h-[21rem] tabletsm:right-auto">
      <Image
        priority
        fill
        src={image.src}
        alt={image.alt}
        className="rounded-full tabletsm:rounded-[0px] tabletsm:rounded-tl-[7.8125rem] tabletsm:rounded-bl-[4.0625rem] object-cover"
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
    <article className="relative left-0 right-auto top-auto bottom-auto z-30 w-[80%] flex flex-col items-end justify-center p-5 pr-10 h-[16rem] tabletsm:w-[15rem] bg-[#6fa7c7] rounded-tr-[1.4375rem] rounded-br-[5.0625rem] rounded-tl-[3.4375rem] rounded-bl-[4.0625rem] tabletsm:rounded-tl-[0rem] tabletsm:rounded-bl-[0rem] tabletsm:min-h-[21rem] tabletsm:left-auto">
      <span className="font-bold text-white text-[1.25rem] text-right">
        {title}
      </span>
      <span className="font-medium text-white text-[0.8rem] text-right">
        {description}
      </span>
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
