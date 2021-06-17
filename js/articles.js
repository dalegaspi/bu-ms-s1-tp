/**
 * Articles Vue content
 *
 * @author dlegaspi@bu.edu
 */
'use strict';

export const Articles = {
    template: ` 
        <div>
            <div class="banner-image articles-banner-image">
                <h1 class="home-banner-text text-focus-in">ARTICLES</h1>
            </div>
            <div class="content home-intro">
                <section>
                    <h2 class="article-toc">Contents</h2>
                    <ol type="i">
                        <li><router-link to="#article3">The CS601 Term Project Experience</router-link></li>
                        <li><router-link to="#article1">Vue vs. React</router-link></li>
                        <li><router-link to="#article2">Arrow Functions and the Road to Functional Programming</router-link></li>
                    </ol>
                </section>
                <div class="divider"></div>
                <article id="article3">
                    <h2 class="article-title">The CS601 Term Project Experience</h2>
                    <h3 class="article-publish-date">17 Jun 2021</h3>
                    <h5 class="article-title">Part 1: Deciding on the Stack</h5>
                    <p>I was lucky enough to have some experience with Vue.js, so it's a natural decision for me 
                    to lean heavily on it.  As for deciding which version of Vue, it's somewhat easier: 
                    <a href="https://en.wikipedia.org/wiki/Barney_Stinson">A wise 
                    man</a> once said:</p>
                    <figure class="article-image content image-center">
                        <img alt="New is Always Better" src="images/new_is_always_better.gif">
                        <figcaption>A wise man speaks</figcaption>
                    </figure>
                    <p>So I went with Vue.js 3, and thankfully that was 
                    not as risky as I thought.  The huge advantage was the syntax and class structure/definitions 
                    is vastly more simplified than version 2.</p>
                    <p>I also decided on not using any bundle managers (e.g., NPM or Webpack); experience taught 
                    me that they're not that beneficial for a relatively small project, so that I can just 
                    rely on CDNs to host the Vue.js script.  However, not using bundle managers present a 
                    different challenge: to not to be able to use Single File Component (i.e., using .vue 
                    files).  Fortunately with ES6 string templates, it's not too bad since with IDE's like 
                    WebStorm, the syntax highlighting and symbol completion is preserved even inside string 
                    templates.</p>
                    <p>The last part of the stack is what to use in the backend.  I've decided to just implement 
                    a simple guest book.  I am already using Python Flask as my web server so what I did is to 
                    add two more endpoints: one to save guest book message, and one to retrieve the last six 
                    messages from the guest book.  The guest book itself is simple: a Redis database which is 
                    using a random GUID as a key and stores the metadata as JSON.</p>
                    <h5 class="article-title">Part 2: Start Writing It!</h5>
                    <p>I did not start the Term Project until I finished HW5, which allows me to learn the use of 
                    the Fetch API to do AJAX (which I know I was going to use), but the real bulk did not 
                    start until I finished HW6 to test if Vue3 _without_ bundle managers is feasible, and 
                    having to create Vue components that I can re-use in the project (the card and background 
                    music control).</p>
                    <p>As I started writing the code, I decided to further and use Vue Router to make it a 
                    full-fledged Single Page App, which I knew is going to be a bit more challenge, but it 
                    would allow for a more compact code (i.e., header/footer is written only once), to be able 
                    to use transition animations between pages, making the browsing experience better.</p>
                    <h5 class="article-title">Part 3: What Content Do I Put Here?</h5>
                    <p>he welcome page was obvious enough as well as the Contact page.  Gallery is to be added 
                    since it's been suggested in the Term Project guide.  What else?  I did not want the 
                    Assignment effort to go to waste, and I had the Card Vue component from HW5 that I needed 
                    to use, so why not use the Assignments as showcase?  And while we're at it, get a couple 
                    of things from the Graded Discussion as articles.  The last piece of the puzzle was 
                    ironically the Resume, which took me while to come up more than I would like to admit.</p>
                    <h5 class="article-title">Part 4: It's Never Really Done!</h5>
                    <p>I enjoyed working on the project so much I ended up doing a few all nighters to be able to 
                    finish the basic working version.  But the curse of working on the front end, is that 
                    improvements and enhancements are inevitable, so that took another couple of days (like 
                    adding responsive/fluidity and enhancing the CSS transitions, optimizing AJAX calls) but 
                    it certainly paid off.</p>
                    <h5 class="article-title">Epilogue: What I Have Learned</h5>
                    <p>This term project and subject as whole helped me learn a lot on front-end development.  I 
                    am primarily a backend developer, and when I needed to do some quick front-end web UI, I 
                    would rely so much on libraries like Bootstrap CSS and libraries like Moment.js.  I 
                    realized I have taken them for granted because I didn't need to understand too much about 
                    things like "flex box" or the difference between margin or padding or what an "inline 
                    block" even means.  This subject has helped me better understand how HTML5/CSS3 and 
                    JavaScript work together and potentially create a better UI experience.</p>
                    <p>I have made a few websites in the past, but this Term Project is by far the only website 
                    that I am truly proud of.</p>
                </article>
                <simple-scroll-top type="image"></simple-scroll-top>
                <div class="divider"></div>
                <article id="article1">
                    <h2 class="article-title">Vue vs. React</h2>
                    <h3 class="article-publish-date">13 Jun 2021</h3>
                    <p>For me, the better choice is Vue regardless of size of the project. And this can be explained 
                    succinctly with three simple words: <b>Two Way Binding</b>.</p>
                    <p>When I began using JavaScript frameworks for dynamic UI, I started with the original AngularJS. 
                    It is the original framework that elegantly implemented <a href="https://angular.io/guide/two-way-binding">
                    two-way binding in an MVVM framework</a>, where a model is bound to an element/elements. 
                    The original implementation didn’t scale as well 
                    (i.e., there is severe page performance as you add more and more two-way bindings), but this was 
                    actually mitigated (to an extent) by the introduction of 
                    <a href="https://angular-evan.medium.com/data-flow-best-practices-256a8ece4e5d">one-way binding construct in v1.5.</a></p>
                    <p>If this feature is so great, why do some developers hate it and even calling it anti-pattern? 
                    A few reasons I could think of, actually:</p>
                    <ul>
                        <li>While Vue (and the newer Angular 2.x) has addressed the performance issues plagued 
                        by two-way bindings in Angular 1.x, there is a tendency to have performance problems overall 
                        since there is a constant watch of change of events for the model then apply the changes to 
                        pertinent changes on the HTML DOM. With JavaScript being single-threaded, this takes a huge burden.</li>
                        <li>Yes, two-way binding is an anti-pattern. In a pure MVC, the view does not interact directly 
                        on the model and the use (and abuse) of two-way binding perpetuates this.</li>
                        <li><a href="https://en.wikipedia.org/wiki/Unidirectional_Data_Flow_(computer_science)">Unidirectional Data Flow</a>
                        promotes immutability, and therefore more predictable results, less bugs</li>
                    </ul>
                    <p>Having had the chance to work on both React and Vue, and with the advances of ES6 and Vue 
                    (with version 3.0), the choice has become clearer: Vue is better. In my opinion, there are two 
                    issues with React:</p>
                    <ul>
                        <li>The lack of any support for two-way binding in React means you will have to deal with Redux or 
                        any of the state management. Well, no not exactly, they did introduce 
                        <a href="https://reactjs.org/docs/hooks-intro.html">React Hooks</a> 
                        to (sort of) <a href="https://medium.com/javascript-scene/do-react-hooks-replace-redux-210bab340672">
                        avoid state management with Redux</a> depending on use case.</li>
                        <li>JSX. In my opinion, it’s great and awful at the same time. JSX allows you to write HTML embed 
                        JavaScript within them, but just like two-way binding, if not used carefully it makes code hard to 
                        read. Vue template can be hard to read, but if you use it in conjunction with ES6 string interpolation, 
                        it’s not actually the case anymore.</li>
                    </ul>
                    <p>Even if you do like Redux and JSX, they are not unique to React, anymore; 
                    <a href="https://vuejs.org/v2/guide/render-function.html#JSX">JSX is supported in Vue</a>, 
                    and <a href="https://github.com/vuejs/vuex">Vue has an equivalent of Redux (VueX)</a>.</p>
                    <p>As for the state of the land, it’s been argued that React has been more mature and has more users. 
                    As of 2020, surveys like <a href="https://www.classicinformatics.com/blog/top-10-javascript-frameworks-in-2020">
                    Informatics do have React as #1</a>, but VueJS in the same survey is ranked #2. 
                    The same with 2019 <a href="https://insights.stackoverflow.com/survey/2019">StackOverflow Statistics.</a></p>
                    <p>Other has argued that ReactJS is better for larger groups or if you have a mix of junior and senior 
                    developer, which I find a bit silly and mostly founded on conjecture. I have yet to find any empirical 
                    data that supports the argument that React is better than Vue in larger groups (or a mix of junion/senior 
                    dev teams).</p>
                    <p>I wouldn't even mention about tooling, because both libraries has an impressive set of tooling for 
                    developers.  This probably would have been a source of contention maybe 4 or 5 years, but this is not 
                    true anymore.</p>
                </article>
                <simple-scroll-top type="image"></simple-scroll-top>
                <div class="divider"></div>
                <article id="article2">
                    <h2 class="article-title">Arrow Functions and the Road to Functional Programming</h2>
                    <h3 class="article-publish-date">08 Jun 2021</h3>
                    <p>Let's consider this data <span class="code">tbl_hs_students</span> from 
                    <a href="https://gist.githubusercontent.com/dalegaspi/1de4c34393f624551a8cbf21ea30763d/raw/52c803f9386ad77305b28ad9ecbac47b8d28b27e/lst_data.js">here</a>.  
                    If the question is:
                    <blockquote>
                        Can you give me the list of the names of the seniors who are not in detention?
                    </blockquote>
                    The traditional way of thinking will probably lead you to this solution:</p>
                    <div class="code">
                        <pre class="code">
let lst = [];
for (i = 0; i &lt; tbl_hs_students.data.length; i++) {
    if (tbl_hs_students.data[i].year == 4 && 
        tbl_hs_students.data[i].detention) {
        lst.push(tbl_hs_students.data[i].name);
    }
}
                        </pre>
                    </div>
                    <p>Certainly, this is nothing wrong with the solution presented as it addressed the use case. 
                    However, it pertpetuates the thinking of "telling the program how to achieve the objective" instead 
                    of just "telling it what to do." The former is what is called "Imperative Programming" 
                    while the latter is called "Declarative Programming" and the latter should be the preferred way when 
                    thinking about a solution.</p>
                    <p>Why is this such a big deal? This all falls under the umbrella of "Functional Programming" but 
                    I'm not going to dive into that as it's a broad and deep subject. There's a number of reasons why it 
                    has prevailed long before Object Oriented Programming is has even existed, let alone became popular. 
                    SQL falls under this. Think about it, when you want to get data from a table, you write something like this:</p>
                    <div class="code">
                        <pre class="code">
select name from hs_table_students 
    where year = 4 and detention = 'true';                
                        </pre>
                    </div>
                    <p>As you can see, you do not tell the query to create a list of names and any of that list operations, 
                    you just ask for the list of data that meets the criteria!</p>
                    <p>Simple and direct, isn't it? So is there a way to do this in JavaScript? Absolutely, and it looks like this:</p>
                    <div class="code">
                        <pre class="code">
let lst2 = tbl_hs_students.data
    .filter(s => s.year == 4 && s.detention)
    .map(s => s.name);                
                        </pre>
                    </div>
                    <p>The code is shorter, and requires less thinking. And that's the take-away here: it's easier to reason 
                    about, easier to understand and it is also less prone to bugs.  Why?  It's because of referencial transparency.  
                    The lack of side-effects ensures that the result of the code is predictable, consistent and thread-safe.</p>
                    <p>So what's this have to do with 
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">Arrow Functions</a>? 
                    Declarative programming in JavaScript is nothing new; this 
                    has been around for quite some time with libraries like Lodash and Underscore.js. 
                    Below is a partial list of popular third-party libraries for JavaScript functional/declarative programming:</p>
                    <table id="fpLibraries" class="flat-table">
                        <caption>Popular JavaScript Functional Programming Libraries</caption>
                        <thead>
                            <tr>
                               <th>Library</th>  
                               <th>Website</th>
                            </tr>     
                        </thead>
                        <tbody>
                            <tr>
                                <td>Lodash</td>
                                <td><a href="https://lodash.com/">lodash.com</a></td>
                            </tr>   
                            <tr>
                                <td>Underscore.js</td>
                                <td><a href="https://underscorejs.org/">underscorejs.org</a></td>
                            </tr>
                            <tr>
                                <td>Sugar</td>
                                <td><a href="https://sugarjs.com/">sugarjs.com</a></td>
                            </tr>   
                            <tr>
                                <td>Ramda</td>
                                <td><a href="https://ramdajs.com/">ramdajs.com</a></td>
                            </tr>  
                            <tr>
                                <td>lazy.js</td>
                                <td><a href="https://danieltao.com/lazy.js/">danieltao.com/lazy.js</a></td>
                            </tr>   
                            <tr>
                                <td>MOUT</td>
                                <td><a href="http://moutjs.com/">moutjs.com</a></td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <p>The issue is that before ES5, it's a bit tedious to write and it makes it hard to read code that takes 
                    advantage of it. Before ES6, the above solution would have looked like this:</p>
                    <div class="code">
                        <pre class="code">
var lst3 = tbl_hs_students.data
    .filter(function(s) {
        return s.year == 4 && s.detention;
    })
    .map(function(s) {
        return s.name;
    });                
                        </pre>
                    </div>
                    <p>As you can see: same effect, not as cool.</p>
                    <p>With that in mind, creating a Markdown table with the data above gets more interesting with the 
                    combination of the new ES6 template literals (string interpolation):</p>
                    <div class="code">
                        <pre class="code">
let markdown_table = [
    \`| $\{tbl_hs_students.headers.join(' | ')} |\`,
    \`| $\{tbl_hs_students.headers.map(h => '-'
        .repeat(h.length))
        .join(' | ')} |\`,
    tbl_hs_students.data
        .filter(s => s.year == 4 && s.detention)
        .map(d => \`| $\{Object.values(d).join(' | ')} |\`)
        .join('\\n')
    ].join(\`\\n\`);                
                        </pre>
                    </div>
                    <p>You can argue that the above example is a bit contrived, but this goes to show that if we're not 
                    careful, syntactic sugar and shortcuts makes it easy for us to abuse it and even make code less readable.</p>
                    <p>The full code can be found <a href="https://codepen.io/dalegaspi/pen/KKWBgeR">here at CodePen</a> or 
                    <a href="https://jsfiddle.net/bubuli/dwzm2k4n/2/">here at JSFiddle</a>.</p>
                </article>
                <simple-scroll-top type="image"></simple-scroll-top>
            </div>
        </div>
        `
}