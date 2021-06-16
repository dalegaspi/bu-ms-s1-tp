/**
 * guest book message submission Vue component
 *
 * @author dlegaspi@bu.edu
 */

'use strict';

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
        <input type="text" v-model="email" id="email" class="contact-input-text">
        <br>
        <br>
        <label class="contact-form">Message</label>
        <textarea class="contact-input" v-model="message" id="message" maxlength="200"></textarea>
        <br>
        <br>
        <button class="flat-button">Submit</button>&nbsp&nbsp;<span class="form-error">{{ error }}</span><span class="form-ok"> {{ status }}</span>
    </form>
    `,
    methods: {
        isValidEmail(email) {
            return email !== undefined && EMAIL_REGEX.test(email);
        },

        isValidName(name) {
            return name !== undefined && name.length > 0;
        },

        validateAndSubmit(e) {
            e.preventDefault();

            if (!this.isValidEmail(this.email)) {
                console.log("guestbook invalid e-mail")
                this.error = 'Invalid e-mail';
            } else if (!this.isValidName(this.name)) {
                this.error = 'Invalid name';
                console.log("guestbook invalid name")
            } else {
                // https://stackoverflow.com/a/46640744/918858
                let form = this.$refs.guestBook;
                let fd = new FormData();
                fd.append('name', this.name);
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

                        if (result == 'ok') {
                            this.error = '';
                            this.status = `Guest book message submission is successful.`;
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