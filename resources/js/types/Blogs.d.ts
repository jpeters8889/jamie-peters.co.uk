export type BlogSnippet = {
  title: string;
  description: string;
  date: string;
  link: string;
  external: boolean;
};

export type Blog = BlogSnippet & {
  slug: string;
  body: string[];
};
