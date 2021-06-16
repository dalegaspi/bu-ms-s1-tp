/**
 * Simple photo carousel
 *
 * @author dlegaspi@bu.edu
 */

export const SimpleImageCarousel = {
    data() {
        return {
            currentIndex: 0,
            images: [
                {
                    "url": "images/gallery/a.jpg",
                    "desc": "A cicada resting"
                },
                {
                    "url": "images/gallery/b.jpg",
                    "desc": "A blooming flower"
                },
                {
                    "url": "images/gallery/c.jpg",
                    "desc": "A bench"
                },
                {
                    "url": "images/gallery/d.jpg",
                    "desc": "The Louvre Pyramid"
                },
                {
                    "url": "images/gallery/e.jpg",
                    "desc": "A statue in monochrome"
                },
                {
                    "url": "images/gallery/f.jpg",
                    "desc": "A trumpet player"
                },
                {
                    "url": "images/gallery/g.jpg",
                    "desc": "A happy giraffe"
                },
                {
                    "url": "images/gallery/h.jpg",
                    "desc": "Marching band musician"
                },
                {
                    "url": "images/gallery/i.jpg",
                    "desc": "Wild grass"
                }
            ]
        }
    },
    computed: {
        currentStateText() {
            return `Image ${this.currentIndex + 1} of ${this.images.length}`;
        }
    },
    methods: {
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
        <div class="content">
            <div class="portfolio-row">
                <img class="carousel" :src="images[currentIndex].url">
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