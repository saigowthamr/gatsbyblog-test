---
date: '2018-06-20'
title: How to Build your First Offline Webpage
description: 'The Coffee Taster’s Flavor Wheel, the officia'
thumbnail: /img/actor-1807557_960_720.jpg
---
**Today we are building our First Offline Web page with the Help of Service Workers.**

# What is Service Workers?

Service Workers which are run BackGround In our browsers without user Interaction. They work on There Own thread and work even the browser closes / site closes.

Service Workers run only on Secured Sites like (https) at the time development it will work on localhost.


Today we are using the service Workers to Build Our Offline Web page.

First, we need to check if the service workers are available in Browser.

this our script.js file code.

![](https://thepracticaldev.s3.amazonaws.com/i/x0z218xrx7jk01iu6yl4.png)

what the above code does if there is service worker in navigation

if it is then run these code inside the block.

 we need to create the empty sw.js file and we need to specify the path of a sw.js  file in register method.

Register method gives us back a promise if it is successfully registered
then we are good to go otherwise some problem occurred during the registration.


## Now we are in Sw.js file

they are different life cycle events service worker offers us
which are install, activate, fetch?


First, we need to install the service worker for that we need to write some code.

# Install Event

```
self.addEventListener('install',function(){


})

```
it looks like these


At the time of installing we need to open the cache and put our static assets in the cache.


![](https://thepracticaldev.s3.amazonaws.com/i/6xjugryg1213exjge75h.png)

event.waitUntil() takes the Promise so that it waits until the promise
resolves. Like please wait until assets are put inside the cache.

I'm skipping the activate event we already cached our static assets in the cache name of**'my-cache-1'**.

Now we want to access the cache and use the assets inside the cache instead of sending the network request.

# Fetch event

![fetch sw](https://thepracticaldev.s3.amazonaws.com/i/owdgnfd2ue1o6ch97k7b.png)


What it does first it checks the requested file is in the cache if yes use it or send a network request.



Wow, we are  successfully completed  our  simple offline web page

![im](https://thepracticaldev.s3.amazonaws.com/i/u98l3a6umh6xfvzrw4zx.gif)


These is our final output try your own if you have any doubts feel free to ask.

Happy coding...

Other interesting stuff
## [Lazy Loading in react easy way](https://dev.to/saigowthamr/lazy-load-in-react-using--react-lazy-load-package-2h8p)

# [Build your first serverless Webapp](https://dev.to/saigowthamr/how-to-build-your-first-serverless-webpage-using-aws-lambda-31de)

**Resources**

- [Cache Api ](https://developer.mozilla.org/en-US/docs/Web/API/Cache)

- [More About Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)




