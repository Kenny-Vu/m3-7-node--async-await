const requestPromise = require("request-promise");

const getTronaldDumpQuote = async () => {
  let memeReq = {
    uri: "https://api.tronalddump.io/random/quote",
    headers: {
      Accept: "application/json",
    },
    json: true,
  };
  try {
    const memeRes = await requestPromise(memeReq);
    return memeRes.value;
  } catch (err) {
    console.log(err);
  }
};

getTronaldDumpQuote().then((quote) => {
  console.log(quote);
});

module.exports = { getTronaldDumpQuote };
