import Image from 'next/image';
import { Picture } from '@/app/model/common';
import Link from 'next/link';

interface MenuButtonProps {
  image: Picture & { label: string; route: string };
  onClickHandler?: () => void;
}

const MenuButton = ({ image, onClickHandler }: MenuButtonProps) => {
  return (
    <Link href={image.route}>
      <div
        id="menu-button"
        className="relative flex items-center justify-center"
        onClick={onClickHandler}
      >
        <div
          id="menu-button-image"
          className="hidden w-[4rem] h-[6rem] p-[3rem] bg-amber-700 rounded-tl-[1.75rem] rounded-tr-[1.5625rem] rounded-br-[2.375rem] rounded-bl-[3.25rem] desktopsm:block desktopsm:w-[9rem] desktopsm:h-[11rem]"
        >
          <Image
            className="rounded-tl-[1.75rem] rounded-tr-[1.5625rem] rounded-br-[2.375rem] rounded-bl-[3.25rem]"
            src={image.src}
            alt={image.alt}
            fill
          />
        </div>
        <div className="w-[11rem] bg-[#FFA384] rounded-[0.625rem] flex place-content-center bottom-[2.5rem] py-[0.3rem] desktopsm:absolute desktopsm:bottom-[-1rem]">
          <span className="text-white text-[1rem]">{image.label}</span>
        </div>
      </div>
    </Link>
  );
};

export default MenuButton;
