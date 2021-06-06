import './styles/main.less';
import './styles/vars.css';
import './styles/layout.css';
import './styles/code.css';
import './styles/custom-blocks.css';
import Layout from './layout.vue';
import NotFound from './not-found.vue';
import Posts from './components/posts.vue';
import Zooming from 'zooming';
// import * as Panelbear from '@panelbear/panelbear-js';
import Pagination from './components/pagination.vue';
import Gitee from './icon/gitee.vue';
import Github from './icon/github.vue';
import Juejin from './icon/juejin.vue';

const theme = {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    app.component('posts', Posts);
    app.component('pagination', Pagination);
    app.component('gitee', Gitee);
    app.component('github', Github);
    app.component('juejin', Juejin);

    // if we're in a server context then we exit out here
    if (typeof document === 'undefined' || typeof window === 'undefined') {
      return;
    }

    const zooming = new Zooming();
    zooming.config({
      scaleBase: 0.75,
      bgOpacity: 0,
    });
    app.provide('zoom', zooming);

    // analytics
    // app.provide('analytics', Panelbear);
    // Panelbear.load(import.meta.env.VITE_PANELBEAR_ID, {
    //   spaMode: 'history',
    //   autoTrack: true,
    //   debug: import.meta.env.DEV,
    // });
  },
};
export default theme;
