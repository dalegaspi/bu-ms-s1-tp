/**
 * convenience tag for scroll top top
 */

export const SimplePrintDoc = {
    props: ["title"],
    methods: {
        sendToPrinter() {
            window.print();
        }
    },
    template: `
        <a href="#" :title="title" @click="sendToPrinter" class="collapse-on-print"> 
            print&nbsp;<img alt="print" class="print-doc" src="images/print-outline.svg">
        </a>
    `
}