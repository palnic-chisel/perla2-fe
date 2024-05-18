'use client';
import React from 'react';
import { ArticleP } from '@/app/model/Article';
import Image from 'next/image';
import { Picture } from '@/app/model/common';

interface BlogPreviewCardProps {
  additionalClass?: string;
  onClick?: () => void;
  article: ArticleP;
}

function BlogPreview({ picture }: Picture) {
  return (
    <div className="relative bg-white h-[13rem] w-[14rem] rounded-tl-[1.25rem] rounded-tr-[7.8125rem] rounded-bl-[1.25rem] sm:w-[19rem] sm:h-[21rem] md:w-[29rem] md:h-[27rem] desktopsm:w-[20rem] desktopsm:h-[20rem]">
      <Image
        priority={true}
        fill
        className="rounded-tl-[1.25rem] rounded-tr-[7.8125rem] rounded-bl-[1.25rem] object-cover"
        src={picture.src}
        alt={picture.alt}
      />
    </div>
  );
}

function BlogPreviewDetails({
  title,
  date,
  readTime,
  creator,
  creatorThumbnail,
}: ArticleP) {
  return (
    <div className="relative flex flex-col place-content-center gap-3 p-4 bottom-[1rem] sm:bottom-[3rem] tabletsm:bottom-[5rem] tabletsm:right-[-10rem] bg-white rounded-tl-[1.875rem] rounded-tr-[1.875rem] rounded-bl-[1rem] rounded-br-[0.625rem] w-[14rem] h-[10rem] p-2 desktopsm:bottom-[4rem] desktopsm:right-[-8rem]">
      <h3>{title}</h3>
      <p className="text-gray-600 text-[0.6875rem]">
        {date} - Read Time {readTime} minutes
      </p>
      <div className="flex justify-between items-center">
        <p className="text-gray-500 text-[0.6875rem]">{creator}</p>
        <div className="w-[1.875rem] h-[1.875rem] relative">
          <Image
            priority={true}
            fill
            className="rounded-full"
            src={creatorThumbnail.src}
            alt={creatorThumbnail.alt}
          />
        </div>
      </div>
    </div>
  );
}

export default function BlogPreviewCard({
  additionalClass,
  onClick,
  article,
}: BlogPreviewCardProps) {
  return (
    <div
      id="blog-preview-card"
      onClick={onClick}
      className={`relative flex flex-col justify-center items-center w-full z-40 md:mt-[5rem] ${additionalClass}`}
    >
      <BlogPreview picture={article.pictureThumbnail} />
      <BlogPreviewDetails {...article} />
    </div>
  );
}
