import Image from 'next/image';
import Illustration1 from '../../../../public/Illustration1.svg'; //hero illustration
import Illustration2 from '../../../../public/Illustration2.svg'; //service card
import Illustration3 from '../../../../public/Illustration3.svg'; //contacts
import Illustration4 from '../../../../public/Illustration4.svg'; //service triangle
import Illustration5 from '../../../../public/Illustration5.svg'; //blog mobile triangle
import Illustration6 from '../../../../public/Illustration6.svg'; //contacts mobile triangle
import Illustration7 from '../../../../public/Illustration7.svg'; //contacts mobile triangle
import Illustration8 from '../../../../public/Illustration8.svg'; //contacts mobile triangle

interface IllustrationProps {
  type:
    | 'Illustration'
    | 'Illustration2'
    | 'Illustration3'
    | 'Illustration4'
    | 'Illustration5'
    | 'Illustration6'
    | 'Illustration7'
    | 'Illustration8';
}

export default function Illustration({ type }: IllustrationProps) {
  if (type === 'Illustration') {
    return <Image priority src={Illustration1} alt="Illustration1" />;
  } else if (type === 'Illustration2') {
    return <Image priority src={Illustration2} alt="Illustration1" />;
  } else if (type === 'Illustration3') {
    return <Image priority src={Illustration3} alt="Illustration3" />;
  } else if (type === 'Illustration4') {
    return <Image priority src={Illustration4} alt="Illustration4" />;
  } else if (type === 'Illustration5') {
    return <Image priority src={Illustration5} alt="Illustration5" />;
  } else if (type === 'Illustration6') {
    return <Image priority src={Illustration6} alt="Illustration6" />;
  } else if (type === 'Illustration7') {
    return <Image priority src={Illustration7} alt="Illustration7" />;
  } else if (type === 'Illustration8') {
    return <Image priority src={Illustration8} alt="Illustration8" />;
  }
}
