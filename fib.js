function FibSquence(length) {
  // Return empty array if the input is unreasonable
  if(typeof length !== "number") { return []; }
  if(length > 1000) { return []; }

  // This is the generator
  const Fib = function*() {

    // The first 2 values are hard-coded
    let previousValues = [1,1];
    let currentValue;
    yield 1;
    yield 1;

    // For the following values, we use an infinite iterator
    // The current value is the sum of the previous 2 values
    // The n-1 value becomes the n-2 value, and the current value is stored as the n-1
    while(true) {
        currentValue = previousValues[0] + previousValues[1];
        previousValues[0] = previousValues[1];
        previousValues[1] = currentValue;
        yield currentValue
    }
  };

  // This is what we'll return, start with an empty array
  let fibSqeuence = [];
  const gen = Fib();

  // Run the generator "length" times, pushing the returned value each time
  for(let fibLooper = 0; fibLooper < length; fibLooper++) {
    fibSqeuence.push(gen.next().value)
  }

  return fibSqeuence;
}


const testValues = [8, 1, 0, -2, "8", 10000000, "Bobby Tables"];

for (const testValue of testValues) {
  console.log(`Length: ${testValue} (type: ${typeof testValue}), Output: ${FibSquence(testValue)}`)
}
