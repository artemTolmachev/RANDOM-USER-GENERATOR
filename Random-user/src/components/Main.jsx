import React from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import { Card } from '../components/Card';


const Wrapper = styled.main`
    padding-top: 1rem;

    @media(min-width: 400px){
        padding-top: 2rem;
    }
    @media(min-width: 768px){
        padding-top: 3rem;
    }
`;

export const Main = () => {

    return (
        <Container>
            <Wrapper>
                <Card>


                </Card >
            </Wrapper>
        </Container>
    );
}

