import styled from 'styled-components';

const CardInfInner = styled.div`
    word-wrap: break-word;
`

const CardInf = styled.div`
    height: 60px;
    text-align: center;
    font-size: var(--fs-base);
    font-weight: var(--fw-light);
    text-transform: capitalize;
    color: #27272b;
    font-weight: 500;

    @media(min-width: 768px){
        font-size: var(--fs-md);
        font-weight: 300;
    }

`


export const CardList = ({ NAME = [], inf }) => {

    return (
        <>
            <CardInf>
                {
                    (inf === undefined)
                        ?
                        <div>
                            <span style={{ marginRight: '5px' }}>
                                {NAME[0]}
                            </span>
                            <span>
                                {NAME[1]}
                            </span>
                        </div>
                        :
                        <CardInfInner>
                            {
                                (!Array.isArray(inf))
                                    ?
                                    <span>
                                        {inf}
                                    </span>
                                    :
                                    <div>
                                        <span style={{ marginRight: '5px' }}>
                                            {inf[0]}
                                        </span>
                                        <span>
                                            {inf[1]}
                                        </span>
                                    </div>
                            }
                        </CardInfInner>
                }
            </CardInf>
        </>
    );
};