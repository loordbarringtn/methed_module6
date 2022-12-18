function getRandom() {
  return Math.floor(Math.random() * 100);
}

const isPrime = (number) => {
  let isPrime = true;

  if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(`${number} это простое число`);
    } else {
      console.log(`${number} это не простое число`);
    }
  }
};

isPrime(getRandom());
isPrime(getRandom());
isPrime(getRandom());
isPrime(getRandom());
isPrime(getRandom());

