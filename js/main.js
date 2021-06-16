/**
 * main app
 *
 * @author dlegaspi@bu.edu
 */

'use strict';

// components
import {SimpleMusicControl} from "./components/music.js";
import {SimpleGreetings} from "./components/greetings.js";
import {SimplePortfolioCard} from "./components/card.js"
import {SimpleGuestBook} from "./components/guestbook.js";

// views
import {Home} from "./home.js";
import {Contact} from "./contact.js";
import {Gallery} from "./gallery.js";
import {Work} from "./work.js";
import {Articles} from "./articles.js";
import {Portfolio} from "./portfolio.js";

// routes
const routes = [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio },
    { path: '/articles', component: Articles },
    { path: '/work', component: Work },
    { path: '/gallery', component: Gallery },
    { path: '/contact', component: Contact },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

// the app
const app = Vue.createApp({});

// attach the controls
app.component('simple-music-control', SimpleMusicControl);
app.component('simple-greetings', SimpleGreetings);
app.component('simple-portfolio-card', SimplePortfolioCard);
app.component('simple-guestbook', SimpleGuestBook)
// attach the router
app.use(router);

// one advantage of Vue3: allows app mounting on the body tag
app.mount('body');