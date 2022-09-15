import styled from 'styled-components';

const CardInf = styled.div`
    color: var(--color-span);
    // font-size: var(--fs-md);
    font-size: 10px;
    font-weight: var(--fw-light);
    text-align: center;
    text-transform: capitalize;
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
                        <div >
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
                        </div>
                }
            </CardInf>
        </>
    );
};