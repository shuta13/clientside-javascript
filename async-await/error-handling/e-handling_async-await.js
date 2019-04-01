function throwError(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        throw new Error('Errorやで');
        resolve('error nashi');
      } catch (err) {
        reject(err);
      }
    }, 1000);
  });
}

async function errorHandling() {
  // try {
  //   const result = await throwError();
  //   return result;
  // } catch (err) {
  //   throw err;
  // }

  // try catch書かなくてもthrowErrorがreject返したら処理中断される
  const result = await throwError();
  return result;
}

errorHandling().catch((err) => {
  console.log(err);
})