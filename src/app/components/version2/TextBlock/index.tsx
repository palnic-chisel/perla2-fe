import Title from '@/app/components/version2/TextBlock/Title';
import Content from '@/app/components/version2/TextBlock/Content';

interface TextBlockProps {
  content: string;
  category: string;
  label: string;
}

const TextBlock = ({ label, category, content }: TextBlockProps) => {
  return (
    <>
      <Title category={category} label={label} />
      <Content content={content} />
    </>
  );
};

export default TextBlock;
