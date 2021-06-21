import { computed, reactive } from 'vue';

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
  excerpt: string;
  readMins: number;
  tags: Array<Tag>;
  link?: boolean;
};

const posts: Array<Post> = [
  {
    url: '/blog/js/代码规范.html',
    title: '代码规范',
    date: '2020-12-04',
    excerpt: '基于AirBnb整理的代码规范，包括prettier和eslint的整合方式，还有git-hooks的配置',
    readMins: 8,
    tags: ['ESLint'],
  },
  {
    url: '/blog/js/浏览器常见问题.html',
    title: '浏览器常见问题',
    date: '2020-08-17',
    excerpt: '记录浏览器相关面试问题，包括重绘、重排等基础知识',
    readMins: 8,
    tags: ['Chrome'],
  },
  {
    url: '/blog/js/前端性能优化.html',
    title: '前端性能优化',
    date: '2020-09-09',
    excerpt: '个人理解的一些前端性能优化方法',
    readMins: 8,
    tags: ['JavaScript'],
  },
  {
    url: '/blog/js/手写系列.html',
    title: '手写系列',
    date: '2020-09-08',
    excerpt: '手写常用函数的功能，主要是es3的内容',
    readMins: 8,
    tags: ['JavaScript'],
  },
  {
    url: '/blog/js/手写promise.html',
    title: '手写promise',
    date: '2020-07-16',
    excerpt: '从零开始实现一个Promise',
    readMins: 8,
    tags: ['JavaScript'],
  },
  {
    url: '/blog/js/js模块化.html',
    title: 'js模块化',
    date: '2020-09-04',
    excerpt: '深入浅出介绍js的模块化机制，包含手写CommonJS规范',
    readMins: 8,
    tags: ['JavaScript'],
  },
  {
    url: '/blog/leetcode/',
    title: '力扣',
    date: '2021-04-09',
    excerpt: '记录自己的力扣之旅',
    readMins: 8,
    tags: ['LeetCode'],
  },
  {
    url: '/blog/vue/基于el-tree的虚拟滚动.html',
    title: '基于el-tree的虚拟滚动',
    date: '2021-03-15',
    excerpt: '基于element-tree实现的虚拟滚动思路',
    readMins: 8,
    tags: ['Vue'],
  },
  {
    url: '/blog/webpack/webpack优化.html',
    title: 'webpack优化',
    date: '2020-09-09',
    excerpt: '个人总结的一些webpack常用优化方案',
    readMins: 8,
    tags: ['Webpack'],
  },
  {
    url: '/blog/css/居中方案.html',
    title: '居中方案',
    date: '2020-07-02',
    excerpt: 'css居中的各种方案',
    readMins: 8,
    tags: ['CSS'],
  },
  {
    url: '/blog/interview/',
    title: '面试',
    date: '2020-09-16',
    excerpt: '记录自己的面试之旅',
    readMins: 8,
    tags: ['JavaScript', 'TypeScript', 'Webpack', 'Vue', 'React'],
  },
];

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

export { page, computedPosts };
