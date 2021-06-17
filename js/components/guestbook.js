/**
 * guest book message submission Vue component
 *
 * @author dlegaspi@bu.edu
 */

'use strict';
import eventHub from "../eventhub.js";
import {blurThenHideText, removeClassWithDelay} from "../utils.js";

// regex from: https://vuejs.org/v2/cookbook/form-validation.html
const GUESTBOOK_POST_URL = 'https://www.subtleimages.com/api/guestbook/message'
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const SimpleGuestBook = {
    data() {
        return {
            error: '',
            status: '',
            name: '',
            email: '',
            message: '',
        }
    },
    template: `
    <form @submit="validateAndSubmit" id="guestBook" ref="guestBook" action="${GUESTBOOK_POST_URL}">
        <label class="contact-form">Name</label>
        <input type="text" id="name" v-model="name" class="contact-input-text">
        <br>
        <br>
        <label class="contact-form">E-Mail</label>
        <input type="text" v-model="email" id="email" placeholder="Your e-mail will not be sold to anyone." class="contact-input-text">
        <br>
        <br>
        <label class="contact-form">Message</label>
        <textarea class="contact-input" v-model="message" id="message" placeholder="Say something." maxlength="200"></textarea>
        <br>
        <button class="flat-button">Send Message</button>&nbsp&nbsp;<span class="form-error">{{ error }}</span>
        <span ref="messageOk" class="form-ok"> {{ status }}</span>
    </form>
    `,
    methods: {
        isValidEmail(email) {
            return email !== undefined && EMAIL_REGEX.test(email);
        },

        isValidMessage(msg) {
            return msg !== undefined && msg.length > 0;
        },

        normalizeName(name) {
            return (name === undefined || name.length === 0) ? 'Anonymous' : name;
        },

        refreshGuestMessages() {
            eventHub.$emit('refresh-guest-list');
        },

        resetInputs() {
            this.name = '';
            this.email = '';
            this.message = '';
        },

        validateAndSubmit(e) {
            e.preventDefault();

            let messageOkText = this.$refs.messageOk;
            removeClassWithDelay(messageOkText, 'text-blur-out');
            if (!this.isValidEmail(this.email)) {
                this.error = 'Invalid e-mail';
                this.status = ''
                console.log("guestbook invalid e-mail")
            } else if (!this.isValidMessage(this.message)) {
                this.error = 'Message should not be empty.';
                this.status = ''
                console.log("guestbook invalid msg")
            } else {
                // https://stackoverflow.com/a/46640744/918858
                let form = this.$refs.guestBook;
                let fd = new FormData();
                fd.append('name', this.normalizeName(this.name));
                fd.append('email', this.email);
                fd.append('message', this.message);
                fetch(form.action, {
                    method: 'PUT',
                    mode: 'cors',
                    body: new URLSearchParams(fd)
                })
                    .then(response => {
                        console.log(response);
                        return response.json();
                    })
                    .then(data => {
                        let result = data['status'];

                        if (result === 'ok') {
                            this.error = '';
                            this.status = `Guest book message submission is successful.`;
                            this.resetInputs();
                            blurThenHideText(messageOkText, 3000);

                            // we can have this for "live" update of messages as soon as "Submit" is pressed
                            // but it's disabled for now to avoid too much chatter on the backend

                            // this.refreshGuestMessages();
                        } else {
                            this.error = 'Guest book message submission status is unknown.';
                            this.status = '';
                        }
                    })
                    .catch((error) => {
                        alert(`An error has occurred: ${error}`);
                        this.status = '';
                        this.error = `An error has occurred: ${error}`;
                    });
            }
        }
    }
}