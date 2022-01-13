import 'virtual:windi.css';
import './styles/main.less';
import Pagination from './components/pagination.vue';
import Icons from './components/icons.vue';
import Layout from './layout.vue';
import NotFound from './not-found.vue';
import Posts from './components/posts.vue';
import Zooming from 'zooming';
import * as Panelbear from '@panelbear/panelbear-js';
import { Theme } from 'vitepress';

const theme: Theme = {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    app.component('posts', Posts);
    app.component('pagination', Pagination);
    app.component('icons', Icons);

    // if we're in a server context then we exit out here
    if (typeof document === 'undefined' || typeof window === 'undefined') return;

    const zooming = new Zooming();
    zooming.config({ scaleBase: 0.75, bgOpacity: 0 });
    app.provide('zoom', zooming);

    // analytics
    app.provide('analytics', Panelbear);
    Panelbear.load(import.meta.env.VITE_PANELBEAR_ID as string, {
      spaMode: 'history',
      autoTrack: true,
      debug: import.meta.env.DEV,
    });
  },
};
export default theme;
