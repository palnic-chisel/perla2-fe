import React from 'react';
import { ImArrowRight } from 'react-icons/im';

interface MainButtonProps {
  label: string;
  onClick?: () => void;
}

function MainButton({ label, onClick }: MainButtonProps) {
  return (
    <div
      className="flex items-center justify-between bg-[#6FA7C7] p-[0.5rem] w-full rounded-[0.125rem] cursor-pointer sm:w-[10rem]"
      onClick={onClick}
    >
      <header className="header flex-grow">
        <h1 className="text-white text-center text-[1.25rem] font-bold">
          {label}
        </h1>
      </header>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="42"
        viewBox="0 0 29 42"
        fill="none"
      >
        <path d="M15.4375 3.5V38.5H13.5625V3.5H15.4375Z" fill="white" />
      </svg>
      <ImArrowRight color={'white'} />
    </div>
  );
}

export default MainButton;
