import styled from "styled-components";

const DivChute = styled.div`
width: 80%;
max-width: 630px;
display: flex;
height: 100%;
justify-content: space-evenly;
align-items: center;
font-size: 20px;
margin: 60px auto;
@media (max-width: 850px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 150px;
}
@media (max-width: 450px){
    margin: 10px;
}
`;

const BotaoChute = styled.button`
width: 100px;
height: 40px;
color: #39739D;
font-size: 16px;
font-weight: 700;
align-items: center;
text-align: center;
background: #e1ecf4;
border: 1px solid #7aa7c7;
border-radius: 3px;
&:disabled {
    color: #798a9f;
    background: #9faab5;
    border: 1px solid #7aa7c7;
}
`;

const InputChute = styled.input`
width: 55%;
height: 40px;
padding: 0 10px;
border: 1px solid #CCCCCC;
box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
border-radius: 3px;
&:disabled {
    background: lightgray;
}
`;

export { DivChute, BotaoChute, InputChute };