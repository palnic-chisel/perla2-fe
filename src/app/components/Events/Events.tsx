import React from 'react';
import BlogPreviewCard from '@/app/components/BlogPreviewCard/BlogPreviewCard';
import { articlesMock } from '@/app/model/mock';
import Illustration from '@/app/components/Illustration/Illustration';
import { animated, useTransition, UseTransitionProps } from 'react-spring';
import { ArticleP } from '@/app/model/Article';

export default function Events() {
  const transitions = useTransition<ArticleP, UseTransitionProps<ArticleP>>(
    articlesMock[0],
    {
      exitBeforeEnter: true,
      from: { opacity: 0, transform: 'scale(0.5) translateX(-50%)' },
      enter: { opacity: 1, transform: 'scale(1) translateX(0%)' },
      leave: { opacity: 0, transform: 'scale(0.5) translateY(-50%)' },
      config: { tension: 300, friction: 300 },
    } as UseTransitionProps<ArticleP>
  );

  return (
    <>
      <div className="text-white absolute right-[1rem] top-[1rem]">
        <h2>DAL BLOG</h2>
      </div>
      <div className="absolute z-30 top-[-1rem] left-[-0.2rem] xl:hidden">
        <Illustration type={'Illustration5'} />
      </div>
      {transitions((style) => (
        <animated.div style={style as any}>
          <BlogPreviewCard article={articlesMock[0]} />
        </animated.div>
      ))}
    </>
  );
}
