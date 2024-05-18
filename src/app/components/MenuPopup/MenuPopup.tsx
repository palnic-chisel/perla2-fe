import MenuButton from '@/app/components/MenuButton/MenuButton';
import { IoMdCloseCircle } from 'react-icons/io';
import { useHandlersContext } from '@/app/hooks/HandlersContext';

const pictures = [
  {
    src: 'https://picsum.photos/400',
    alt: 'alt text',
    label: 'chi sono',
    route: 'about',
    id: 0,
  },
  {
    src: 'https://picsum.photos/400',
    alt: 'alt text',
    label: 'approach',
    route: 'about',
    id: 1,
  },
  {
    src: 'https://picsum.photos/400',
    alt: 'alt text',
    label: 'mindfulness',
    route: 'mindfulness',
    id: 2,
  },
];

const EXIT_MENU_LABEL = 'chiudi';

function MenuPopupExitButton() {
  const { togglePopup } = useHandlersContext();

  return (
    <div
      id="menu-popup-exit-button"
      className="absolute cursor-pointer top-[-1rem] right-[-1rem] desktopsm:right-[2rem] bg-[#FFA384] flex justify-around items-center px-[1rem] py-[0.5rem] rounded-tl-[0.9375rem] rounded-tr-[1.75rem] rounded-br-[0.3125rem] rounded-bl-[0.75rem]"
      onClick={togglePopup}
    >
      <IoMdCloseCircle className="text-[1.5rem] text-white" />
      <span className="hidden desktopsm:block text-white text-[1rem]">
        {EXIT_MENU_LABEL}
      </span>
    </div>
  );
}

const MenuPopup = () => {
  const { togglePopup } = useHandlersContext();
  return (
    <div
      id="menu-popup"
      className="p-[3rem] bg-[#6FA7C7] z-[200] rounded-tl-[3.75rem] rounded-tr-[1.5625rem] rounded-br-[6.375rem] rounded-bl-[2.375rem] flex flex-col justify-around gap-[3rem] items-center relative desktopsm:flex-row desktopsm:w-[70vw] "
    >
      <MenuPopupExitButton />
      {pictures.map((picture) => (
        <MenuButton
          key={picture.id}
          image={picture}
          route={picture.route}
          onClickHandler={togglePopup}
        />
      ))}
    </div>
  );
};

export default MenuPopup;
