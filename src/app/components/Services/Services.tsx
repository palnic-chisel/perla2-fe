import React, { useCallback, useEffect, useRef, useState } from 'react';
import ServiceCard from '@/app/components/ServiceCard/ServiceCard';
import Illustration from '@/app/components/Illustration/Illustration';
import { Picture } from '@/app/model/common';
import { services_mock } from '@/app/components/Services/mock';
import { useTransition, animated, UseTransitionProps } from 'react-spring';
import { PiDotOutlineThin } from 'react-icons/pi';
import { PiDotOutlineFill } from 'react-icons/pi';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';
import { isMobile } from 'react-device-detect';

export interface Service {
  id: number;
  title: string;
  description: string;
  image: Picture;
}

const PAGE_TITLE = 'COSA OFFRO';

function ServiceCardTitle({ title }: { title: string }) {
  return (
    <div className="text-white absolute left-[1rem] top-[1rem] md:left-auto md:top-[1rem] md:right-[4rem]">
      <h2>{title}</h2>
    </div>
  );
}

const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

export default function Services() {
  const [index, setIndex] = useState(0);
  const [userHasInteractedWithTheDots, setUserHasInteractedWithTheDots] =
    useState(false);
  const containerRef = useRef<any>();
  const isAtLeastDesktopSm = useMediaQuery('(min-width: 1280px)');
  const transitions = useTransition<Service, UseTransitionProps<Service>>(
    [services_mock[index]],
    {
      exitBeforeEnter: true,
      key: (service) => service.id.toString(),
      from: { opacity: 0, transform: 'scale(0.5) translateY(-50%)' },
      enter: { opacity: 1, transform: 'scale(1) translateY(0%)' },
      leave: { opacity: 0, transform: 'scale(0.5) translateY(-50%)' },
      config: { tension: 1000, friction: 100 },
      immediate: (key) => key === services_mock[index].id.toString(),
    } as UseTransitionProps<Service>
  );

  useEffect(() => {
    if (userHasInteractedWithTheDots) return;
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % services_mock.length);
    }, 7000);

    return () => clearInterval(intervalId);
  }, [index]);

  const debouncedHandleMouseWheel = useCallback(
    debounce((event) => {
      event.stopPropagation();

      const delta = event.deltaY || event.detail || event.wheelDelta;

      if (delta > 0) {
        setIndex((prevIndex) =>
          prevIndex === 0 ? services_mock.length - 1 : prevIndex - 1
        );
      } else {
        setIndex((prevIndex) => (prevIndex + 1) % services_mock.length);
      }
    }, 200), // 200 milliseconds debounce time
    [setIndex]
  );

  const handleMouseWheel = (event) => {
    if (isMobile) return;
    isAtLeastDesktopSm && debouncedHandleMouseWheel(event);
  };

  const handleIconClick = (i) => {
    setUserHasInteractedWithTheDots(true);
    setIndex(i);
  };

  return (
    <div
      id="service-content"
      className="flex flex-col h-full w-full justify-center items-center"
      onWheel={handleMouseWheel}
      ref={containerRef}
    >
      <ServiceCardTitle title={PAGE_TITLE} />
      <div className="absolute z-5 w-fit top-[5rem] right-[-3rem] sm:top-[5rem] sm:left-[5rem] desktopsm:top-[2rem] desktop3xl:left-[15%]">
        <Illustration type={'Illustration2'} />
      </div>
      <div className="flex flex-col justify-center items-center">
        {transitions((style, service) => (
          <animated.div style={{ ...style } as any}>
            <ServiceCard key={service.id} service={service} />
          </animated.div>
        ))}

        <div className="z-30 absolute flex bottom-0">
          {services_mock.map((_, i) =>
            i === index ? (
              <PiDotOutlineFill
                key={i}
                className="w-[4rem] h-[4rem] fill-white cursor-pointer"
                onClick={() => handleIconClick(i)}
              />
            ) : (
              <PiDotOutlineThin
                key={i}
                className="w-[4rem] h-[4rem] fill-white cursor-pointer"
                onClick={() => handleIconClick(i)}
              />
            )
          )}
        </div>
      </div>
      <div className="absolute z-20 top-[-1rem] xl:bottom-0 right-[-0.2rem]">
        <Illustration type={'Illustration4'} />
      </div>
    </div>
  );
}
