const request = require("request-promise");

const getGeekJoke = async () => {
  let options = {
    url: "https://geek-jokes.sameerkumar.website/api?format=json",
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    json: true,
  };
  try {
    const response = await request(options);
    return response.joke;
  } catch (err) {
    console.log(err);
  }
};

getGeekJoke().then((geekJoke) => console.log(geekJoke));

module.exports = { getGeekJoke };
