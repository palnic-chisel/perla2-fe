import Image from 'next/image';
import { Picture } from '@/app/model/common';
import Link from 'next/link';
import { Inknut_Antiqua } from 'next/font/google';

interface MenuButtonProps {
  image: Picture & { label: string; route: string };
  onClickHandler?: () => void;
  index: number;
}

const inknut = Inknut_Antiqua({
  weight: ['300', '400', '600', '700', '800', '900'],
  subsets: ['latin'],
});

const MenuButton = ({ image, onClickHandler, index }: MenuButtonProps) => {
  const isEven = index % 2 === 0;

  return (
    <Link href={image.route}>
      <div
        id=""
        className="flex w-full justify-center items-center gap-8"
        onClick={onClickHandler}
      >
        <div
          id="image-button-container"
          className={`relative w-[6rem] h-[6rem] bg-amber-700 rounded-full ${
            isEven ? 'order-1' : 'order-2'
          }`}
        >
          <Image
            className="rounded-full w-full h-full"
            src={image.src}
            alt={image.alt}
            layout="fill" // Use this property to ensure the image fills the container
            objectFit="cover" // Ensures the image covers the entire container without distortion
          />
        </div>
        <div
          id="label-button-container"
          className={`${isEven ? 'order-2' : 'order-1'}`}
        >
          <span className={`${inknut.className} font-bold`}>{image.label}</span>
        </div>
      </div>
    </Link>
  );
};

export default MenuButton;
