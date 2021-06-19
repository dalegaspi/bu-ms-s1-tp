/**
 * main app
 *
 * @author dlegaspi@bu.edu
 */

'use strict';
// config import
import appConfig from './config.js'

// components
import {SimpleMusicControl} from "./components/music.js";
import {SimpleGreetings} from "./components/greetings.js";
import {SimplePortfolioCard} from "./components/card.js"
import {SimpleGuestBook} from "./components/guestbook.js";
import {SimpleGuestMessages} from "./components/guests.js";
import {SimpleImageCarousel} from "./components/carousel.js";
import {SimpleScrollTop} from "./components/scrolltop.js";
import {SimplePrintDoc} from "./components/print.js";

// views
import {Home} from "./home.js";
import {Contact} from "./contact.js";
import {Gallery} from "./gallery.js";
import {Work} from "./work.js";
import {Articles} from "./articles.js";
import {Portfolio} from "./portfolio.js";

// utils
import {preloadImages} from "./utils.js";

// routes
const routes = [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio },
    { path: '/articles', component: Articles },
    { path: '/work', component: Work },
    { path: '/gallery', component: Gallery },
    { path: '/contact', component: Contact },
];

/**
 * determine the history mode based on the config
 *
 * @param config
 * @returns {*}
 */
function historyMode(config) {
    let createHistoryFunc;
    if (config.$historyMode !== undefined && config.$historyMode === 'html5') {
        console.log('history mode => html5')
        createHistoryFunc = VueRouter.createWebHistory;
    } else {
        console.log('history mode => hash')
        createHistoryFunc = VueRouter.createWebHashHistory;
    }

    if (config.$base !== undefined && config.$base.length > 0) {
        console.log('app base ')
        return createHistoryFunc(config.$base);
    } else {
        return createHistoryFunc();
    }
}

const router = VueRouter.createRouter({
    history: historyMode(appConfig),
    routes,
    scrollBehavior: (to, from, savedPosition) => {
        if (to.hash) {
            return {el: to.hash}
        } else {
            return {x: 0, y: 0}
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0,0);
        }
    }
});

// the app
const app = Vue.createApp({
    mounted() {
        console.log("pre-loading banner images...");
        preloadImages([
            'images/banners/work-banner.jpg',
            'images/banners/portfolio-banner.jpg',
            'images/banners/articles-banner.jpg',
            'images/banners/contact-banner.jpg',
            'images/banners/gallery-banner.jpg',
            'images/banners/articles-banner.jpg'])
    }
});

// attach the controls
app.component('simple-music-control', SimpleMusicControl);
app.component('simple-greetings', SimpleGreetings);
app.component('simple-portfolio-card', SimplePortfolioCard);
app.component('simple-guestbook', SimpleGuestBook);
app.component('simple-guest-messages', SimpleGuestMessages);
app.component('simple-image-carousel', SimpleImageCarousel);
app.component('simple-scroll-top', SimpleScrollTop);
app.component('simple-print-doc', SimplePrintDoc);

// attach the router
app.use(router);

// one advantage of Vue3: allows app mounting on the body tag
app.mount('body');