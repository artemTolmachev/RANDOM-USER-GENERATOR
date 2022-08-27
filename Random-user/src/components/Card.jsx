import { useState, useEffect } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    position: relative;
    padding: 2rem 0;
    margin: 0 auto;

    max-width: 730px;
    height: 600px;

    background-color: var(--color-text);
    border-radius: var(--radii);
    color: black;
    z-index: 0;
`;

const CardImgCover = styled.div`
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

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const ListItem = styled.li`
    cursor: pointer;
    display: block;
    width: 40px;
    height: 48px;
    float: left;
    margin: 20px;
    background-image: url(https://randomuser.me/img/card_icons.png);
    background-size: 378px;
    transition: all .25s ease-out;
    background-position-y: -48px
`;
const CardInf = styled.div`
    color: var(--color-span)
`

export const Card = ({img, ...dataInfo}) => {
    let step = 68;
    const [inf, setInf] = useState(dataInfo.name);
   

    function f1(e){
        const obgLi = document.querySelectorAll('li');
        setInf(dataInfo[e.currentTarget.getAttribute('data')])
       
        for(let k = 0; k < obgLi.length; k++){
            if(obgLi[k].classList.contains('active')){
                for(let i = 0; i < obgLi.length; i++){
                    obgLi[i].classList.remove('active');
                }
                e.currentTarget.classList.add('active');
            }
        }
    }

    return (
        <Wrapper>
            <CardImgCover>
                <CardImgWr>
                    <CardImg src={img} alt={dataInfo.name}/>
                </CardImgWr>
            </CardImgCover>
            {Array.isArray(inf) 
              ? 
              <CardInf>
                <span style={{marginRight: '15px'}}>{inf[0]}</span> 
                <span>{inf[1]}</span>
              </CardInf>
              : 
              <CardInf>{inf}</CardInf>}
            <List>
                {Object.keys(dataInfo).map(c => {
                    step -= 68;
                    return  (
                    <ListItem data={c} className={c === 'name' ? 'active' : ''} onClick={f1} key={c} style={{backgroundPositionX: step + 'px'}}> 
                    </ListItem>
                    )
                })}
             </List>
        </Wrapper>
    );
};

