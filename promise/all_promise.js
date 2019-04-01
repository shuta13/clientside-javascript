function asyncProcess(value) {
  // Promiseコンストラクターを返す
  // ES2015から標準化されてるのでアロー関数を使用
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve(`${value}`);
      } else {
        reject('error');
      }
    }, 500);
  });
}

Promise.all([
  asyncProcess('野田'),
  asyncProcess('洋次郎'),
  asyncProcess('noda')
  // 以上の引数全てがresolveの場合thenのコールバックメソッドを実行
]).then(
  response => {
    console.log(response);
  },
  error => {
    console.log(error);
  }
);