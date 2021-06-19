/**
 * Simple photo carousel
 *
 * @author dlegaspi@bu.edu
 */

import {addClassWithDelay, preloadImages, removeClassWithDelay} from "../utils.js";

export const SimpleImageCarousel = {
    data() {
        return {
            currentIndex: 0,
            images: [
                {
                    "url": "images/gallery/a.jpg",
                    "desc": "A cicada resting",
                    "exif": ["Nikon Z6", "Petzval 80.5 Mk II"]
                },
                {
                    "url": "images/gallery/b.jpg",
                    "desc": "A blooming flower",
                    "exif": ["Nikon Z6", "Petzval 80.5 Mk II"]
                },
                {
                    "url": "images/gallery/c.jpg",
                    "desc": "A bench",
                    "exif": ["Nikon Z6", "Petzval 80.5 Mk II"]
                },
                {
                    "url": "images/gallery/d.jpg",
                    "desc": "The Louvre Pyramid",
                    "exif": ["Leica M240", "Leica Summilux 35 f1.4 ASPH"]
                },
                {
                    "url": "images/gallery/e.jpg",
                    "desc": "A statue in monochrome",
                    "exif": ["Leica Monochrom", "Leica Summilux 50 f1.4 ASPH"]
                },
                {
                    "url": "images/gallery/f.jpg",
                    "desc": "A trumpet player",
                    "exif": ["Nikon D600", "Nikon 200 f2 VR I"]
                },
                {
                    "url": "images/gallery/g.jpg",
                    "desc": "A happy giraffe",
                    "exif": ["Nikon D600", "Tamron SP 150-600"]
                },
                {
                    "url": "images/gallery/h.jpg",
                    "desc": "Marching band musician",
                    "exif": ["Nikon D600", "Tamron SP 150-600"]
                },
                {
                    "url": "images/gallery/i.jpg",
                    "desc": "Wild grass",
                    "exif": ["Nikon D600", "Zeiss 135 f2"]
                },
                {
                    "url": "images/gallery/j.jpg",
                    "desc": "A lizard",
                    "exif": ["Fuji X-Pro 1", "Fuji 90 f2 WR"]
                },
                {
                    "url": "images/gallery/k.jpg",
                    "desc": "White flowers",
                    "exif": ["Fuji X-Pro 1", "Fuji 90 f2 WR"]
                },
                {
                    "url": "images/gallery/l.jpg",
                    "desc": "Las Vegas Strip",
                    "exif": ["Ricoh GR II"]
                },
                {
                    "url": "images/gallery/n.jpg",
                    "desc": "Stormtrooper",
                    "exif": ["Nikon Z6", "Nikon Z 50 f1.8"]
                },
                {
                    "url": "images/gallery/o.jpg",
                    "desc": "Epcot Center, Disneyworld",
                    "exif": ["Nikon Z6", "Nikon Z 50 f1.8"]
                },
                {
                    "url": "images/gallery/p.jpg",
                    "desc": "Not My Dog",
                    "exif": ["Leica M9", "Voïgtlander 50 f2 APO"]
                },
                {
                    "url": "images/gallery/r.jpg",
                    "desc": "Carrot cake",
                    "exif": ["Leica M9", "Voïgtlander 50 f2 APO"]
                }
            ]
        }
    },
    created() {
        console.log('pre-loading carousel images...');
        preloadImages(this.images.map(i => i.url));

        this.randomizeArray(this.images);
    },
    computed: {
        currentStateText() {
            return `Image ${this.currentIndex + 1} of ${this.images.length}`;
        },

        exifAsRawHtml() {
            return this.images[this.currentIndex].exif.map(e => `${e}<br>`).join('');
        },


    },
    methods: {
        randomizeArray(array) {
            // https://stackoverflow.com/a/25984542/918858
            let count = array.length,
                randomNumber,
                temp;
            while (count){
                randomNumber = Math.random() * count-- | 0;
                temp = array[count];
                array[count] = array[randomNumber];
                array[randomNumber] = temp;
            }
        },

        previousImage(e) {
            this.currentIndex = (this.currentIndex <= 0) ? this.images.length - 1 : this.currentIndex - 1;
            console.log(`new current index from prev = ${this.currentIndex}`);
            e.preventDefault();
        },

        nextImage(e) {
            this.currentIndex = (this.currentIndex >= this.images.length - 1) ? 0 : this.currentIndex + 1;
            console.log(`new current index from next = ${this.currentIndex}`);
            e.preventDefault();
        }
    },
    template: `
        <div>
            <div class="portfolio-row" >
                <img ref="current" class="carousel" :src="images[currentIndex].url" >
                <div class="fade-in portfolio-img-desc"><span class="fade-in" v-html="exifAsRawHtml"></span></div>
            </div>
            <div class="text-center"><span class="small-text-wide muted">{{ images[currentIndex].desc }}</span>
            <br>
            <span class="small-text-wide muted">{{ currentStateText }}</span>
            </div>
            <p class="text-center">
                <a id="prevImage" href="#"
                    @click="previousImage" 
                    class="wide-link-bigger muted">prev</a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a @click="nextImage" 
                    id="nextImage" href="#"
                    class="wide-link-bigger muted">next</a>
            </p>
        </div>
    `
}