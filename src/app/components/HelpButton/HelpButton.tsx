import { ReactNode, useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';
import { useHandlersContext } from '@/app/hooks/HandlersContext';

interface HelpButtonProps {
  Icon: IconType | ReactNode;
  label: string;
  caption?: string;
  theme: 'primary' | 'secondary';
  expandedHandler: () => void;
}

export default function HelpButton({
  Icon,
  label,
  caption,
  theme,
  expandedHandler,
}: HelpButtonProps) {
  const [expanded, setExpanded] = useState(false);
  const [expandedHandlerTriggered, setExpandedHandlerTriggered] =
    useState(false);
  const [buttonWidth, setButtonWidth] = useState('5rem');
  const [spanOpacity, setSpanOpacity] = useState('0');
  const isAtLeastSm = useMediaQuery('(min-width: 400px)');
  const { toggleCallMeButton, clickedAwayInPage } = useHandlersContext();

  useEffect(() => {
    if (clickedAwayInPage) {
      setExpanded(false);
    }
    toggleCallMeButton(false);
  }, [clickedAwayInPage, toggleCallMeButton]);

  useEffect(() => {
    // Imposta lo stato a true dopo un secondo
    const primoTimeoutId = setTimeout(() => {
      setExpanded(true);

      // Imposta lo stato a false dopo un secondo dal set a true
      const secondoTimeoutId = setTimeout(() => {
        setExpanded(false);
      }, 2000);

      // Cleanup del secondo timeout se il componente viene smontato prima che scada
      return () => clearTimeout(secondoTimeoutId);
    }, 3000);

    // Cleanup del primo timeout se il componente viene smontato prima che scada
    return () => clearTimeout(primoTimeoutId);
  }, []);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const onClickHandler = () => {
    if (expanded && !expandedHandlerTriggered) {
      expandedHandler();
      setExpandedHandlerTriggered(true);
    } else {
      toggleExpansion();
      setExpandedHandlerTriggered(false);
    }
  };

  useEffect(() => {
    // Imposta la larghezza in modo reattivo quando expanded cambia
    const newButtonWidth = expanded
      ? isAtLeastSm
        ? '20rem'
        : '15rem'
      : isAtLeastSm
        ? '5rem'
        : '3rem';
    setButtonWidth(newButtonWidth);
    const newOpacity = expanded ? '1' : '0';
    setSpanOpacity(newOpacity);
  }, [expanded, isAtLeastSm]);

  useEffect(() => {
    const newOpacity = expanded ? '1' : '0';
    setSpanOpacity(newOpacity);
  }, [expanded, buttonWidth]);

  return (
    <div
      id="button-container"
      className={`relative ${
        theme === 'primary' ? 'bg-white' : 'bg-[#ffa384]'
      } p-[1rem] rounded-[50px] h-[3rem] sm:h-[5rem] flex items-center justify-center gap-[1rem] cursor-pointer shadow-md transition-width duration-200 ease-in-out`}
      onClick={onClickHandler}
      style={{ width: buttonWidth }}
    >
      <div
        id="icon-container"
        className={`${
          expanded
            ? 'relative'
            : 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        }  ${
          theme === 'primary' ? 'bg-[#ffa384]' : 'bg-white'
        } rounded-full h-[20px] w-[20px] sm:h-[40px] sm:w-[40px] flex justify-center items-center`}
      >
        <Icon
          color={`${theme === 'primary' ? 'white' : '#ffa384'}`}
          className="h-[10px] w-[10px] sm:h-[15px] sm:w-[15px]"
        />
      </div>

      {expanded && (
        <div
          className={`${
            expanded ? 'relative' : 'absolute top-0 left-0 right-0 bottom-0'
          } flex flex-col justify-center items-center transition-opacity duration-500`}
          style={{
            opacity: spanOpacity,
            transition: `opacity ${expanded ? '1.2s' : '0s'} ease-in-out`,
          }}
        >
          <span
            className={`${
              theme === 'primary' ? 'text-[#ffa384]' : 'text-white'
            } text-[11px] sm:text-[14px] font-bold`}
          >
            {label}
          </span>
          {caption && (
            <span className={`text-[12px] font-bold`}>{caption}</span>
          )}
        </div>
      )}
    </div>
  );
}
