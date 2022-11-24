import { palavras } from '../palavras.js';
export default function Jogo(props) {
    function iniciarJogo() {
        props.jogo.setErros(0);
        props.jogo.setLetrasClicadas([]);
        props.jogo.setIniciado(true);
    }

    function esconderPalavra(palavra) {
        let palavraEscondida = palavra.split('').map(letra => "_");
        props.jogo.setPalavraEscondida(palavraEscondida.join(''));
    }


    function escolherPalavra() {
        const novaPalavra = palavras[Math.floor(Math.random() * palavras.length)];
        props.jogo.setPalavra(novaPalavra);
        esconderPalavra(novaPalavra);
        props.jogo.setClassPalavra('em-progresso');
        iniciarJogo();
    }


    return (
        <div className="jogo">
            <div className="forca">
                <img src={props.jogo.imagem} alt="Forca" />
            </div>
            <div className="palavra">
                <button className="escolher-palavra" onClick={escolherPalavra}>Escolher Palavra</button>
                <h1 className={props.jogo.classe}>{props.jogo.palavra}</h1>
            </div>
        </div>
    );
}