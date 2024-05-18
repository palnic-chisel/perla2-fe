import MenuPopup from '@/app/components/MenuPopup/MenuPopup';
import {
  animated,
  config,
  useTransition,
  UseTransitionProps,
} from 'react-spring';
import { useHandlersContext } from '@/app/hooks/HandlersContext';

const Popup = () => {
  const { isMenuPopupOpen, togglePopup } = useHandlersContext();

  const overlayTransition = useTransition<boolean, UseTransitionProps<boolean>>(
    isMenuPopupOpen,
    {
      from: { opacity: 0, transform: 'translateY(-100%)' },
      enter: { opacity: 1, transform: 'translateY(0%)' },
      leave: { opacity: 0, transform: 'translateY(-100%)' },
      config: config.default,
    } as UseTransitionProps<boolean>
  );

  // Animazione per il MenuPopup
  const menuPopupTransition = useTransition<
    boolean,
    UseTransitionProps<boolean>
  >(isMenuPopupOpen, {
    from: { opacity: 0, transform: 'translateX(-10%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-100%)' },
    config: { duration: 800 },
  } as UseTransitionProps<boolean>);

  return (
    <div
      id="popup"
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-[300]"
    >
      {overlayTransition((style, item) =>
        item ? (
          <animated.div
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
            style={{ ...style } as any}
          >
            <div
              className="fixed inset-0 bg-black opacity-70"
              onClick={togglePopup}
            ></div>
          </animated.div>
        ) : null
      )}

      {menuPopupTransition((style, item) =>
        item ? (
          <animated.div className="p-8 w-70" style={{ ...style } as any}>
            <MenuPopup />
          </animated.div>
        ) : null
      )}
    </div>
  );
};

export default Popup;
