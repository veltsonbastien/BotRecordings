BotRecordings makes it easy to add a bot to a video call and get the video recording! This is a demo built on top of the [Recall.ai](https://www.recall.ai/) API. 

## Step 1: Get started on Recall.ai

To get started, you're going to need an API token from Recall.ai. To do so, you can [book a demo](https://recallai.typeform.com/to/z2CoFKjj?typeform-source=www.recall.ai) with the team!

Once you get your `API_TOKEN`, you can continue to move on to the next steps.

Before moving on to the code, make use of the Recall.ai interactive docs. It's recommended that you can get the [List Bots endpoint](https://recallai.readme.io/reference/bot_list) to work with your `API_TOKEN` before moving on to the next step. 

> Note: When authorizing endpoints through the interactive docs, you will have to add in the phrase "Token" as well as your `API_TOKEN`. 


## Step 2: Clone the Repo and Get Started 
After cloning the repo, make sure you get all the necessary packages with a fresh `yarn install` or `npm install`.

Once that is done, create a `.env.local` file in the root directory to store your environmental variables. You'll need to save two keys, `API_URL` and `API_TOKEN` and the resulting file should look like this:
```angular2html
API_URL = "https://api.recall.ai/api/v1/bot/"
API_TOKEN = "Token {your-recall-api-key}" // make sure that you keep the phrase "Token" here
```

Once that is finished, you should be able to get up and running with `yarn dev` or `npm run dev`. 

> Note: If you're having issues with this step but weren't having issue with the past one, make sure that the .env.local file is created and that the environmental variables are set properly. Make sure to stop and restart any running instances of the app in the case that the new changes weren't picked up. 

## Step 3 & Beyond: Familiarize yourself with the repo
The code base is NextJS using the [NextJS App Router](https://nextjs.org/docs). The App Router with NextJS 14 has new conventions than prior versions. If you haven't built with it before it is recommended to read these parts of the docs first: 
* [Routing Fundamentals](https://nextjs.org/docs/app/building-your-application/routing)
* [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components) vs. [Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components) and when you'd use either
* [Server Actions](https://nextjs.org/docs/app/api-reference/functions/server-actions) and how they help with `async` calls


In the case of any other questions about the repo, please feel free to contact me on [X (Twitter)](https://twitter.com/veltsonbastien)!
