import { orangeColor } from '@/app/components/version2/resources/constants';

interface TitleProps {
  category: string;
  label: string;
}

const Title = ({ category, label }: TitleProps) => {
  return (
    <div id="title-wrapper" className="flex w-full flex-col justify-center">
      <h3
        id="title-category"
        className={`text-[${orangeColor}] text-[0.875rem] font-bold leading-tight`}
      >
        {category}
      </h3>
      <h2
        id="title-label"
        className={`text-[1.875rem] font-bold leading-tight`}
      >
        {label}
      </h2>
    </div>
  );
};

export default Title;
