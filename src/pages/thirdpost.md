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

{% gist https://gist.github.com/saigowthamr/38937111c9f83a52090c83fd09adc049 %}


Just same as how we are building the express app.

 we need to export the app like i did in line 16.

Now create a views folder in your root directory.

![](https://thepracticaldev.s3.amazonaws.com/i/epptr5uixmg40zp3tgk2.png)

index.hbs code
{% gist https://gist.github.com/saigowthamr/00d85dd8ae8643d7a15f0978d86a65be %}


**Now final step  open the serverless.yml file.**

{% gist https://gist.github.com/saigowthamr/1d526b6f3c913a6ffd1eafd7fcde5273 %}

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
