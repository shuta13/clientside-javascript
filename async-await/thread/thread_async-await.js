function sampleResolve(value) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value);
    }, 2000);
  })
}

function sampleResolve2(value) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value * 2);
    }, 1000);
  })
}

async function sample() {
  const [a, b] = await Promise.all([sampleResolve(5), sampleResolve(10)]);
  const c = await sampleResolve2(b);
  return [a, b, c];
}

sample().then(([a, b, c]) => {
  console.log(a, b, c);
});