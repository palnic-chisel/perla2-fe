import { Picture } from '@/app/model/common';

export interface ArticleP {
  id: number;
  title: string;
  content: string;
  pictures: Picture[];
  pictureThumbnail: Picture;
  date: string;
  creator: string;
  creatorThumbnail: Picture;
  readTime: number;
}
