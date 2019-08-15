import React, { useState, Fragment, useEffect } from 'react';
import {
  Button,
  Input
} from 'semantic-ui-react';

import Layout from '../components/layout';
import { Sum } from '../utils/math';

const Home = () => {
    const [result, setResult]  = useState(0);
    const [valueA, setValueA] = useState(0);
    const [valueB, setValueB] = useState(0);
    const [hiddenMessage, setHiddenMessage] = useState(true);

    const headerMessage = result > 0 ? `The result is ${result}` : 'Please provide values' ;
    const descriptionMessage = result > 0 ? '' : 'Fill the input value 1 & value 2 with integer value. Click button to get the result!';
    const colorMessage = result > 0 ? 'green' : 'red';
    return (
        <Layout
            headerText={'Sum'}
            description={`
                <p>the aggregate of two or more numbers, magnitudes, quantities, or particulars as determined by or as if by the mathematical process of addition:</p>
                <pre>
                    The sum of 6 and 8 is 14.
                </pre>`
            }
            headerMessage={headerMessage} 
            descriptionMessage={descriptionMessage}
            colorMessage={colorMessage}
            isHiddenMessage={hiddenMessage && result=== 0}
        >
            <Fragment>
                <Input placeholder='value 1' onChange={(e) => {
                    setValueA(+e.target.value);
                }} /> + 
                <Input placeholder='value 2' onChange={(e) => {
                    setValueB(+e.target.value);
                }} /> 
                <Button color='olive' onClick={() => {
                    setHiddenMessage(true);
                    if((valueA === 0 && valueB === 0) || 
                    (isNaN(valueA) || isNaN(valueB)) ) {
                        return setHiddenMessage(false);
                    }
                    const result = Sum([valueA, valueB]);
                    if (result>0) {
                        setHiddenMessage(false);
                    }
                    setResult(result);
                    
                }}>See Result!</Button> 
                <Input value={result} disabled />
            </Fragment>
        </Layout>
    );
}

export default Home
