import _sum from 'lodash/sum';
import _multiply from 'lodash/multiply';

/// sum 
export const Sum = (params = []) => _sum(params);

/// multiply 
export const Multiply = (firstValue, secondValue) => _multiply(firstValue, secondValue);

// find first prime number 
const isPrimeNumber = (number) => {
    if (number === 0) { return false; }
    if (number === 1) { return false; }
    if (number === 2) { return true; }

    for(var x = 2; x < number; x++)
    {
      if(number % x === 0)
      {
        return false;
      }
    }
    return true;  
}

export const FindPrime = (number) => {
    let arrPrime = []; 


    let theNumber = 2;
    while (arrPrime.length < number) {
        if(isPrimeNumber(theNumber)) {
            arrPrime.push(theNumber);
        }
        theNumber++;
    }

    return arrPrime.length > 0 ? arrPrime.join(", ") : "";
}

// find first fibonacci 
const fibo = (limitNumber) => {
    const sequence = [0, 1];

	for (let i = 2; i < limitNumber; i++) {
		sequence[i] = sequence[i-1]+ sequence[i-2];
	}

	return sequence;
}

export const GenerateFibonacci = (limitNumber) => {
    const fibonacciNumbers = fibo(limitNumber);
    console.log(fibonacciNumbers);

    return fibonacciNumbers.join(", ");
}