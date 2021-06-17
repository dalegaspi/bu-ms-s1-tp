/**
 * convenience tag for scroll top top
 */

export const SimpleScrollTop = {
    props: ["type"],
    methods: {
        scrollToTop(e) {
            e.preventDefault()
            window.scroll(0, 0);
        }
    },
    template: `
        <a href="#" @click="scrollToTop">
            <img v-if="type == 'image'" alt="scroll to top" class="scroll-top" src="images/arrow-up-outline.svg">
            <span v-else>Top</span>
        </a>
    `
}