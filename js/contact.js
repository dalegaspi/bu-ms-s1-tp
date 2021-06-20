/**
 * Contact Vue content
 *
 * @author dlegaspi@bu.edu
 */
'use strict';
import eventHub from "./eventhub.js";

export const Contact = {
    mounted() {
        // reload new messages on click
        this.$refs.reloadMessages.addEventListener('click', () => {
            console.log("force reload messages");

            // eventHub.$emit(...) emits a custom 'refresh-guest-list' event that
            // is caught in SimpleGuestMessages component
            eventHub.$emit('refresh-guest-list');
        });

        window.scrollTo(0, 0);
    },
    template: ` 
        <div>
            <div class="banner-image contact-banner-image">
                <h1 class="home-banner-text text-focus-in">CONTACT</h1>
            </div>
            <div class="content home-intro">
                <section class="content">
                    <h2 class="resume-sub-header">Information + Social Media</h2>
                    <br>
                    <div class="contact-card">
                        <section class="contact-card-content">
                            <h4 class="resume-title">Dexter A. Legaspi</h4>
                            <h6 class="resume-title"><img alt="location" class="social-media" src="images/icons/location.svg">&nbsp;New Jersey, USA</h6>
                            <h6 class="resume-title"><img alt="email" class="social-media" src="images/icons/mail-open-outline.svg">&nbsp;dalegaspi (at) gmail.com</h6>
                            <h6 class="resume-title"><img alt="twitter" class="social-media" src="images/icons/logo-twitter.svg">&nbsp;@dalegaspi</h6>
                            <h6 class="resume-title"><img alt="stackoverflow" class="social-media" src="images/icons/logo-github.svg"><a href="https://github.com/dalegaspi">&nbsp;dalegaspi</a></h6>
                            <h6 class="resume-title"><img alt="github" class="social-media" src="images/icons/logo-stackoverflow.svg">
                            <a href="https://stackoverflow.com/users/918858/dexter-legaspi">&nbsp;stackoverflow.com/users/918858/dexter-legaspi</a></h6>
                            <h6 class="resume-title"><img alt="linkedin" class="social-media" src="images/icons/logo-linkedin.svg"><a href="https://www.linkedin.com/in/dlegaspi">&nbsp;linkedin.com/in/dlegaspi</a></h6>
                        </section>
                    </div>
                     <section class="download-vcard">
                        <a title="download vCard" href="dalegaspi.vcf">download&nbsp;<img class="download-vcard" src="images/card-outline.svg"></a>
                     </section>
                </section>
                <div class="content">
                    <h2 class="resume-sub-header">Guestbook</h2>
                    <simple-guestbook></simple-guestbook>
                </div>
                <div>
                    <h2 class="resume-sub-header">Guest Messages <span><img ref="reloadMessages" id="reloadMessages" src="images/reload-outline.svg"></span></h2>
                    <simple-guest-messages></simple-guest-messages>
                </div>
            </div>
        </div>`
};

