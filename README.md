## Project Description

I would like to discuss it with you personally,  gmail automation can't be done with cypress
we would need our local host to make it easier, because cypress Browsers adhere to a strict same-origin policy.

I have researched an internet(stackoverflow, some articles, google documentation) but didn't find some proper 
example how to test gmail in cypress, I have found BE testing, but it was  done with their local application( example : https://github.com/kateyurasova/gmail-tester-examples/)

Tests in `login.spec.ts` and `signup.spec.ts` 
will fail because of google  restrictions,
Cypress will show `cross origin error happened on page load`
I have tried to add `chromeWebSecurity: false` and also tried other options to avoid issue,
but cypress just blocking tests


Test in `getEmail.spec.ts` - I  have created project in google developers console,
set up  ClientID, Client Secret etc to get Access token,
but access token expires in 1 hour and in cypress I can't get token automatically, because it needs to be manually proceeded from google account.
To get access token from oauth 2.0   I would need more time and researches 
I have got token from https://developers.google.com/oauthplayground and also from Postman 
and added into `cypress.json`, but probably when you will run scripts it will expire




## Setup
```bash
npm install
npm run test:run
```
