/**
 * Contact Vue content
 *
 * @author dlegaspi@bu.edu
 */
'use strict';

export const Gallery = {
    template: ` 
        <div>
            <div class="banner-image gallery-banner-image">
                <h1 class="home-banner-text text-focus-in">GALLERY</h1>
            </div>
            <div class="content home-intro">
                <section >
                    <h2 class="article-title">Images</h2>
                    <div content="content">
                    <p>After acquiring a <a href="https://en.wikipedia.org/wiki/Pentax_K1000">Pentax K-1000</a> in high 
                     school, burning through a few rolls of film, and getting back the pictures from 
                     the photo lab after a few days, I knew I was hooked. There was a time I developed my own black and 
                     white film when I was engulfed by the hobby.  With the advent of digital photography, there was no 
                     looking back and I embraced the technology when it became more affordable. Below is a small fraction
                     of my images.  More images can be found on my <a href="https://flickr.com/photos/subtleimages/">Flickr account</a>.</p>
                     </div>
                      <div class="divider"></div>
                </section>
               
                <div class="content">
                    <simple-image-carousel></simple-image-carousel>
                </div>
            </div>
        </div>`
}