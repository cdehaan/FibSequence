function FibSquence(length) {
  if(typeof length !== "number") { return []; }
  if(length > 1000) { return []; }
  const Fib = function*() {
    let previousValues = [1,1];
    let currentValue;
    yield 1;
    yield 1;

    while(true) {
        currentValue = previousValues[0] + previousValues[1];
        previousValues[0] = previousValues[1];
        previousValues[1] = currentValue;
        yield currentValue
    }
  };

  let fibSqeuence = [];
  const gen = Fib();

  for(let fibLooper = 0; fibLooper < length; fibLooper++) {
    fibSqeuence.push(gen.next().value)
  }

  return fibSqeuence;
}


const testValues = [8, 1, 0, -2, "8", 10000000, "Bobby Tables"];

for (const testValue of testValues) {
  console.log(`Length: ${testValue} (type: ${typeof testValue}), Output: ${FibSquence(testValue)}`)
}
