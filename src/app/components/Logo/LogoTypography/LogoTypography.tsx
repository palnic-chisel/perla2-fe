interface LogoTypographyProps {
  theme?: 'light' | 'dark';
}

const LOGO_NAME = 'Chiara';
const LOGO_LASTNAME = 'Ganga';
const LOGO_CAPTION = 'psicoterapia e mindfulness';

export default function LogoTypography({ theme }: LogoTypographyProps) {
  return (
    <>
      <div>
        <span
          className={`font-bold text-[1.5rem] sm:text-[2rem] ${
            theme === 'light' ? 'text-white' : 'text-[#333333]'
          } cursor-default`}
        >
          {LOGO_NAME}
        </span>
        <span
          className={`font-normal text-[1.5rem] sm:text-[2rem] ${
            theme === 'light' ? 'text-white' : 'text-[#333333]'
          } cursor-default`}
        >
          {LOGO_LASTNAME}
        </span>
      </div>
      <div>
        <span
          className={`font-normal text-[1rem] sm:text-[1.25rem] ${
            theme === 'light' ? 'text-white' : 'text-[#333333]'
          } cursor-default`}
        >
          {LOGO_CAPTION}
        </span>
      </div>
    </>
  );
}
