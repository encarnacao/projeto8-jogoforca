export default function Letras(props){
    const letras = [
        {letra: 'A', disabled: props.jogados.includes('a'),jogada: () => props.jogada('a')},
        {letra: 'B', disabled: props.jogados.includes('b'),jogada: () => props.jogada('b')},
        {letra: 'C', disabled: props.jogados.includes('c'),jogada: () => props.jogada('c')},
        {letra: 'D', disabled: props.jogados.includes('d'),jogada: () => props.jogada('d')},
        {letra: 'E', disabled: props.jogados.includes('e'),jogada: () => props.jogada('e')},
        {letra: 'F', disabled: props.jogados.includes('f'),jogada: () => props.jogada('f')},
        {letra: 'G', disabled: props.jogados.includes('g'),jogada: () => props.jogada('g')},
        {letra: 'H', disabled: props.jogados.includes('h'),jogada: () => props.jogada('h')},
        {letra: 'I', disabled: props.jogados.includes('i'),jogada: () => props.jogada('i')},
        {letra: 'J', disabled: props.jogados.includes('j'),jogada: () => props.jogada('j')},
        {letra: 'K', disabled: props.jogados.includes('k'),jogada: () => props.jogada('k')},
        {letra: 'L', disabled: props.jogados.includes('l'),jogada: () => props.jogada('l')},
        {letra: 'M', disabled: props.jogados.includes('m'),jogada: () => props.jogada('m')},
        {letra: 'N', disabled: props.jogados.includes('n'),jogada: () => props.jogada('n')},
        {letra: 'O', disabled: props.jogados.includes('o'),jogada: () => props.jogada('o')},
        {letra: 'P', disabled: props.jogados.includes('p'),jogada: () => props.jogada('p')},
        {letra: 'Q', disabled: props.jogados.includes('q'),jogada: () => props.jogada('q')},
        {letra: 'R', disabled: props.jogados.includes('r'),jogada: () => props.jogada('r')},
        {letra: 'S', disabled: props.jogados.includes('s'),jogada: () => props.jogada('s')},
        {letra: 'T', disabled: props.jogados.includes('t'),jogada: () => props.jogada('t')},
        {letra: 'U', disabled: props.jogados.includes('u'),jogada: () => props.jogada('u')},
        {letra: 'V', disabled: props.jogados.includes('v'),jogada: () => props.jogada('v')},
        {letra: 'W', disabled: props.jogados.includes('w'),jogada: () => props.jogada('w')},
        {letra: 'X', disabled: props.jogados.includes('x'),jogada: () => props.jogada('x')},
        {letra: 'Y', disabled: props.jogados.includes('y'),jogada: () => props.jogada('y')},
        {letra: 'Z', disabled: props.jogados.includes('z'),jogada: () => props.jogada('z')},
      ];
    return (
        <div className="letras">
            {letras.map((letra) => <button key={letra.letra} onClick = {letra.jogada} disabled={!(props.jogoIniciado)?true:letra.disabled}>{letra.letra}</button>)}
        </div>
    );
}