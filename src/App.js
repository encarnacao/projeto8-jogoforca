import React from 'react';
import Jogo from './components/Jogo.js';
import Letras from './components/Letras.js';
import Chute from './components/Chute.js';

import erro0 from './assets/forca0.png';
import erro1 from './assets/forca1.png';
import erro2 from './assets/forca2.png';
import erro3 from './assets/forca3.png';
import erro4 from './assets/forca4.png';
import erro5 from './assets/forca5.png';
import erro6 from './assets/forca6.png';

import styled from "styled-components";
import { Reset, GlobalStyle } from './styles/GlobalStyle.js';

function App() {
  const [erros, setErros] = React.useState(0);
  const [palavra, setPalavra] = React.useState('');
  const [palavraEscondida, setPalavraEscondida] = React.useState('');
  const [letrasClicadas, setLetrasClicadas] = React.useState([]);
  const [jogoIniciado, setIniciado] = React.useState(false);
  const [input, setInput] = React.useState('');

  function tirarAcentos(palavra) {
    return palavra.normalize("NFD").replace(/[^a-zA-Z\s]/g, "");
  }

  const imagensErros = [erro0, erro1, erro2, erro3, erro4, erro5, erro6];

  const jogo = {
    imagem: imagensErros[erros],
    palavraEscondida,
    palavra,
    erros,
    setPalavra,
    setPalavraEscondida,
    setErros,
    setIniciado,
    setLetrasClicadas,
    setInput,
  };

  const letras = {
    palavra,
    palavraEscondida,
    letrasClicadas,
    jogoIniciado,
    erros,
    tirarAcentos,
    setLetrasClicadas,
    setIniciado,
    setPalavraEscondida,
    setErros,
  };

  const chute = {
    palavra,
    input,
    palavraEscondida,
    tirarAcentos,
    setPalavraEscondida,
    setInput,
    setErros,
    setIniciado,
  };


  return (
    <DivApp>
      <Reset />
      <GlobalStyle />
      <Jogo jogo={jogo} />
      <Letras letras={letras} />
      <Chute chute={chute} />
    </DivApp>
  );
}

export default App;


const DivApp = styled.div`
  @media (max-width: 850px) {
    width: 100%;
    margin: 0 auto;
  }
`