/**
 * card Vue component
 *
 * @author dlegaspi@bu.edu
 */

'use strict';

/**
 * convenience function for setting src in background image for CSS
 *
 * @param src
 * @returns {string}
 */
function toUrl(src) {
    return `url(${src})`
}

export const SimplePortfolioCard = {
    props: ['title', 'sub-title', 'img-src', 'url', 'repo', 'desc'],
    data() {
        return {}
    },
    template: `
        <div class="card">
            <div class="card-container">
                <div ref="cardImage" 
                     :style="{ backgroundImage: toUrl(imgSrc) }"
                     class="card-image">
                    <div class="title-container">
                        <p class="card-title">{{ title }}</p>
                        <span class="card-subtitle">{{ subTitle }}</span>
                    </div>
                </div>
            </div>
            <div class="content card-desc">
                <p>{{ desc }}</p>
            </div>
            <div class="card-actions text-center">
                <button @click="launchWebsite" class="flat-button">Launch</button>&nbsp;
                <button @click="gotoGitHubRepo" class="flat-button">GitHub</button>
            </div>
        </div>`,
    methods: {
        /**
         * convenience function to convert to url() notation used by CSS
         *
         * @param src
         * @returns {string}
         */
        toUrl(src) {
            return `url(${src})`
        },

        launchWebsite() {
            window.open(this.url, '_blank');
        },

        gotoGitHubRepo() {
            window.open(this.repo, '_blank');
        }


    }
}