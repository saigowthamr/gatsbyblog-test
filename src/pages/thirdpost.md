---
title: How to Build Your First Serverless Website♡Aws
date: '2017-08-11'
description: Build Your First Serverless Webpage Using Aws Lambda
---


**Today we are building Our  First serverless webpage using Aws Lambda.**

# What is ServerLess?

ServerLess means the name it says Don't worry More about servers instead of concentrate on Core Product.

Aws, take care of the servers and no need to worry about scaling up and scaling down one good thing about serverless is Aws only charges for you when someone hits your webpage if there is no traffic it means no charges.

I think now you have some understanding about serverless let's learn it more by building.

### What are Requirements?

- [Aws Free Tier Account](https://aws.amazon.com/free/)

- Nodejs v8+


**I'm using the serverless framework Cli to create and deploy apps**.

Open your terminal

```
npm install -g serverless

sls login // SLS is a shortcut of serverless

```

After sls login, You need to configure Your Aws Credentials with a serverless framework

[Get Aws Credentials](https://www.youtube.com/watch?v=tgb_MRVylWw)

Once It is done Your are good to go.

```
mkdir serverless-app

cd serverless-app
```

```
sls create --template  hello-world
```
The above command generates the boilerplate.

![structure](https://thepracticaldev.s3.amazonaws.com/i/h5tx01hpr8mvrils39w3.png)

Boilerplate generates Three files like in above image.

Now we need to install the express and other packages.

```
npm init  // to generate a package.json file

npm i --save express body-parser hbs serverless-http

```
Now open the handler.js file and clear it why because we writing it from scratch.

```javascript
const serverless = require("serverless-http");
const hbs = require("hbs");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.set("view engine", "hbs");

app.get("/", function(req, res) {
  res.status(200).render("index");
});

module.exports.gallery = serverless(app);
```


Just same as how we are building the express app.

 we need to export the app like i did in line 16.

Now create a views folder in your root directory.

![](https://thepracticaldev.s3.amazonaws.com/i/epptr5uixmg40zp3tgk2.png)

index.hbs code

```html
<!DOCTYPE html>
<html lang=en>

<head>
    <meta charset=UTF-8>
    <meta name=viewport content="width=device-width, initial-scale=1.0">
    <meta http-equiv=X-UA-Compatible content="ie=edge">
    <meta http-equiv=refresh>
    <title>Gallery</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0
        }

        body {
            padding: 2rem
        }

        ul {
            padding: 1rem;
            display: flex;
            list-style: none;
            justify-content: space-around;
            flex-wrap: wrap
        }

        li {
            background-color: #ffdfd9;
            color: #000;
            padding: .51rem
        }

        .container {
            margin-top: 1rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 290px));
            grid-gap: 1rem;
            padding: 1rem;
            justify-content: center;
            box-shadow: 0 1px 1px #000
        }

        img {
            background-position: top;
            background-size: cover;
            height: 200px;
            width: 290px;
            box-shadow: 0 2px 10px #000;
            cursor: pointer;
            transition: all .2s
        }

        img:hover {
            box-shadow: none;
            transform: scale(1.1)
        }
    </style>

    <body>
        <header>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Posts</li>
                </ul>
            </nav>
        </header>
        <div class=container>
            <div>
                <img src=https://images.pexels.com/photos/1117267/pexels-photo-1117267.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 alt=ballon>
            </div>
            <div>
                <img src="https://images.pexels.com/photos/1117267/pexels-photo-1117267.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt=lion>
            </div>
            <div>
                <img src=https://images.pexels.com/photos/1117267/pexels-photo-1117267.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 alt=model>
            </div>
            <div>
                <img src=https://images.pexels.com/photos/879479/pexels-photo-879479.jpeg?auto=compress&cs=tinysrgb&h=350 alt=easter-3204589_960_720>
            </div>
            <div>
                <img src=https://images.pexels.com/photos/1116302/pexels-photo-1116302.jpeg?auto=compress&cs=tinysrgb&h=350 alt=night-1927265_960_720>
            </div>
            <div>
                <img src=https://images.pexels.com/photos/956724/pexels-photo-956724.jpeg?auto=compress&cs=tinysrgb&h=350 alt=portrait-3013924_960_720>
            </div>
            <div>
                <img src=https://images.pexels.com/photos/1116302/pexels-photo-1116302.jpeg?auto=compress&cs=tinysrgb&h=350 alt=model>
            </div>
            <div>
                <img src=https://images.pexels.com/photos/1116302/pexels-photo-1116302.jpeg?auto=compress&cs=tinysrgb&h=350 alt=ballon>
            </div>
            <div>
                <img src=https://images.pexels.com/photos/1116558/pexels-photo-1116558.jpeg?auto=compress&cs=tinysrgb&h=350 alt=back-to-school-2629361_960_720>
            </div>
            <div>
                <img src=https://images.pexels.com/photos/956724/pexels-photo-956724.jpeg?auto=compress&cs=tinysrgb&h=350 alt=portrait-3013924_960_720>
            </div>
            <div>
                <img src=https://images.pexels.com/photos/956724/pexels-photo-956724.jpeg?auto=compress&cs=tinysrgb&h=350 alt=portrait-3013924_960_720>
            </div>
            <div>
                <img src=https://images.pexels.com/photos/1116558/pexels-photo-1116558.jpeg?auto=compress&cs=tinysrgb&h=350 alt=portrait-3013924_960_720>
            </div>
        </div>
```



**Now final step  open the serverless.yml file.**

```yml

service: gallery

# The `provider` block defines where your service will be deployed
provider:
  name: aws
  runtime: nodejs8.10

# The `functions` block defines what code to deploy
functions:
  app:
    handler: handler.gallery
    # The `events` block defines how to trigger the http events
    events:
        - http: ANY /
        - http: 'ANY {proxy+}'

```

- runtime nodejs8.10 why because Aws lambda currently supports v8.10.

- In line 11 we need to specify the name of our function.

- In line 12 handler it means we need to tell on which file it needs to look.

Now in your terminal run.

```
sls deploy
```
![](https://thepracticaldev.s3.amazonaws.com/i/pu5mrwbt7u7l7c3ngo6z.png)

It will give us back endpoint copy and open in your browser


![](https://thepracticaldev.s3.amazonaws.com/i/duvvh0tk7icc0utz8mpt.png)

That's it we are done.

If you build the same thing using Aws console it is not very easy for the new people. So that I'm using the serverless framework to show you in an easy way.

Above image is our output.
