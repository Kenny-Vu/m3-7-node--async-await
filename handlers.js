// nothing here yet...
const { getJoke } = require("./__workshop/exercise-4.1");
const { getTronaldDumpQuote } = require("./__workshop/exercise-4.2");
const { getGeekJoke } = require("./__workshop/exercise-4.3");

const handleJoke = (req, res) => {
  const jokeType = req.params.type;
  if (jokeType === "dad") {
    getJoke().then((joke) => res.send(joke));
  }
  if (jokeType === "tronald") {
    getTronaldDumpQuote().then((joke) => res.send(joke));
  }
  if (jokeType === "geek") {
    getGeekJoke().then((joke) => res.send(joke));
  }
};

const handleFourOhFour = (req, res) => {
  res.status(404);
  res.send("Jokes on you!");
};

module.exports = { handleFourOhFour, handleJoke };
