# CS601 Term Project

This project is a culmination of what has been learned in the CS601 class.  Page can be viewed live at [subtleimages.com/s/tp01/](https://www.subtleimages.com/s/tp01/).

A video of the feature tour can be seen [here](https://youtu.be/Xl8y_MR7ps0).

## Technology Stack

- HTML5
- CSS3
- JavaScript ECMAScript 2015
- Vue.js 3
- Python Flask (Hosting, routing, and backend API)
- Redis (Persistence)

## Development and Configuration

The different config files under `/config` folder dictates the app behavior:

```javascript
export default {
    // the rest api base url
    $apiBaseUrl: 'https://www.subtleimages.com/',
    
    // the base path for use with Vue Router
    $base : '',
    
    // history mode for Vue Router...can be 'hash' or 'html5'
    $historyMode: 'hash'
}
```

The `justfile` has tasks for copying which config to be used and is copied to `js/config.js`

```bash
# copy the default config.js from config/dev-hash
> just

# copy the html config.js from config/dev-html
> just dev-html5
```

## Implementation and Code Structure

### How Vue is Used 

The website is a Single Page Application that heavily leverages Vue.js 3 and Vue Router 4 for fast and dynamic content.  JavaScript and HTML5 routing _is_ required.  

We are linking Vue.js and Vue Router scripts via CDN URLs.  To avoid having to deal with bundlers like npm or webpack that would likely complicate the development process, we are splitting the "views" into each .js file and imported in main.js.  Note that we cannot use Single File Components (aka the .vue files) without JS bundlers, so .js shall remain.  The nice thing about ES6 is the introduction of string templates which makes writing Vue Templates easier since IDEs like WebStorm is still able to provide syntax highlighting and symbol completion.

#### Events API in Vue 3

We are using [tiny-emitter](https://github.com/scottcorgan/tiny-emitter) as an event bus since we are using Vue 3,  the default internal event bus is gone and the [developers of Vue to use a library for the event bus](https://v3.vuejs.org/guide/migration/events-api.html#_3-x-update).  This part is just used _exclusively_ on the "Contact" page to allow refreshing latest messages without a force reload of the browser (which is very jarring and inelegant).

### Modules

The JavaScript/Vue code are broken down into two main groups: Views and Components.  The Views are the wholly-realized pages that correspond to one of the menu items, and Views can use one or more Components that aid to the enhancement of the View.

#### Views

| Name | Filename | Remarks |
| ---- | --- | --- |
| Home | home.js | The home page; uses the greetings.js component|
| Resume | work.js | The resume.  Mostly static content |
| Portfolio | portfolio.js | Collection of Homeworks created for the subject; uses the card.js component |
| Articles | articles.js | Collection of posts from the graded Blackboard discussions |
| Gallery | gallery.js | Gallery of images; uses carousel.js component |
| Contact | contact.js | Contact information; uses guestbook.js and guests.js components |

#### Components

| Name | Filename | Remarks |
| ---- | --- | --- |
| Card | card.js | Cards used by the Portfolio to showcase images |
| Greetings | greetings.js | Greeting used on Home page to greet depending on time of day |
| Music | music.js | Control to turn on/off background music |
| Guestbook | guestbook.js | Guest book form validation and submission via AJAX |
| Guests | guests.js | Retrives the most recent guest messages via AJAX |
| Carousel | carousel.js | Image carousel for Gallery |

### Other JavaScript files

- Utils.js - contains the common utility functions.
- eventBus.js - the event bus that is used by Contacts page to refresh most recent 

### API Backend

The Backend API is powered by Python Flask and has 2 simple endpoints for putting and getting guestbook messages in "Contact" view.  The messages are persisted in Redis.  A snippet of the code that handles the PUT/GET endpoints and the corresponding Redis operations can be found in [this gist](https://gist.github.com/dalegaspi/f65397f4d987782cede4dfaf3c396eaf)

#### Put Message
Saves messages into backend in a Redis storage

```
curl -X "PUT" "https://subtleimags.com/api/guestbook/message" \
-H 'Content-Type: application/x-www-form-urlencoded; charset=utf-8' \
--data-urlencode "name=Tony" \
--data-urlencode "email=tony@stark.com" \
--data-urlencode "message=Part of the Journey is the End."
```

#### Retrieve Messages
Endpoint that retrieves (at most) 6 most recent messages from backend from Redis

```
curl "https://subtleimags.com/api/guestbook/messages"
```

```json
[
  {
    "id": "47ee462d-896e-437f-aa85-71f5d86b2a10",
    "ts": 1623797658,
    "name": "Obadiah",
    "email": "obadiah@aol.com",
    "message": "He built in in a cave!  With a bunch of scraps!"
  },
  {
    "id": "01958916-2176-4691-93e0-42f8cb772e6b",
    "ts": 1623797725,
    "name": "Loki",
    "email": "king107@asgard.org",
    "message": "If it's all the same to you, I'll have that drink now."
  }
]
```

## Overall Design and Layout Responsiveness

The page has as a very simple and clean design aimed for both desktop and mobile browsers in mind. Optimum fonts and font sizes and colors (with applied CSS styling on line/letter spacing and margins) have been selected for best readability. Careful thought has been put in so that the content is as flat as possible and requires no unnecessary horizontal scrolling.

Moreover, certain sections of the page are [responsive](https://en.wikipedia.org/wiki/Responsive_web_design)--i.e., they adapt the readability as the screen real estate changes (using `@media` query in CSS3), particularly the header/menu and the gallery and cards components that uses flex box to flow fluidly on the available screen. 







