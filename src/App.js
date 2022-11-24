import React from 'react';
import Jogo from './components/Jogo.js';
import Letras from './components/Letras.js';
import Chute from './components/Chute.js';

function App() {
  const [erros, setErros] = React.useState(0);
  const pathForca = "./assets/images/forca";
  const [palavra, setPalavra] = React.useState('');
  const [classPalavra, setClassPalavra] = React.useState('em-progresso');
  const [palavraEscondida, setPalavraEscondida] = React.useState('');
  const [letrasClicadas, setLetrasClicadas] = React.useState([]);
  const [iniciado, setIniciado] = React.useState(false);
  const [input,setInput] = React.useState('');

  const jogo = {
    palavra: palavraEscondida,
    classe: classPalavra,
    imagem: pathForca+erros+".png",
    setPalavra: setPalavra,
    setPalavraEscondida: setPalavraEscondida,
    setErros: setErros,
    setClassPalavra: setClassPalavra,
    setIniciado: setIniciado,
    setLetrasClicadas: setLetrasClicadas,
  }

  const letras = {
    palavra: palavra,
    palavraEscondida: palavraEscondida,
    letrasClicadas: letrasClicadas,
    jogoIniciado: iniciado,
    erros: erros,
    setLetrasClicadas: setLetrasClicadas,
    setIniciado: setIniciado,
    setClassPalavra: setClassPalavra,
    setPalavraEscondida: setPalavraEscondida,
    setIniciado: setIniciado,
    setErros: setErros,
  }

  const chute = {
    palavra: palavra,
    input: input,
    setInput: setInput,
    setErros: setErros,
    setClassPalavra: setClassPalavra,
    setIncidiado: setIniciado,
  }

  return (
    <div className="App">
      <Jogo jogo={jogo} />
      <Letras letras={letras} />
      <Chute chute={chute}/>
    </div>
  );
}

export default App;
