import React from 'react';
import { useState, useEffect } from 'react';
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import styled from 'styled-components';
import { Container } from './Container';

const ModerSwitcher = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: var(--fs-sm);
    text-transform: capitalize;
`;

const Wrapper = styled.div`
    padding-top: 2rem;
    display: flex;
    justify-content: center;
`;

const Title = styled.h1`
    margin: 0;
    font-size: var(--fs-base);

    @media(min-width:768px){
        font-size: var(--fs-md);
    }
`;

export const Header = () => {

    const [theme, setTheme] = useState('dark');

    const toggleThem = () => theme === 'dark' ? setTheme('light') : setTheme('dark');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    },[theme])

    return (
        <Container>
            <ModerSwitcher onClick={toggleThem}>
                        {theme === 'dark' ?
                        (<IoMoonOutline/>)
                        : 
                        (<IoMoon/>)
                    }
                    <span style={{marginLeft: '0.75rem'}}>{theme} Theme</span>
                </ModerSwitcher>
            <Wrapper>
                <Title>RANDOM USER GENERATOR</Title>
            </Wrapper>
        </Container>
    );
};


