/**
 * Dynamic salutation depending on browser time of day
 *
 * @author dlegaspi@bu.edu
 */

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

            return `Good ${greeting}!`;
        }
    },
    template: `<span>{{ greeting }}</span>`
}