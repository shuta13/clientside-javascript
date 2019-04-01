function throwError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        throw new Error('error!');
        resolve('No Error!');
      } catch(err) {
        reject(err);
      }
    }, 1000);
  });
}
function errorHandling() {
  return throwError()
  .then((result) => {
    return result;
  })
  .catch((err) => {
    throw err;
  });
}

errorHandling().catch((err) => {
  console.log(err);
})