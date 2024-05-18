import logo from '../../../../public/logo.svg';
import logoLight from '../../../../public/logo_light.svg';
import Image from 'next/image';

interface BrandLogoProps {
  theme: 'light' | 'dark';
  dimension: 'small' | 'big';
}

export default function BrandLogo({ theme, dimension }: BrandLogoProps) {
  return (
    <div
      className={`w-[${dimension === 'small' ? '3.5625rem' : '15rem'}] h-[${
        dimension === 'small' ? '4rem' : '15rem'
      }]`}
    >
      <Image priority src={theme === 'light' ? logoLight : logo} alt="Logo" />
    </div>
  );
}
