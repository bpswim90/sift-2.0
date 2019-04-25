# sift-2.0

This repo is a rebuild of https://github.com/bpswim90/sift, with some changes to play around with performance optimization and to make it a PWA (Progressive Web App).

## What's different?

The major difference is this version is bundled with Webpack (via the Vue-cli), rather than Browserify. This allowed me to implement lazy-loading of routes in the app, and take advantage of some of the magical optimizing that webpack does. 

One other *really* cool thing is that this version can be run as a PWA! This is again thanks to the magic of Vue-cli and webpack. 

## Is it better?

Performance improvements so far have been negligible; the app's loading clocks slightly faster, though not noticeably so. On an emulated 3G phone speed, both versions seem to load in around 6s. 

## Future Improvements

One major limitation is the large size of bootstrap and jquery, which are used in the project. I suspect there would be performance gains from only loading the most necessary styles, and deferring the loading of the rest of bootstrap. 

Caching may also help, though I haven't gotten into that yet. 

The user experience when the app is run as a PWA has some bugs and hiccups; for example, the lack of a back button. Also, sometimes a page will take a long time to load for reasons I don't yet understand.

## How to Run as a PWA

iOS:
* Navigate to https://bpswim90.github.io/sift-2.0/ in your iPhone
* In Safari, click the share button and scroll over to "Add to Home Screen"
* Give the app a name if needed and click Add.
* You're done! You should now have an icon on your homescreen that you can use to launch Sift. 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
