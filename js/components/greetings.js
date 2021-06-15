/**
 * Dynamic salutation depending on browser time of day
 *
 * @author dlegaspi@bu.edu
 */

import {getRandomNumber} from "../utils.js";

export const SimpleGreetings = {
    data() {
        return {
            date: new Date()
        }
    },
    computed: {
        greeting() {
            let greeting = 'morning';
            if (this.date.getHours() > 12 && this.date.getHours() <= 17) {
                greeting = 'afternoon';
            } else if (this.date.getHours() > 16) {
                greeting = 'evening';
            }

            return `${this.prefix()} ${greeting}!`;
        }
    },
    methods: {
        prefix() {
            const prefixes = ['Hope you are having a breathtaking',
                'Good',
                'What a good',
                'Awesome',
                'A pleasant',
                'Great',
                'Wishing you the best'];

            return prefixes[getRandomNumber(prefixes.length)];
        }
    },
    template: `<span>{{ greeting }}</span>`
}