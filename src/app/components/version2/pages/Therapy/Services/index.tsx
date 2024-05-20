import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  orangeColor,
  whitishColor,
} from '@/app/components/version2/resources/constants';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';
import { animated, useTransition, UseTransitionProps } from 'react-spring';
import { services_mock } from '@/app/components/Services/mock';
import { Service } from '@/app/components/Services/Services';
import { isMobile } from 'react-device-detect';
import { PiDotOutlineFill, PiDotOutlineThin } from 'react-icons/pi';
import ServiceCard from '@/app/components/version2/ServiceCard/ServiceCard';

const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

const Services = () => {
  // const { isMenuPopupOpen } = useHandlersContext();

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
    <>
      <div
        id="services-section"
        className={`bg-[${orangeColor}] min-h-[80vh] w-full relative flex flex-col items-center justify-center`}
      >
        <div className="w-full absolute flex justify-end right-3 top-3">
          <h2 className="text-white text-end font-bold">COSA OFFRO</h2>
        </div>
        <div
          className={`w-[100%] h-[101%] bg-[${whitishColor}] absolute left-0`}
          style={{ clipPath: 'polygon(0% 0%, 25% 0%, 55% 100%, 0% 100%)' }}
        ></div>
        <div className="mt-[6rem] flex flex-col items-center">
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
      </div>
    </>
  );
};

export default Services;
