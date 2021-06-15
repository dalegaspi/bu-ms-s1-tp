# CS601 Term Project

This project is a culmination of what has been learned in the CS601 class.  Page can be viewed live at [subtleimages.com/s/tp01/](https://www.subtleimages.com/s/tp01/).

## Technology Stack:

- HTML5
- CSS3
- JavaScript ECMAScript 2015
- Vue.js 3
- Vue Router 4
- Python Flask (Hosting, routing, and backend API)

## Implementation and Code Structure

### How Vue is Used 

The website is a Single Page Application that heavily leverages Vue and Vue Router for fast and dynamic content.  JavaScript and HTML5 routing _is_ required.  

We are linking Vue.js and Vue Router scripts via CDN URLs.  To avoid having to deal with bundlers like npm or webpack that would likely complicate the development process, we are splitting the "views" into each .js file and imported in main.js.  Note that we cannot use Single File Components (aka the .vue files) without JS bundlers, so .js shall remain.  The nice thing about ES6 is the introduction of string templates which makes writing Vue Templates easier since IDEs like WebStorm is still able to provide syntax highlighting and symbol completion.

### Views

| Name | Filename | Remarks |
| ---- | --- | --- |
| Home | home.js | The home page; uses the greetings.js component.|
| Resume | work.js | The resume.  Mostly static content. |
| Portfolio | portfolio.js | Collection of Homeworks created for the subject; uses the card.js component |
| Articles | articles.js | Collection of posts from the graded Blackboard discussions. |
| Gallery | gallery.js | Gallery of images; uses gallery.js component. |
| Contact | contact.js | Contact information; uses guestbook.js component |

### Components

| Name | Filename | Remarks |
| ---- | --- | --- |
| Card | card.js | Cards used by the Portfolio to showcase |
| Greetings | greetings.js | Greeting used on Home page to greet depending on time of day |
| Music | music.js | Control to turn on/off background music |
| Guestbook | guestbook.js | Guest book form validation and submission |
| Guests | guests.js | Retrives the 5 most recent guest messages; uses AJAX |

### Other JavaScript files

- Utils.js - contains the common utility functions.

### API

The API has 2 simple endpoints for putting and getting guestbook messages.  The messages are persisted in Redis.

#### Put Message
Puts messages into backend in a Redis storage

```
curl -X "PUT" "https://subtleimags.com/guestbook/message" \
-H 'Content-Type: application/x-www-form-urlencoded; charset=utf-8' \
--data-urlencode "name=Tony" \
--data-urlencode "email=tony@stark.com" \
--data-urlencode "message=Part%20of%20the%20Journey%20is%20the%20End."
```

#### Retrieve Messages
Endpoint that etrieves (at most) 5 most recent messages from backend from Redis

```
curl "https://subtleimags.com/guestbook/messages"
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

### Overall Design and Layout Responsiveness

The page has as a very simple and clean design aimed for both desktop and mobile browsers in mind. Optimum fonts and font sizes and colors (with applied CSS styling on line/letter spacing and margins) have been selected for best readability. Careful thought has been put in so that the content is as flat as possible and requires no unnecessary horizontal scrolling.

However, certain sections of the page af liquid and adjusts as the screen real estate changes (using `@media` query in CSS3), particularly the header/menu and the gallery and cards components that uses flex box to flow fluidly on the available screen. 







