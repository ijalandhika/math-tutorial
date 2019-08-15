import React, { useState, Fragment } from 'react';
import {
  Button,
  Input
} from 'semantic-ui-react';

import Layout from '../components/layout';
import { FindPrime } from '../utils/math';

const Primes = () => {
    const [result, setResult]  = useState("");
    const [value, setValue] = useState(0);
    const [hiddenMessage, setHiddenMessage] = useState(true);

    const headerMessage = result !== "" ? `The result is ${result}` : 'Please provide values' ;
    const descriptionMessage = result > 0 ? '' : 'Fill the input value with integer value. Click button to get the result!';
    const colorMessage = result !== "" ? 'green' : 'red';
    return (
        <Layout
            headerText={'Prime'}
            description={`
                <p>
                    A prime number is a whole number greater than 1 whose only factors are 1 and itself. 
                    A factor is a whole numbers that can be divided evenly into another number. 
                    Numbers that have more than two factors are called composite numbers. 
                    The number 1 is neither prime nor composite. 
                </p>
                <pre>
                    The first few prime numbers are <br />
                    2, 3, 5, 7, 11, 13, 17, 19, 23 and 29
                </pre>
                <p>
                    This example just find first N prime number.
                </p>
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
                    const primeNumbers = FindPrime(value);

                    if (primeNumbers !== "") {
                        setHiddenMessage(false);
                    }
                    setResult(primeNumbers);
                    
                }}>See Result!</Button> 
                <Input value={result} disabled />
            </Fragment>
        </Layout>
    );
}

export default Primes
