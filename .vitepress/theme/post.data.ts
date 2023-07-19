import dayjs from 'dayjs';
import { createContentLoader } from 'vitepress';

type Tag =
  | 'Vue'
  | 'Webpack'
  | 'Github'
  | 'NodeJS'
  | 'CSS'
  | 'React'
  | 'Vite'
  | 'Rollup'
  | 'TypeScript'
  | 'ESLint'
  | 'Chrome'
  | 'JavaScript'
  | 'LeetCode';

export type Post = {
  url: string;
  title: string;
  date: string;
  description: string;
  readMins: number;
  tags: Array<Tag>;
  link?: boolean;
  excerpt?: string;
  disabled?: boolean;
};

export default createContentLoader('blog/**/*.md', {
  excerpt: true,
  transform(raw) {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        url,
        excerpt,
        ...(frontmatter as Omit<Post, 'url' | 'excerpt'>),
        date: dayjs(frontmatter.date).format('YYYY-MM-DD'),
      }))
      .filter(({ disabled }) => !disabled)
      .sort((a, b) => dayjs(b.date).valueOf() - dayjs(a.date).valueOf());
  },
});

declare const data: Post[];
export { data };
