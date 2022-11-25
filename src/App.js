import React from 'react';
import Jogo from './components/Jogo.js';
import Letras from './components/Letras.js';
import Chute from './components/Chute.js';

function App() {
  const [erros, setErros] = React.useState(0);
  const [palavra, setPalavra] = React.useState('');
  const [classPalavra, setClassPalavra] = React.useState('em-progresso');
  const [palavraEscondida, setPalavraEscondida] = React.useState('');
  const [letrasClicadas, setLetrasClicadas] = React.useState([]);
  const [jogoIniciado, setIniciado] = React.useState(false);
  const [input, setInput] = React.useState('');

  function tirarAcentos(palavra) {
    return palavra.normalize("NFD").replace(/[^a-zA-Z\s]/g, "");
  }

  const jogo = {
    imagem: `./assets/images/forca${erros}.png`,
    palavraEscondida,
    palavra,
    classPalavra,
    setPalavra,
    setPalavraEscondida,
    setErros,
    setClassPalavra,
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
    setClassPalavra,
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
    setClassPalavra,
    setIniciado,
  };


  return (
    <div className="App">
      <Jogo jogo={jogo} />
      <Letras letras={letras} />
      <Chute chute={chute} />
    </div>
  );
}

export default App;
