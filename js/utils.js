/**
 * utils/common stuff
 *
 * @author dlegaspi@bu.edu
 */

/**
 * blur then hide text
 *
 * @param textElement
 * @param delay
 * @param blurOutClass
 */
export function blurThenHideText(textElement, delay = 1500, blurOutClass = 'text-blur-out') {
    console.log(`blurring out and removing text [${textElement.id}]`);
    textElement.classList.add(blurOutClass);
    setTimeout(() => textElement.classList.add(blurOutClass), delay);
}

const LOW_VOLUME_SETTING = 0.05;

/**
 * force audio to have low volume to be even less obnoxious
 *
 * @param audioElement
 */
export function setAudioLowVolume(audioElement) {
    audioElement.volume = LOW_VOLUME_SETTING;
}

/**
 * remove class from element after delay
 *
 * @param element
 * @param className
 * @param delay
 */
export function removeClassWithDelay(element, className, delay = 500) {
    console.log(`removing ${className} from ${element.id}`);
    setTimeout(() => element.classList.remove(className));
}

let preloadedImages = [];
/**
 * preload images https://stackoverflow.com/a/29339033/918858
 *
 * @param urls
 */
export function preloadImages(urls) {
    preloadedImages = urls.map(url => {
        let img = new Image();
        img.src = url;
        img.onload = () => console.log(`image url ${url} has been loaded successfully`);
        
        return img;
    });
}