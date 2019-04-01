function asyncProcess(value) {
  // Promiseコンストラクターを返す
  // ES2015から標準化されてるのでアロー関数を使用
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve(`input:${value}`);
      } else {
        reject('input is null');
      }
    }, 500);
  });
}

// どれか一つが終了した時点で結果を返す
Promise.race([
  asyncProcess('hoge'),
  asyncProcess('foo'),
  asyncProcess('huga')
]).then(
  response => {
    console.log(response);
  },
  error => {
    console.log(error);
  }
)