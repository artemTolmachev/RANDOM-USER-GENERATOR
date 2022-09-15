import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { BASE_URL } from '../config';
import { DataStr } from '../components/DataStr';
import { CardList } from './CardList';

import { TEXT_ITEM } from '../constans';
import { CARD_TEXT } from '../constans';

const Wrapper = styled.div`
    position: relative;
    padding: 2rem 0;
    margin: 0 auto;

    max-width: 730px;
    height: 500px;

    background-color: var(--color-text);
    border-radius: var(--radii);
    color: black;
    z-index: 0;
`;


const CardImgCover = styled.div`
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;

    &:after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 130px;
        top: 0;
        background: #f9f9f9;
        border-bottom: 1px solid rgba(0,0,0,.15);
        border-top-left-radius: var(--radii);
        border-top-right-radius: var(--radii);
        z-index: -1;
    }
`;

const CardImgWr = styled.div`
    padding: 5px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: #fff;
`;

const CardImg = styled.img`
    display: block;
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
`;

const CardText = styled.p`
    margin: 1rem 0;
    color: var(--color-card-text);
    font-size: var(--fs-base);
    text-align: center;
    line-hite: 1.2rem;
`;

const List = styled.ul`
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
    list-style-type: none;
    overflow: hidden;
`;
const ListItem = styled.li`
    cursor: pointer;
    display: block;
    width: 40px;
    height: 48px;
    margin: 20px;
    background-image: url(https://randomuser.me/img/card_icons.png);
    background-size: 378px;
    transition: all .25s ease-out;
    background-position-y: -48px
`;
const CardInf = styled.div`
    color: var(--color-span);
    font-size: var(--fs-md);
    font-weight: var(--fw-light);
    text-align: center;
    text-transform: capitalize;
`



export const Card = () => {
    const obgLi = document.querySelectorAll('li');
    let step = 68;
    const [data, setData] = useState([]);
    const [error, setisError] = useState();
    const [text, setText] = useState(TEXT_ITEM.NAME);
    const [inf, setInf] = useState();

    const dataInfo = data.map(c => {
        let obj = {
            NAME: [c.name.first, c.name.last],
            EMAIL: c.email,
            BIRTHDAY: () => DataStr(c.dob.date),
            LAOCATION: [c.location.country, c.location.street.name],
            PHONE: c.phone,
            LOGIN: c.login.username
        }
        return obj;
    }
    )

    function postData(e) {
        const getContact = async () => {
            try {
                const respons = await fetch(BASE_URL);
                const { results, error } = await respons.json();
                setData(results)
                setInf(results[0].NAME)
            }
            catch (e) {
                setisError(true)
            }
        }
        getContact();
        refreshActiveClass();
    }
  
   

    function handler(e) {
        const TARGET = e.currentTarget.getAttribute('data');
        const dataInf = dataInfo[0][TARGET];
        setInf(dataInf)
        setText(TEXT_ITEM[TARGET])

        for (let k = 0; k < obgLi.length; k++) {
            if (obgLi[k].classList.contains('active')) {
                for (let i = 0; i < obgLi.length; i++) {
                    obgLi[i].classList.remove('active');
                }
                e.currentTarget.classList.add('active');
            }
        }
    }

        useEffect(() => {
            postData()
        }, []);

        function refreshActiveClass(e) {
            for (let k = 0; k < obgLi.length; k++) {
                if (obgLi[k].classList.contains('active') && obgLi[k].getAttribute('data') !== 'NAME'){
                    for (let i = 0; i < obgLi.length; i++) {
                        obgLi[i].classList.remove('active');
                        if(obgLi[i].getAttribute('data') === 'NAME'){
                            obgLi[i].classList.add('active')
                        }
                    } 
                }
            }
        }

    return (
        <Wrapper>
            < button onClick = {postData} > test </button>
            <CardImgCover>
                <CardImgWr>
                    {data.map(m => <CardImg key={m} src={m.picture.large} />)}
                </CardImgWr>
            </CardImgCover>
            <CardText>{CARD_TEXT[text]}</CardText>
            <CardList {...dataInfo[0]} inf={inf}/>
            <List>
                {Object.keys(TEXT_ITEM).map(c => {
                    step -= 68;
                    return (
                        <ListItem
                            data={c}
                            className={c === 'NAME' ? 'active' : ''}
                            onClick={handler} key={c}
                            style={{ backgroundPositionX: step + 'px' }}>
                        </ListItem>
                    )
                })}
            </List>
        </Wrapper>
    );
};

