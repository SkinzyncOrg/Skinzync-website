export interface Blog {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  related: Related[];
}

export interface Related {
  id: number;
  title: string;
  link: string;
}

export interface BlogSectionProps {
  blogs: Blog[];
}
