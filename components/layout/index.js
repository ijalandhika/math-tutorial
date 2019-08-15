import React, { Fragment } from 'react';
import {
    Container,
    Header,
    Divider,
    Button,
    Segment,
    Message
  } from 'semantic-ui-react';

import Nav from '../nav';

const Layout = ({
    children,
    description,
    headerMessage, 
    descriptionMessage,
    isHiddenMessage,
    colorMessage,
    headerText = ''
}) => (
    <Fragment>
        <Nav />
        <Container text style={{ marginTop: '7em' }}>
            <Header as='h1'>{headerText}</Header>
            <div dangerouslySetInnerHTML={{__html: description}} />
            <Divider />
            <Button.Group attached='top' widths={1}>
                <Button color='teal'>Try this example</Button>
            </Button.Group>
            <Segment attached>
                <Message hidden={isHiddenMessage} color={colorMessage}>
                    <Message.Header>{headerMessage}</Message.Header>
                    <p>{descriptionMessage}</p>
                </Message>
                {children}
            </Segment>
        </Container>
    </Fragment>
)
    


export default Layout;