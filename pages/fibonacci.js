import React, { useState, Fragment } from 'react';
import {
  Button,
  Input
} from 'semantic-ui-react';

import Layout from '../components/layout';
import { FindPrime, GenerateFibonacci } from '../utils/math';

const Primes = () => {
    const [result, setResult]  = useState("");
    const [value, setValue] = useState(0);
    const [hiddenMessage, setHiddenMessage] = useState(true);

    const headerMessage = result !== "" ? `The result is ${result}` : 'Please provide values' ;
    const descriptionMessage = result > 0 ? '' : 'Fill the input value with integer value. Click button to get the result!';
    const colorMessage = result !== "" ? 'green' : 'red';
    console.log(result)
    return (
        <Layout
            headerText={'Fibonacci'}
            description={`
                <p>
                    The Fibonacci sequence is one of the most famous formulas in mathematics.

                    Each number in the sequence is the sum of the two numbers that precede it. The mathematical equation describing it is Xn+2= Xn+1 + Xn
                </p>
                <pre>
                    Example <br />
                    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so on.
                </pre>
                `
            }
            headerMessage={headerMessage} 
            descriptionMessage={descriptionMessage}
            colorMessage={colorMessage}
            isHiddenMessage={hiddenMessage && result=== ""}
        >
            <Fragment>
                <Input placeholder='input value' onChange={(e) => {
                    setValue(+e.target.value);
                }} /> 
                <Button color='olive' onClick={() => {
                    setHiddenMessage(true);
                    if(value === 0 || isNaN(value))  {
                        return setHiddenMessage(false);
                    }

                    const fibonacci = GenerateFibonacci(value);

                    if (fibonacci === "") {
                        setHiddenMessage(false);
                    }
                    setResult(fibonacci);
                    
                }}>See Result!</Button> 
                <Input value={result} disabled />
            </Fragment>
        </Layout>
    );
}

export default Primes
