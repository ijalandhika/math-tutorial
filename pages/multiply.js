import React, { useState, Fragment, useEffect } from 'react';
import {
  Button,
  Input
} from 'semantic-ui-react';

import Layout from '../components/layout';
import { Multiply } from '../utils/math';

const Muliplies = () => {
    const [result, setResult]  = useState(0);
    const [valueA, setValueA] = useState(0);
    const [valueB, setValueB] = useState(0);
    const [hiddenMessage, setHiddenMessage] = useState(true);

    const headerMessage = result > 0 ? `The result is ${result}` : 'Please provide values' ;
    const descriptionMessage = result > 0 ? '' : 'Fill the input value 1 & value 2 with integer value. Click button to get the result!';
    const colorMessage = result > 0 ? 'green' : 'red';
    return (
        <Layout
            headerText={'Multiply'}
            description={`
                <p>
                    In math, to multiply means to add equal groups. <br />
                    When we multiply, the number of things in the group increases. <br />
                    The two factors and the product are parts of a multiplication problem. 
                </p>
                <pre>
                6 x 9 = 54 ==> the numbers 6 & 9 are the factors. <br />
                while the number 54 is product.
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
                    const result = Multiply(valueA, valueB);
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

export default Muliplies
