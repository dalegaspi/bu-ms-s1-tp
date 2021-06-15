/**
 * Portfolio Vue content
 *
 * @author dlegaspi@bu.edu
 */
'use strict';

export const Portfolio = {
    data() {
        return {
            items: [
                {
                    id: 0,
                    title: '.01',
                    subTitle: 'HTML5 + CSS3',
                    desc: 'A website built using HTML5 and CSS3 only',
                    imgSrc: 'images/portfolio/01.jpg',
                    url: 'https://www.subtleimages.com/s/hw02',
                    repo: 'https://github.com/dalegaspi/bu-ms-s1-02'
                },
                {
                    id: 1,
                    title: '.02',
                    subTitle: 'JavaScript Demo',
                    desc: 'A simple interactive JavaScript demo.',
                    imgSrc: 'images/portfolio/02.jpg',
                    url: 'https://www.subtleimages.com/s/hw03',
                    repo: 'https://github.com/dalegaspi/bu-ms-s1-03'
                },
                {
                    id: 2,
                    title: '.03',
                    subTitle: 'JavaScript Validation',
                    desc: 'A simple JavaScript validation demo.',
                    imgSrc: 'images/portfolio/03.jpg',
                    url: 'https://www.subtleimages.com/s/hw04',
                    repo: 'https://github.com/dalegaspi/bu-ms-s1-04'
                },
                {
                    id: 3,
                    title: '.04',
                    subTitle: 'AJAX Demo',
                    desc: 'A simple asynchronous JavaScript demo.',
                    imgSrc: 'images/portfolio/04.jpg',
                    url: 'https://www.subtleimages.com/s/hw05',
                    repo: 'https://github.com/dalegaspi/bu-ms-s1-05'
                },
                {
                    id: 4,
                    title: '.05',
                    subTitle: 'Vue.js Demo',
                    desc: 'A simple Vue.js application with components.',
                    imgSrc: 'images/portfolio/05.jpg',
                    url: 'https://www.subtleimages.com/s/hw06',
                    repo: 'https://github.com/dalegaspi/bu-ms-s1-06'
                }
            ]
        }
    },
    template: ` 
        <div class="banner-image portfolio-banner-image">
            <h1 class="home-banner-text text-focus-in">PORTFOLIO</h1>
        </div>
        <div class="content home-intro">
            
            <section>
                <h2 class="article-title">Overview</h2>
                <p>This is a collection of the sites that I have built using current web technologies.</p>
            </section>
            <div class="divider"></div>
            
            <div class="portfolio-row">
                <div v-for="item in items" class="portfolio-column">
                    <simple-portfolio-card :title="item.title"
                                             :sub-title="item.subTitle"
                                             :desc="item.desc"
                                             :img-src="item.imgSrc"
                                             :repo="item.repo"
                                             :url="item.url"></simple-portfolio-card>
                </div>
            </div>
        </div>`
}