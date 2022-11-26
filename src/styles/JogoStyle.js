import styled from 'styled-components';



const DivJogo = styled.div`
    display: flex;
    margin: 60px auto;
    width: 90%;
    max-width: 900px;
    justify-content: space-between;
`;

const ForcaImg = styled.img`
    width: 45%;
    @media (max-width: 850px) {
        min-width: 170px;
    }
    @media (max-width: 450px) {
        min-width: 150px;
    }
`;

const Palavra = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    @media (max-width: 450px) {
        height: 200px;
    }
`;

const BotaoPalavra = styled.button`
    width: 200px;
    height: 60px;
    background: #27ae60;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    transition: filter 0.2s ease;
    &:hover {
        filter: brightness(0.8);
    }
    &:active {
        filter: brightness(1.2);
    }
    @media (max-width: 850px) {
        width: 150px;
        aspect-ratio: 200 / 60;
        font-size: 15px;
        margin-bottom: 20px;
    }
    @media (max-width: 450px) {
        width: 150px;
        height: 40px;
        font-size: 13px;
        margin-bottom: 10px;
    }
`;

const EmProgresso = styled.h1`
    font-family: 'Noto Sans', sans-serif;
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 4px;
    @media (max-width: 850px) {
        font-size: 32px;
    }
    `;

const Errado = styled.h1`
    font-family: 'Noto Sans', sans-serif;
    color: #ff0000;
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 4px;
    @media (max-width: 850px) {
        font-size: 32px;
    }`;

const Certo = styled.h1`
    font-family: 'Noto Sans', sans-serif;
    color: #27ae60;
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 4px;
    @media (max-width: 850px) {
        font-size: 32px;
    }    
`;

export { DivJogo, ForcaImg, Palavra, BotaoPalavra, EmProgresso, Errado, Certo };