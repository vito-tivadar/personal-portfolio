import { Link } from './link.type';
import { Project } from './project.type';

export type section = {
  title: string;
  description: string;
  projects: Project[];
  skills: Link[];
};
