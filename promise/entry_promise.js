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

asyncProcess('洋次郎')
.then( // thenメソッドの第一引数がresolve,第二引数がrejectに対応
  // 引数はresponseだけなので()を省略したアロー関数
  response => {
    console.log(response);
    // 再びasyncProcess関数を実行
    return asyncProcess('洋次郎2');
  },
  // 引数はerrorだけなので()を省略したアロー関数
  // error => {
  //   console.log(`error:${error}`);
  // }
)
.then( // 処理を接続
  response => {
    console.log(response);
  },
  error => {
    console.log(`error:${error}`);
  }
);
