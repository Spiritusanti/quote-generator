# Quote Generator - refactored
quote generator built in vanilla JS using ssokurenko's quotes API @ https://quotes-react.netlify.app/ (github: https://github.com/ssokurenko/quotes-react-app);

## Changes from previous verion
switched from previouse API: https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json

This change was necessitated by changes to the CORS proxy server used in the original project which was restricted by Heroku for use as a development tool only: https://github.com/Rob--W/cors-anywhere/issues/301