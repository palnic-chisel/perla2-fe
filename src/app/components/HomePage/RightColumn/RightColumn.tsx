import React from 'react';
import Events from '@/app/components/Events/Events';
import Contacts from '@/app/components/Contacts/Contacts';
import {
  baseSectionStyle,
  blueishColor,
  lightGreyColor,
  sectionWrapperStyle,
} from '@/app/components/HomePage/LeftColumn/LeftColumn';
import { useHandlersContext } from '@/app/hooks/HandlersContext';

const RightColumn = () => {
  const { toggleCallMeButton } = useHandlersContext();
  return (
    <>
      <div
        id="right-column"
        className={sectionWrapperStyle}
        onClick={() => toggleCallMeButton(true)}
      >
        <section
          id="events-section"
          className={`${baseSectionStyle} h-[35rem] sm:h-[39rem] bg-[${blueishColor}]`}
        >
          <Events />
        </section>

        <section
          className={`${baseSectionStyle} h-[43rem] bg-[${lightGreyColor}]`}
        >
          <Contacts />
        </section>
      </div>
    </>
  );
};

export default RightColumn;
