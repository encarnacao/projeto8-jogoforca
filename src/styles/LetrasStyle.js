import styled from "styled-components";

const DivLetras = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    max-width: 680px;
    height: 100%;
    margin: 0 auto;
    @media (max-width: 850px) {
        width: 470px;
    }
    @media (max-width: 600px) {
        width: 100%;
        max-width: 300px;
    }
`;

const ButtonLetra = styled.button`
    width: 40px;
    height: 40px;
    margin: 6px;
    color: #39739D;
    font-size: 16px;
    font-weight: 700;
    align-items: center;
    text-align: center;
    background: #e1ecf4;
    border: 1px solid #7aa7c7;
    border-radius: 3px;
    cursor: pointer;
    &:disabled{
        color: #798a9f;
        background: #9faab5;
        border: 1px solid #7aa7c7;
        cursor: default;
    }
    @media (max-width: 450px) {
        margin: 5px;
        width: 45px;
        height: 45px;
    }
`;

export { DivLetras, ButtonLetra };