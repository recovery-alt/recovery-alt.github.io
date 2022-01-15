import { computed, reactive } from 'vue';
import dayjs from 'dayjs';
const modules = import.meta.glob('../../../blog/**/*.md');

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
};

const posts = reactive<Array<Post>>([]);

const currentPage = 1;
const total = posts.length;
const pageSize = 8;
const totalPage = Math.ceil(total / pageSize);

const page = reactive({ currentPage, total, pageSize, totalPage });

const computedPosts = computed(() => {
  const start = (page.currentPage - 1) * page.pageSize;
  if (page.currentPage === page.totalPage) {
    return posts.slice(start);
  } else {
    const end = page.currentPage * page.pageSize;
    return posts.slice(start, end);
  }
});

(async function () {
  for (const module of Object.values(modules)) {
    const { __pageData } = await module();
    const pageData = JSON.parse(__pageData);
    const { frontmatter, relativePath } = pageData;
    const { disabled, title, date: rawDate, description, readMins, tags } = frontmatter;
    if (disabled) continue;
    const url = relativePath.replace(/\.md$/, '.html');
    const date = dayjs(rawDate).format('YYYY-MM-DD');
    posts.push({ url, title, date, description, readMins, tags });
  }
})();

export { page, computedPosts };
