import React, { useState } from 'react';
import {
  Menu,
  Container,
  Image
} from 'semantic-ui-react';
import { useRouter } from 'next/router';
import Router from 'next/router';

const Nav = () => {
    const router = useRouter();
    const { pathname } = router;

    const [activeItem, setActiveItem] = useState(pathname)

    return (
        <Menu fixed='top' color='blue' inverted>
            <Container>
                    <Menu.Item as='a' header>
                        <Image size='mini' src='/static/img/math_logo.jpg' style={{ marginRight: '1.5em' }} />Math Test
                    </Menu.Item>
                    <Menu.Item 
                        name='Sum' 
                        active={activeItem === '/'}
                        onClick={()=> {
                            setActiveItem('Sum');
                            Router.push({
                                pathname: '/'
                            }, '/');
                        }}
                    />
                    <Menu.Item 
                        name='Multiply' 
                        active={activeItem === '/multiply'}
                        onClick={()=> {
                            setActiveItem('Multiply');
                            Router.push({
                                pathname: '/multiply'
                            }, '/multiply');
                        }}
                    />
                    <Menu.Item 
                        name='First Prime Number' 
                        active={activeItem === '/prime'}
                        onClick={()=> {
                            setActiveItem('First Prime Number');
                            Router.push({
                                pathname: '/prime'
                            }, '/prime');
                        }}
                    />
                    <Menu.Item 
                        name='First Fibonacci Number' 
                        active={activeItem === '/fibonacci'}
                        onClick={()=> {
                            setActiveItem('First Fibonacci Number');
                            Router.push({
                                pathname: '/fibonacci'
                            }, '/fibonacci');
                        }}
                    />
            </Container>
        </Menu>

    );
}

export default Nav;
