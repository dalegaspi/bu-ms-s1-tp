/**
 * Contact Vue content
 *
 * @author dlegaspi@bu.edu
 */
'use strict';

export const Gallery = {
    template: ` 
        <div class="banner-image gallery-banner-image">
            <h1 class="home-banner-text text-focus-in">GALLERY</h1>
        </div>
        <div class="content home-intro">
            <section>
                <h2 class="article-title">Photographs</h2>
                <p>As an avid photographer since the era of analog film, I have taken many memorable images and here are a few of them.</p>
            </section>
            <div class="divider"></div>
            <div class="content">
                <simple-image-carousel></simple-image-carousel>
            </div>
        </div>`
}