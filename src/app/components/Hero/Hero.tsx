import React, { useEffect, useState } from 'react';
import MainButton from '@/app/components/MainButton/MainButton';
import { HERO_TITLE, HERO_DESCRIPTION } from '@/app/components/Hero/HeroMock';
import Illustration from '@/app/components/Illustration/Illustration';
import Header from '@/app/components/Header/Header';
import { useHandlersContext } from '@/app/hooks/HandlersContext';
import {
  animated,
  config,
  useTransition,
  UseTransitionProps,
} from 'react-spring';

const BUTTON_LABEL = 'Scopri';

export default function Hero() {
  const { togglePopup } = useHandlersContext();
  const [startAnimation, setStartAnimation] = useState(false);

  const illustrationTransition = useTransition<
    boolean,
    UseTransitionProps<boolean>
  >(true, {
    from: { opacity: 1 },
    enter: { opacity: 0.7 },
    leave: { opacity: 0 },
    config: { ...config.gentle, duration: 3000 },
  } as UseTransitionProps<boolean>);

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  return (
    <>
      <Header theme="dark" />
      <article className="py-[2rem] box-border flex flex-col justify-around h-[100%] gap-[1rem] z-20">
        <h2 className={`text-writing ${startAnimation ? 'animate' : ''}`}>
          {HERO_TITLE}
        </h2>
        <p className="w-full">{HERO_DESCRIPTION}</p>
        <MainButton label={BUTTON_LABEL} onClick={togglePopup} />
      </article>

      {illustrationTransition((style, item) =>
        item ? (
          <animated.div
            className="h-full w-full absolute"
            style={{ ...style } as any}
          >
            <div id="illustration" className="absolute top-[20%] right-0 z-10">
              <Illustration type={'Illustration'} />
            </div>
          </animated.div>
        ) : null
      )}
    </>
  );
}
