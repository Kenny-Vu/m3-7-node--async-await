const request = require("request-promise");
const requestPromise = require("request-promise");

// getDadJoke
let jokeReq = {
  uri: "https://icanhazdadjoke.com/",
  qs: "https://icanhazdadjoke.com/api#fetch-a-dad-joke",
  headers: {
    "User-Agent": "Request-Promise",
    Accept: "application/json",
  },
  json: true,
};

getJoke = async () => {
  try {
    const jokeRes = await requestPromise(jokeReq);
    const joke = await jokeRes.joke;
    return joke;
  } catch (err) {
    console.log(err);
  }
};

// 4.1
getJoke().then((data) => console.log(data));
