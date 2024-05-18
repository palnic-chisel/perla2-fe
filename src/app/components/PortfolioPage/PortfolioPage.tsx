import React from 'react';
import { Picture } from '@/app/model/common';
import Image from 'next/image';
import Illustration from '@/app/components/Illustration/Illustration';
import {
  config,
  useTransition,
  UseTransitionProps,
  animated,
} from 'react-spring';

function PortfolioPageImage({ src, id, alt }: Picture) {
  return (
    <div className="h-[17rem] w-[14rem] relative sm:h-[25rem] sm:w-[22rem] z-[2]">
      <Image
        id={id.toString()}
        priority
        fill
        src={src}
        alt={alt}
        className="rounded-tr-[1rem] rounded-br-[2rem] rounded-tl-[1.50rem] rounded-bl-[1rem] object-cover shadow-xl"
      />
    </div>
  );
}

const PortfolioPage = ({ content, index = 0 }) => {
  const textTransition = useTransition<boolean, UseTransitionProps<boolean>>(
    true,
    {
      from: { opacity: 0, transform: 'translateX(-2rem)' },
      enter: { opacity: 1, transform: 'translateX(0)' },
      leave: { opacity: 0, transform: 'translateX(-20px)' },
      config: config.wobbly,
    } as UseTransitionProps<boolean>
  );

  const illustrationTransition = useTransition<
    boolean,
    UseTransitionProps<boolean>
  >(true, {
    from: { opacity: 1 },
    enter: { opacity: 0.4 },
    leave: { opacity: 0 },
    config: { ...config.gentle, duration: 3000 },
  } as UseTransitionProps<boolean>);

  const imageTransition = useTransition<boolean, UseTransitionProps<boolean>>(
    true,
    {
      from: { opacity: 0, transform: 'scale(0.8)' },
      enter: { opacity: 1, transform: 'scale(1)' },
      leave: { opacity: 0, transform: 'scale(0.8)' },
      config: { ...config.default, duration: 500 },
    } as UseTransitionProps<boolean>
  );

  return (
    <div
      className={`overflow-x-hidden flex flex-col justify-around items-center ${
        index % 2 === 0 ? 'desktopxs:flex-row-reverse' : 'desktopxs:flex-row'
      } mt-[8rem] relative`}
    >
      {imageTransition((style, item) =>
        item ? (
          <animated.div className="z-[2]" style={{ ...style } as any}>
            <PortfolioPageImage
              src={content.picture.src}
              alt={content.picture.alt}
              id={content.picture.id}
            />
          </animated.div>
        ) : null
      )}

      <div className="flex flex-col items-center relative desktopxs:w-[50%] desktopxs:max-w-[50rem] p-[2.5rem]">
        <h2 className="text-3xl font-bold align-right w-full z-[2]">
          {content.title}
        </h2>

        <div id="portfolio-content" className="py-[2rem] relative">
          {textTransition((style, item) =>
            item ? (
              <animated.div
                className="z-[2] relative"
                style={{ ...style } as any}
              >
                <p>{content.description}</p>
              </animated.div>
            ) : null
          )}

          {illustrationTransition((style, item) =>
            item ? (
              <animated.div className="relative" style={{ ...style } as any}>
                <div className="absolute bottom-[40%] tabletsm:bottom-[20%] left-[-10rem] z-[1] desktopxs:hidden">
                  <Illustration type={'Illustration8'} />
                </div>
                <div className="absolute bottom-0 right-[-1rem] z-[1] desktopxs:hidden">
                  <Illustration type={'Illustration7'} />
                </div>
              </animated.div>
            ) : null
          )}
        </div>
      </div>

      {illustrationTransition((style, item) =>
        item ? (
          <animated.div
            className="w-full h-full absolute"
            style={{ ...style } as any}
          >
            <div className="hidden absolute bottom-[40%] tabletsm:bottom-[20%] left-[-10rem] z-[1] desktopxs:block">
              <Illustration type={'Illustration8'} />
            </div>
            <div className="hidden absolute top-0 right-[40%] desktopxs:block z-[1]">
              <Illustration type={'Illustration7'} />
            </div>
            <div className="hidden absolute z-[1] bottom-[1rem] right-[-1rem] desktopxs:block">
              <Illustration type={'Illustration2'} />
            </div>
          </animated.div>
        ) : null
      )}
    </div>
  );
};

export default PortfolioPage;
