import React from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import { Card } from '../components/Card';
import { BASE_URL } from '../config';
import { useState, useEffect } from 'react';

const Wrapper = styled.main`
    padding-top: 3rem;
`;

export const Main = () => {
    const [data, setData] = useState([]);
    const [isError, setisError] = useState([]);

    useEffect(() => {
        const getContact = async () => {
            try{
            
                const respons = await fetch(BASE_URL);

                const {results, error} = await respons.json();
                setData(results)

            }
            catch (e){
                setisError(true)
            }

        }
        getContact()
        
    },[]);
  

    return (
        <Container>
            <Wrapper>
                {data.map(c => {
                let img = c.picture.large;
                const dataInfo = {
                    name: [c.name.first, c.name.last],
                    email: c.email,
                    birthday: c.dob.date,
                    location: [c.location.country, c.location.street.name],
                    phone: c.phone,
                    login: c.login.username
                    }
                    return(
                        <Card img={img} key={c.phone} {...dataInfo}/> 
                    )
                }
                
                    )}
            </Wrapper>
        </Container>
    );

}

