/**
 * home Vue content
 *
 * @author dlegaspi@bu.edu
 */
'use strict';

export const Home = {
    template: ` 
        <div class="banner-image home-banner-image">
            <h1 class="home-banner-text text-focus-in">WELCOME</h1>
        </div>
        <div class="content home-intro">
            <h2 id="introduction" class="sub-header">Introduction</h2>
            <p>
                <!-- Vue component that generates randomized greeting based on time of day -->
                <simple-greetings></simple-greetings>
            </p>
            <p>My name is Dexter Legaspi. I am a graduate of <a href="https://mapua.edu.ph/">Mapúa Institute of
                Technology</a> with a degree of Bachelor of
                Science in Computer Engineering. I am currently pursuing a Master's Degree in Software Development at <a
                        href="htts://bu.edu/">Boston
                    University</a> on track for graduating in the fall of 2022.</p>
            <p>I am a professional software developer with over twenty-five years of experience in the field. I have
                designed and
                implemented a number of successful services that has stood the test of time. Most of the services have been
                implemented using open-source software and modern design software patterns.
            </p>
            <p>On this website, you will be able to see my work history, portfolio, images and articles
                that will hopefully be useful to visitors and potential clients.</p>
            <p>Enjoy!</p>
            <div class="divider"></div>
            <h2 id="about" class="sub-header">About This Website</h2>
            <p>This website is built with <a href="https://www.w3schools.com/html/">HTML5</a>, 
                <a href="https://www.w3schools.com/w3css/defaulT.asp">CSS3</a>, 
            and <a href="https://www.w3schools.com/js/js_es6.asp">JavaScript (ECMAScript 2015)</a> with 
                <a href="https://v3.vuejs.org/">Vue.js</a> + <a href="https://next.router.vuejs.org/">Vue Router</a>.
                Stunning CSS Animations are from <a href="https://animista.net/">Animista</a>.  Icons supplied by 
                <a href="https://ionic.io/ionicons">Ionicons</a>.
            </p>
            <p>You can view the source code on <a href="https://github.com/dalegaspi/bu-ms-s1-tp">this GitHub repository</a>.</p>
        </div>`
};