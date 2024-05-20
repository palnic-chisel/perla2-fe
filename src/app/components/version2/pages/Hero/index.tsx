import React from 'react';
import { useHandlersContext } from '@/app/hooks/HandlersContext';
import { Inknut_Antiqua } from 'next/font/google';
import MenuButton from './MenuButton/MenuButton';
import Title from '@/app/components/version2/TextBlock/Title';
import TextBlock from '@/app/components/version2/TextBlock';
import {
  blueishColor,
  lightGreyColor,
  orangeColor,
} from '@/app/components/version2/resources/constants';

const inknut = Inknut_Antiqua({
  weight: ['300', '400', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const sectionWrapperStyle =
  'relative flex flex-col w-full justify-center desktopsm:w-[50%] desktopsm:h-[100%] desktopsm:overflow-hidden ';
export const baseSectionStyle =
  'relative overflow-hidden box-border h-full flex flex-col gap-8 items-center justify-start w-full desktopsm:h-[50vh]';

const pictures = [
  {
    src: 'https://picsum.photos/400',
    alt: 'alt text',
    label: 'psicoterapia',
    route: 'about',
    id: 0,
  },
  {
    src: 'https://picsum.photos/400',
    alt: 'alt text',
    label: 'yoga',
    route: 'about',
    id: 1,
  },
  {
    src: 'https://picsum.photos/400',
    alt: 'alt text',
    label: 'meditazione',
    route: 'mindfulness',
    id: 2,
  },
];

const Hero = () => {
  const { isMenuPopupOpen } = useHandlersContext();

  return (
    <>
      <div id="hero" className={sectionWrapperStyle}>
        <section
          id="hero-section"
          className={`${baseSectionStyle} bg-[${lightGreyColor}] px-[3rem] py-[5rem] relative`}
        >
          <div className="absolute bottom-0 w-[30rem] opacity-20 left-[-50%]">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill={`${orangeColor}`}
                d="M35.6,-45.1C43.2,-36.1,44.4,-22.1,50.4,-6.2C56.4,9.6,67.1,27.3,64.5,42.4C62,57.5,46,70.1,30.8,68.8C15.5,67.5,1,52.3,-9.7,41.8C-20.3,31.3,-27.1,25.4,-38.5,16.8C-49.9,8.2,-65.9,-3.1,-70.8,-18.8C-75.6,-34.6,-69.2,-54.7,-55.5,-62.6C-41.8,-70.5,-20.9,-66.3,-3.4,-62.2C14,-58.1,28,-54.1,35.6,-45.1Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

          <div className="absolute top-0 w-[30rem] opacity-20 right-[-70%]">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill={`${blueishColor}`}
                d="M47.5,-50.1C62.2,-44.3,75.1,-29.9,75.2,-15.4C75.2,-0.8,62.4,13.9,50.9,25.3C39.5,36.8,29.4,44.9,17.5,50C5.7,55.1,-7.9,57.1,-24.9,56.2C-41.9,55.3,-62.3,51.5,-65.7,40.5C-69,29.4,-55.3,11,-49.6,-6.6C-43.9,-24.2,-46.3,-41.1,-39.3,-48.2C-32.4,-55.4,-16.2,-52.8,0.1,-52.9C16.4,-53,32.8,-55.8,47.5,-50.1Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

          <div className="flex flex-col gap-1 justify-center items-center grow">
            <h1 className={inknut.className}>Scegli te stess*</h1>
            <p className="text-center">
              Benvenuto nel tuo viaggio verso l'autenticità. Con la psicoterapia
              gestaltica come guida, insieme esploreremo le profondità della tua
              esperienza interiore. Scegli te stesso e inizia a creare
              connessione e integrazione nella tua vita.
            </p>
          </div>

          <div>
            {pictures.map((picture, index) => (
              <MenuButton
                key={picture.id}
                image={picture}
                route={picture.route}
                index={index}
                onClickHandler={() => {}}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
