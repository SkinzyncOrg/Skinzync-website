export interface Blog {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export interface BlogSectionProps {
  blogs: Blog[];
}
