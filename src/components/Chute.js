export default function Chute(props) {

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
            props.chute.setErros(6);
            props.chute.setClassPalavra('errado');
        }
        props.chute.setPalavraEscondida(props.chute.palavra);
        props.chute.setIniciado(false);
        props.chute.setInput('');
    }

    return (
        <div className="chute">
            <p>Já sei a palavra!</p>
            <input type="text" data-test="guess-input" onKeyDown={handleKeyDown} value={props.chute.input} onChange={handleChange} disabled={(props.chute.palavraEscondida === props.chute.palavra)} id="chute"></input>
            <button onClick={checkVitoria} data-test="gess-button" disabled={(props.chute.palavraEscondida === props.chute.palavra)}>Chutar</button>
        </div>
    )
}