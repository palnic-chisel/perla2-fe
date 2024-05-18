import BrandLogo from '@/app/components/BrandLogo/BrandLogo';
import LogoTypography from '@/app/components/Logo/LogoTypography/LogoTypography';

const SplashScreen = () => {
  return (
    <div className="relative h-screen w-screen bg-[#ffa384] flex flex-col items-center justify-center gap-[2rem]">
      <div className="flex items-center justify-center">
        <BrandLogo theme={'light'} dimension={'small'} />
        <div className="relative">
          <LogoTypography theme={'light'} />
        </div>
      </div>
      <div className="wobbling-2"></div>
    </div>
  );
};

export default SplashScreen;
