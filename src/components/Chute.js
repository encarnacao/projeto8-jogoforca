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
        const palavra = props.chute.tirarAcentos(props.chute.palavra);
        const chute = props.chute.tirarAcentos(props.chute.input);
        if (palavra === chute) {
            props.chute.setClassPalavra('certo');
        } else {
            //Apenas dando semantica ao código
            const maxErros = 6;
            props.chute.setErros(maxErros);
            props.chute.setClassPalavra('errado');
        }
        props.chute.setPalavraEscondida(props.chute.palavra);
        props.chute.setIniciado(false);
        props.chute.setInput('');
    }

    return (
        <div className="chute">
            <p>Já sei a palavra!</p>
            <input
                type="text"
                data-test="guess-input"
                onKeyDown={handleKeyDown}
                value={props.chute.input}
                onChange={handleChange}
                disabled={desabilitado}
                id="chute"
            >
            </input>
            <button
                onClick={checkVitoria}
                disabled={desabilitado}
                data-test="guess-button"
            >
                Chutar
            </button>
        </div>
    );
}