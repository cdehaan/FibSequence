function FibSquence(length) {
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

  console.log(fibSqeuence);  
}



const length = 8;
FibSquence(length)