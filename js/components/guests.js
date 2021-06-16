/**
 * guest messages Vue component
 *
 * @author dlegaspi@bu.edu
 */

'use strict';

const GUESTS_MESSAGES_URL = 'https://www.subtleimages.com/api/guestbook/messages';
export const SimpleGuestMessages = {
    data() {
        return {
            messages: []
        }
    },
    mounted() {
        return fetch(GUESTS_MESSAGES_URL)
            .then(response => {
                console.log('Data retrieval successful.')
                return response.json();
            })
            .then(data => {
                this.messages = data;
            })
            .catch((error) => {
                console.error('Error: ', error);
            });
    },
    methods: {
        getMessageDate(ts) {
            let date = new Date(ts);

            return `${date.toDateString()} @ ${date.toLocaleTimeString()}`;
        }
    },
    template: `
        <div v-for="m in messages">
            <section class="guest-message">
                <h5 class="guest-message">{{ m.name }}</h5>
                <h6 class="resume-title">{{ getMessageDate(m.ts) }}</h6>
                <h6 class="resume-title">"{{ m.msg }}"</h6>
            </section>
            <br>
        </div>`
}