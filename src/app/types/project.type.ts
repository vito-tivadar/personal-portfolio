import { Link } from './link.type';
import { Tag } from './tag.type';

export type Project = {
  title: string;
  description: string;
  image_url: string;
  links: Link[];
  tags: Tag[];
};
