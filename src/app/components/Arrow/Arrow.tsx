import Image from 'next/image';
import ArrowIllustration from '../../../../public/arrow.svg';

export default function Arrow() {
  return <Image priority src={ArrowIllustration} alt="Arrow" />;
}
