import './styles/main.less';
import './styles/vars.css';
import './styles/layout.css';
import './styles/code.css';
import './styles/custom-blocks.css';
import Layout from './Layout.vue';
import NotFound from './NotFound.vue';
import Posts from './components/Posts.vue';
import Zooming from 'zooming';
// import * as Panelbear from '@panelbear/panelbear-js';
import Pagination from './components/Pagination.vue';

const theme = {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    app.component('Posts', Posts);
    app.component('Pagination', Pagination);

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
