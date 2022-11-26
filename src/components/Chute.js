import { DivChute, BotaoChute, InputChute } from "../styles/ChuteStyle";

export default function Chute(props) {

    const desabilitado = props.chute.palavraEscondida === props.chute.palavra;
    function handleChange(event) {
        props.chute.setInput(event.target.value);
    }

    function handleKeyDown(event) {
        const key = event.key;
        if (key === "Enter") {
            checkVitoria();
        }
    }

    function checkVitoria() {
        const palavra = props.chute.tirarAcentos(props.chute.palavra).toLowerCase();
        const chute = props.chute.tirarAcentos(props.chute.input).toLowerCase();
        if (palavra !== chute) {
            //Apenas dando semantica ao código
            const maxErros = 6;
            props.chute.setErros(maxErros);
        }
        props.chute.setPalavraEscondida(props.chute.palavra);
        props.chute.setIniciado(false);
        props.chute.setInput('');
    }

    return (
        <DivChute>
            <p>Já sei a palavra!</p>
            <InputChute
                type="text"
                data-test="guess-input"
                onKeyDown={handleKeyDown}
                value={props.chute.input}
                onChange={handleChange}
                disabled={desabilitado}
                id="chute"
            >
            </InputChute>
            <BotaoChute
                onClick={checkVitoria}
                disabled={desabilitado}
                data-test="guess-button"
            >
                Chutar
            </BotaoChute>
        </DivChute>
    );
}