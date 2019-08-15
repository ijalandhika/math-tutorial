import { Fragment } from 'react';
import { 
    Header,
    Message } from 'semantic-ui-react';


export const Header =  ({children}) => <Header as='h1'>{children}</Header>

export const Description = ({children}) => <Fragment>{children}</Fragment>

export const Message = ({header, children, isHidden}) => (
    <Message hidden={isHidden}>
            <Message.Header>{header}</Message.Header>
           {children}
    </Message>
)