import React from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import { Card } from '../components/Card';


const Wrapper = styled.main`
    padding-top: 3rem;
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

