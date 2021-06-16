/**
 * music control Vue component
 *
 * @author dlegaspi@bu.edu
 */

'use strict';

import {blurThenHideText, removeClassWithDelay, setAudioLowVolume} from "../utils.js";

export const SimpleMusicControl = {
    data() {
        return {
            musicOn: false
        }
    },
    mounted() {
        let music = this.$refs.backgroundMusic;
        let text = this.$refs.musicStatusText;

        this.musicOn = !music.paused;
        setAudioLowVolume(music);
        removeClassWithDelay(text, 'text-blur-out');
        blurThenHideText(text, 2000);
    },
    computed: {
        musicPlayStatusText() {
            return `music is ${this.musicOn ? 'on' : 'off'}`;
        }
    },
    template: `
        <div class="content text-center">
            <br>
            <img @click="toggleMusicClick" id="musicButton" class="muted" src="images/musical-notes.svg">
            <br>
            <span ref="musicStatusText" id="musicStatusText" class="small-text-wide muted music-status">{{ musicPlayStatusText }}</span>
            <audio ref="backgroundMusic" loop src="audio/bensound-pianomoment.mp3">
                Your browser does not support embedded audio.
            </audio>
        </div>`,
    methods: {
        /**
         * this toggles the music on click
         *
         * @param event
         */
        toggleMusicClick(event) {
            let music = this.$refs.backgroundMusic;
            let text = this.$refs.musicStatusText;

            // https://stackoverflow.com/a/38665865/918858
            if (music.paused) {
                music.play();
            } else {
                music.pause();
            }

            // set the data
            this.musicOn = !music.paused;

            // this is to remove the status of the music after 2s
            removeClassWithDelay(text, 'text-blur-out');
            blurThenHideText(text, 2000);
        }
    }
}