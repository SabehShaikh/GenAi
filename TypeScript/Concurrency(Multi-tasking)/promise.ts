const returnMoney = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Money returned");
  }, 3000);
});

// resolve --> .then
// reject --> .catch
// finally --> chlna hi chlna ha code.

returnMoney
  .then((value) => {
    console.log(value);
    console.log("Thankyou for returning the money");
  })
  .catch((error) => {
    console.log("Sorry i am not able to return the money");
  })
  .finally(() => {
    console.log("Process completed");
  });
