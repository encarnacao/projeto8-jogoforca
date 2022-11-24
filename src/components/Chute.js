export default function Chute(props) {
    function handleChange(event) {
        props.chute.setInput(event.target.value);
    }

    function checkVitoria() {
        const palavra = props.chute.tirarAcentos(props.chute.palavra);
        if (palavra === props.chute.input) {
            props.chute.setClassPalavra('certo');
        } else {
            props.chute.setErros(6);
            props.chute.setClassPalavra('errado');
        }
        props.chute.setPalavraEscondida(props.chute.palavra);
        props.chute.setIniciado(false);
    }

    return (
        <div className="chute">
            <p>Já sei a palavra!</p>
            <input type="text" onChange={handleChange} id="chute"></input>
            <button onClick={checkVitoria} disabled={(props.chute.palavraEscondida === props.chute.palavra)}>Chutar</button>
        </div>
    )
}