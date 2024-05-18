import LogoTypography from '@/app/components/Logo/LogoTypography/LogoTypography';
import Image from 'next/image';
import logoLight from '../../../../public/logo_light.svg';
import logo from '../../../../public/logo.svg';

export default function Logo({ theme }) {
  return (
    <div className="flex grow items-center xs:gap-[0.5rem] sm:gap-[1rem]">
      <div className="w-[3.5625rem] h-[4rem]">
        <Image priority src={theme === 'light' ? logoLight : logo} alt="Logo" />
      </div>

      <div className="relative">
        <LogoTypography theme={theme} />
      </div>
    </div>
  );
}
