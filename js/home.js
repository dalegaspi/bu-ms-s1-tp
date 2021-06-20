/**
 * home Vue content
 *
 * @author dlegaspi@bu.edu
 */
'use strict';

export const Home = {
    mounted() {
        // this temporarily turns off smooth scroll animation while going to top of page
        document.documentElement.style.scrollBehavior = 'auto';
        setTimeout(() => window.scrollTo(0, 0), 5);
        setTimeout(() => document.documentElement.style.scrollBehavior = 'smooth', 5);
    },
    template: ` 
        <div>
            <div class="banner-image home-banner-image">
                <h1 class="home-banner-text text-focus-in">WELCOME</h1>
            </div>
            <div class="content home-intro">
                <h2 id="introduction" class="sub-header">Introduction</h2>
                <p>
                    <!-- Vue component that generates randomized greeting based on time of day -->
                    <simple-greetings></simple-greetings>
                </p>
                <p>My name is Dexter Legaspi. I am a graduate of <a title="Mapúa" href="https://mapua.edu.ph/">Mapúa University</a> 
                    with a degree of Bachelor of Science in Computer Engineering. I am currently pursuing a Master's 
                    Degree in Software Development at <a title="Boston University" href="htts://bu.edu/">Boston University</a> on track for 
                    graduating in the fall of 2022.</p>
                <p>I am a professional software developer with over twenty-five years of experience in the field. I have
                    designed and
                    implemented a number of successful services that has stood the test of time. Most of the services have been
                    implemented using open-source software and modern design software patterns.
                </p>
                <p>On this website, you will be able to see <router-link to="/work">my work history</router-link>, 
                    <router-link to="/portfolio">portfolio</router-link>, <router-link to="/gallery">images</router-link> 
                    and <router-link to="/articles">articles</router-link> that will hopefully be useful to visitors and 
                    potential clients.</p>
                <p>Enjoy! And feel free to <router-link to="/contact">contact</router-link> me and leave a message in the guest book!</p>
                <div class="divider"></div>
                <h2 id="about" class="sub-header">About This Website</h2>
                <section>
                    <aside class="home">
                        <h4>The Tech Stack at a Glance</h4>
                        <ul type="square">
                            <li><a title="HTML5" href="https://www.w3schools.com/html/">HTML 5</a></li>
                            <li><a title="CSS3" href="https://www.w3schools.com/w3css/defaulT.asp">CSS 3</a></li>
                            <li><a title="ECMAScript 2015" href="https://www.w3schools.com/js/js_es6.asp">JavaScript (ECMAScript 2015)</a></li>
                            <li><a title="Vue.js 3" href="https://v3.vuejs.org/">Vue.js 3</a></li>
                        </ul>
                    </aside>
                    <p>This website is built with <a title="HTML5" href="https://www.w3schools.com/html/">HTML 5</a>, 
                        <a title="CSS3" href="https://www.w3schools.com/w3css/defaulT.asp">CSS 3</a>, 
                    and <a title="ECMAScript 2015" href="https://www.w3schools.com/js/js_es6.asp">JavaScript (ECMAScript 2015)</a> with 
                        <a title="Vue.js 3" href="https://v3.vuejs.org/">Vue.js</a> + <a title="Vue Router 4" href="https://next.router.vuejs.org/">Vue Router</a>
                        + <a title="Vue tiny-emitter" href="https://github.com/scottcorgan/tiny-emitter">Tiny Emitter</a>.
                        Stunning CSS Animations are from <a title="Animista" href="https://animista.net/">Animista</a>.  Icons supplied by 
                        <a title="Ionic Icons" href="https://ionic.io/ionicons">Ionicons</a>.  
                        Stock photos used in <router-link to="/portfolio">Portfolio</router-link> section from 
                        <a title="Unsplash" href="https://unsplash.com">Unsplash</a>.
                    </p>
                    <p>You can view the source code on <a title="The repo" href="https://github.com/dalegaspi/bu-ms-s1-tp">this GitHub repository</a>.</p>
                    <p>Special thanks to Prof. Kanabar, Chris Carducci and the entire CS601 2021 S1 class who made the 
                    learning experience truly enjoyable and memorable.</p>
                </section>
            </div>
        </div>`
};