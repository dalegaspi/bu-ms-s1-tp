/**
 * convenience tag for scroll top top
 */

export const SimplePermanentScrollTop = {
    mounted() {
        window.onscroll = () => this.onScroll();
    },
    methods: {
        onScroll() {
            const SCROLL_THRESHOLD = 0.10;
            let rootElement = document.documentElement;
            let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
            if ((rootElement.scrollTop / scrollTotal ) > SCROLL_THRESHOLD ) {
                console.log('showing scroll to top button');
                this.$refs.scrollToTop.style.visibility = 'visible';
                this.$refs.scrollToTop.classList.remove('slide-out-right');
                this.$refs.scrollToTop.classList.add('slide-in-right');
            } else {
                console.log('hiding scroll to top button');
                this.$refs.scrollToTop.classList.remove('slide-in-right');
                this.$refs.scrollToTop.classList.add('slide-out-right');
            }
        },

        scrollToTop(e) {
            e.preventDefault()
            window.scroll(0, 0);
        }
    },
    template: `
        <button ref="scrollToTop" @click="scrollToTop" class="button-scroll-top">
            <img src="images/arrow-up-outline-white.svg">
        </button>
    `
}