const request = require("request-promise");

let options = {
  url: "https://geek-jokes.sameerkumar.website/api?format=json",
  method: "GET",
  headers: {
    Accept: "application/json",
  },
  json: true,
};

const getGeekJoke = async () => {
  const response = await request(options);
  return response.joke;
};

getGeekJoke().then((geekJoke) => console.log(geekJoke));
