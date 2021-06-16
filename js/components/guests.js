/**
 * guest messages Vue component
 *
 * @author dlegaspi@bu.edu
 */

'use strict';

import eventHub from "../eventhub.js";

const GUESTS_MESSAGES_URL = 'https://www.subtleimages.com/api/guestbook/messages';
export const SimpleGuestMessages = {
    data() {
        return {
            refreshCounter: 0,
            messages: []
        }
    },
    mounted() {
        this.refreshData();
        eventHub.$on('refresh-guest-list', () => this.refresh());
    },
    methods: {
        refreshData() {
            fetch(GUESTS_MESSAGES_URL)
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

        refresh() {
            console.log("triggering refresh");
            this.refreshData();
            this.refreshCounter += 1;
        },

        getMessageDate(ts) {
            let date = new Date(ts);
            return `${date.toDateString()}`;
        },
        getMessageTime(ts) {
            let date = new Date(ts);

            // https://stackoverflow.com/a/20430558/918858
            return `${date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
        }
    },
    template: `
        <div :key="refreshCounter">
            <div v-for="m in messages">
                <section class="guest-message-entry">
                    <div class="guest-message-ts"> 
                        <h6 class="guest-message-ts">{{ getMessageDate(m.ts) }}</h6>
                        <h6 class="guest-message-ts">{{ getMessageTime(m.ts) }}</h6>
                    </div>
                    <div class="guest-message guest-message-data ">
                        <h5 class="guest-message">{{ m.name }}</h5>
                        <h6 class="resume-title">"{{ m.msg }}"</h6>
                    </div>
                </section>
                <br>
            </div>
        </div>
        `
}