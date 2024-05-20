import React from 'react';
import {
  orangeColor,
  whitishColor,
} from '@/app/components/version2/resources/constants';
import Video from '@/app/components/version2/Video';

const Videoclip = () => {
  // const { isMenuPopupOpen } = useHandlersContext();
  return (
    <>
      <div
        id="video-section"
        className={`bg-[${orangeColor}] w-full h-[50vh] relative flex items-center justify-center`}
      >
        <div
          id="back-white"
          className={`bg-[${whitishColor}] w-2/3 h-3/4 absolute right-0 top-1/2 transform -translate-y-1/2`}
        ></div>
        <div id="video-container" className="h-[60%] w-[70%] z-10 bg-black">
          <Video src="" />
        </div>
      </div>
    </>
  );
};

export default Videoclip;
