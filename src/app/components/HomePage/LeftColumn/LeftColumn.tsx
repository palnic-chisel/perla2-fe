import React from 'react';
import Hero from '@/app/components/Hero/Hero';
import Services from '@/app/components/Services/Services';
import Popup from '@/app/components/Popup/Popup';
import { useHandlersContext } from '@/app/hooks/HandlersContext';

export const sectionWrapperStyle =
  'relative flex flex-col w-full desktopsm:w-[50%] desktopsm:h-[100%] desktopsm:overflow-hidden ';
export const baseSectionStyle =
  'relative overflow-hidden box-border flex flex-col items-center justify-center w-full desktopsm:h-[50vh]';
export const orangeColor = '#ffa384';
export const lightGreyColor = '#f5f5f5';
export const blueishColor = '#6fa7c7';

const LeftColumn = () => {
  const { isMenuPopupOpen } = useHandlersContext();
  const { toggleCallMeButton } = useHandlersContext();

  return (
    <>
      {isMenuPopupOpen && <Popup />}
      <div
        id="left-column"
        className={sectionWrapperStyle}
        onClick={() => toggleCallMeButton(true)}
      >
        <section
          id="hero-section"
          className={`${baseSectionStyle} bg-[${lightGreyColor}] px-[3rem] py-[1rem]`}
        >
          <Hero />
        </section>

        <section
          id="service-section"
          className={`${baseSectionStyle} h-[40rem] sm:h-[50rem] tabletsm:h-[40rem] bg-[${orangeColor}]`}
        >
          <Services />
        </section>
      </div>
    </>
  );
};

export default LeftColumn;
