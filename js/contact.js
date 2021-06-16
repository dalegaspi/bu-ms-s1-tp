/**
 * Contact Vue content
 *
 * @author dlegaspi@bu.edu
 */
'use strict';

export const Contact = {
    template: ` 
        <div class="banner-image contact-banner-image">
            <h1 class="home-banner-text text-focus-in">CONTACT</h1>
        </div>
        <div class="content home-intro">
            <section>
                <h2 class="resume-sub-header">Information + Social Media</h2>
                <br>
                <section class="employer">
                    <h4 class="resume-title">Dexter A. Legaspi</h4>
                    <h6 class="resume-title"><img alt="location" class="social-media" src="images/icons/location.svg">&nbsp;New Jersey, USA</h6>
                    <h6 class="resume-title"><img alt="email" class="social-media" src="images/icons/mail-open-outline.svg">&nbsp;dalegaspi (at) gmail.com</h6>
                    <h6 class="resume-title"><img alt="twitter" class="social-media" src="images/icons/logo-twitter.svg">&nbsp;@dalegaspi</h6>
                    <h6 class="resume-title"><img alt="stackoverflow" class="social-media" src="images/icons/logo-github.svg"><a href="https://github.com/dalegaspi">&nbsp;dalegaspi</a></h6>
                    <h6 class="resume-title"><img alt="github" class="social-media" src="images/icons/logo-stackoverflow.svg">
                    <a href="https://stackoverflow.com/users/918858/dexter-legaspi">&nbsp;stackoverflow.com/users/918858/dexter-legaspi</a></h6>
                    <h6 class="resume-title"><img alt="linkedin" class="social-media" src="images/icons/logo-linkedin.svg"><a href="https://www.linkedin.com/in/dlegaspi">&nbsp;linkedin.com/in/dlegaspi</a></h6>
                </section>
                <br>
            </section>
            <div class="divider"></div>
            <div class="content">
                <h2 class="resume-sub-header">Guestbook</h2>
                <simple-guestbook></simple-guestbook>
            </div>
        </div>`
};