import Pagination from './components/pagination.vue';
import Icons from './components/icons.vue';
import Layout from './layout.vue';
import Posts from './components/posts.vue';
import Zooming from 'zooming';
import { Theme } from 'vitepress';
import './assets/styles/index.less';

const theme: Theme = {
  Layout,
  enhanceApp({ app }) {
    app.component('Posts', Posts);
    app.component('Pagination', Pagination);
    app.component('Icons', Icons);

    // if we're in a server context then we exit out here
    if (typeof document === 'undefined' || typeof window === 'undefined') return;

    const zooming = new Zooming();
    zooming.config({ scaleBase: 0.75, bgOpacity: 0 });
    app.provide('zoom', zooming);

    // analytics
    // app.provide('analytics', Panelbear);
    // load(import.meta.env.VITE_PANELBEAR_ID as string, {
    //   spaMode: 'history',
    //   autoTrack: true,
    //   debug: import.meta.env.DEV,
    // });
  },
};
export default theme;
