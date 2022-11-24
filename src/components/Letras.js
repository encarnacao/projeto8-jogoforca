export default function Letras(props) {
    const letras = [
        { letra: 'A', disabled: props.letras.letrasClicadas.includes('a'), jogada: () => jogada('a') },
        { letra: 'B', disabled: props.letras.letrasClicadas.includes('b'), jogada: () => jogada('b') },
        { letra: 'C', disabled: props.letras.letrasClicadas.includes('c'), jogada: () => jogada('c') },
        { letra: 'D', disabled: props.letras.letrasClicadas.includes('d'), jogada: () => jogada('d') },
        { letra: 'E', disabled: props.letras.letrasClicadas.includes('e'), jogada: () => jogada('e') },
        { letra: 'F', disabled: props.letras.letrasClicadas.includes('f'), jogada: () => jogada('f') },
        { letra: 'G', disabled: props.letras.letrasClicadas.includes('g'), jogada: () => jogada('g') },
        { letra: 'H', disabled: props.letras.letrasClicadas.includes('h'), jogada: () => jogada('h') },
        { letra: 'I', disabled: props.letras.letrasClicadas.includes('i'), jogada: () => jogada('i') },
        { letra: 'J', disabled: props.letras.letrasClicadas.includes('j'), jogada: () => jogada('j') },
        { letra: 'K', disabled: props.letras.letrasClicadas.includes('k'), jogada: () => jogada('k') },
        { letra: 'L', disabled: props.letras.letrasClicadas.includes('l'), jogada: () => jogada('l') },
        { letra: 'M', disabled: props.letras.letrasClicadas.includes('m'), jogada: () => jogada('m') },
        { letra: 'N', disabled: props.letras.letrasClicadas.includes('n'), jogada: () => jogada('n') },
        { letra: 'O', disabled: props.letras.letrasClicadas.includes('o'), jogada: () => jogada('o') },
        { letra: 'P', disabled: props.letras.letrasClicadas.includes('p'), jogada: () => jogada('p') },
        { letra: 'Q', disabled: props.letras.letrasClicadas.includes('q'), jogada: () => jogada('q') },
        { letra: 'R', disabled: props.letras.letrasClicadas.includes('r'), jogada: () => jogada('r') },
        { letra: 'S', disabled: props.letras.letrasClicadas.includes('s'), jogada: () => jogada('s') },
        { letra: 'T', disabled: props.letras.letrasClicadas.includes('t'), jogada: () => jogada('t') },
        { letra: 'U', disabled: props.letras.letrasClicadas.includes('u'), jogada: () => jogada('u') },
        { letra: 'V', disabled: props.letras.letrasClicadas.includes('v'), jogada: () => jogada('v') },
        { letra: 'W', disabled: props.letras.letrasClicadas.includes('w'), jogada: () => jogada('w') },
        { letra: 'X', disabled: props.letras.letrasClicadas.includes('x'), jogada: () => jogada('x') },
        { letra: 'Y', disabled: props.letras.letrasClicadas.includes('y'), jogada: () => jogada('y') },
        { letra: 'Z', disabled: props.letras.letrasClicadas.includes('z'), jogada: () => jogada('z') },
    ];

    function tirarAcentos(palavra) {
        return palavra.normalize("NFD").replace(/[^a-zA-Z\s]/g, "");
    }

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
        const palavraArray = tirarAcentos(props.letras.palavra).split('');
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
            {letras.map((letra) => <button key={letra.letra} onClick={letra.jogada} disabled={!(props.letras.jogoIniciado) ? true : letra.disabled}>{letra.letra}</button>)}
        </div>
    );
}