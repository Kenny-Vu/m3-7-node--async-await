const requestPromise = require("request-promise");

// getDadJoke
let jokeReq = {
  uri: "https://icanhazdadjoke.com/",
  headers: {
    Accept: "application/json",
  },
  json: true,
};

const getJoke = async () => {
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
