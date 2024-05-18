import React from 'react';
import HelpButton from '@/app/components/HelpButton/HelpButton';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { mockedData } from '@/app/components/CallMeButton/mock';

const BUTTON_LABEL = 'PRENOTA UN APPUNTAMENTO';

const CallMeButton = () => {
  const handleCallClick = () => {
    window.location.href = `tel:${mockedData.clickablePhoneNumber}`;
  };

  return (
    <div className="z-[70] fixed bottom-4 right-4 xl:absolute xl:bottom-auto xl:right-auto xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2">
      <HelpButton
        caption={mockedData.phoneNumber}
        Icon={BsFillTelephoneFill}
        label={BUTTON_LABEL}
        theme="primary"
        expandedHandler={handleCallClick}
      />
    </div>
  );
};

export default CallMeButton;
