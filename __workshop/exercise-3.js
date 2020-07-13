// Exercise 3
// ----------

const doublesLater = (num) => {
  return new Promise(function (resolve) {
    console.log("Waiting... (ಠ_ಠ)");
    setTimeout(resolve(num * 2), 2000);
  });
};

const handleSum = async (num) => {
  try {
    const first = await doublesLater(num);
    const second = await doublesLater(first);
    const third = await doublesLater(second);
    return `The final sum is ${first + second + third}`;
  } catch (err) {
    console.log(err);
  }
};

// 4. verification
handleSum(10).then((ans) => console.log(ans));
