/**
 * convenience tag for scroll top top
 */

export const SimplePermanentScrollTop = {
    methods: {
        scrollToTop(e) {
            e.preventDefault()
            window.scroll(0, 0);
        }
    },
    template: `
        <button @click="scrollToTop" class="button-scroll-top">
            <img src="images/arrow-up-outline-white.svg">
        </button>
    `
}