import palavras from '../palavras.js';

import { DivJogo, ForcaImg, Palavra, BotaoPalavra, EmProgresso, Errado, Certo } from '../styles/JogoStyle.js';

export default function Jogo(props) {
    const maxErros = 6;
    const emProgresso = (
        <EmProgresso 
        data-test="word" 
        data-answer={props.jogo.palavra}>
            {props.jogo.palavraEscondida}
        </EmProgresso>
        );

    const certo = (
        <Certo 
        data-test="word" 
        data-answer={props.jogo.palavra}>
            {props.jogo.palavraEscondida}
        </Certo>
        );

    const errado = (
        <Errado 
        data-test="word" 
        data-answer={props.jogo.palavra}>
            {props.jogo.palavraEscondida}
        </Errado>
        );
  
    const palavraCerta = props.jogo.erros === maxErros? errado:certo;
    const jogoTerminado = props.jogo.palavra === props.jogo.palavraEscondida? palavraCerta: emProgresso;
    
    function iniciarJogo() {
        props.jogo.setErros(0);
        props.jogo.setLetrasClicadas([]);
        props.jogo.setIniciado(true);
        props.jogo.setInput('');
    }

    function esconderPalavra(palavra) {
        const palavraEscondida = palavra.split('').map(() => "_");
        props.jogo.setPalavraEscondida(palavraEscondida.join(''));
    }


    function escolherPalavra() {
        const novaPalavra = palavras[Math.floor(Math.random() * palavras.length)];
        console.log(novaPalavra);
        props.jogo.setPalavra(novaPalavra);
        esconderPalavra(novaPalavra);
        iniciarJogo();
    }


    return (
        <DivJogo>
            <div>
                <ForcaImg data-test="game-image" src={props.jogo.imagem} alt="Forca" />
            </div>
            <Palavra>
                <BotaoPalavra data-test="choose-word" onClick={escolherPalavra}>Escolher Palavra</BotaoPalavra>
                {jogoTerminado}
            </Palavra>
        </DivJogo>
    );
}