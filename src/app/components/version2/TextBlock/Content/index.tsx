interface ContentProps {
  content: string;
}

const Content = ({ content }: ContentProps) => {
  return (
    <p id="content" className="flex w-full flex-col justify-center mt-[1rem]">
      {content}
    </p>
  );
};

export default Content;
