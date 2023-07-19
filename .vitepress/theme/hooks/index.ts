import { computed, ref } from 'vue';
import { data } from '../post.data';

export type { Post } from '../post.data';

const currentPage = ref(1);
const pageSize = ref(10);

export const usePost = () => {
  const total = computed(() => data.length);
  const totalPage = computed(() => Math.ceil(total.value / pageSize.value));

  const posts = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value;
    if (currentPage.value === totalPage.value) {
      return data.slice(start);
    } else {
      const end = currentPage.value * pageSize.value;
      return data.slice(start, end);
    }
  });

  return { currentPage, pageSize, total, totalPage, posts };
};
