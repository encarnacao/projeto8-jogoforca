export default function Letras(props) {

    const alfabeto = "abcdefghijklmnopqrstuvwxyz".split("");
    const letras = alfabeto.map((l) => (
        {
            letra: l.toUpperCase(),
            disabled: props.letras.letrasClicadas.includes(l),
            jogada: () => jogada(l)
        }
    ));

    function revelarLetras(letra, arrayPalavra, arrayPalavraEscondida) {
        while (arrayPalavra.indexOf(letra) !== -1) {
            let index = arrayPalavra.indexOf(letra);
            arrayPalavraEscondida[index] = props.letras.palavra[index];
            arrayPalavra[index] = "_";
        }
        return arrayPalavraEscondida;
    }


    function checkVitoria(escondida) {
        if (escondida === props.letras.palavra) {
            props.letras.setClassPalavra('certo');
            props.letras.setPalavraEscondida(props.letras.palavra);
            props.letras.setIniciado(false);
        }
    }


    function jogada(letra) {
        props.letras.setLetrasClicadas([...props.letras.letrasClicadas, letra]);
        const palavraArray = props.letras.tirarAcentos(props.letras.palavra).split('');
        const contemLetra = palavraArray.indexOf(letra) !== -1
        const palavraEscondidaArray = props.letras.palavraEscondida.split('');
        const palavraEscondidaNova = contemLetra ? revelarLetras(letra, palavraArray, palavraEscondidaArray).join('') : props.letras.palavraEscondida;
        if (contemLetra) {
            props.letras.setPalavraEscondida(palavraEscondidaNova);
        } else {
            const novoErro = props.letras.erros + 1;
            props.letras.setErros(novoErro);
            if (novoErro === 6) {
                props.letras.setClassPalavra('errado');
                props.letras.setPalavraEscondida(props.letras.palavra);
                props.letras.setIniciado(false);
            }
        }
        checkVitoria(palavraEscondidaNova)
    }

    return (
        <div className="letras">
            {letras.map((letra) => <button data-test="letter" key={letra.letra} onClick={letra.jogada} disabled={!(props.letras.jogoIniciado) ? true : letra.disabled}>{letra.letra}</button>)}
        </div>
    );
}