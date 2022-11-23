import { palavras } from './palavras.js';
import React from 'react';
import Jogo from './components/Jogo.js';
import Letras from './components/Letras.js';

function App() {
  const [erros, setErros] = React.useState(0);
  const pathForca = "./assets/images/forca";
  const [palavra, setPalavra] = React.useState('');
  const [classPalavra, setClassPalavra] = React.useState('em-progresso');
  const [imagem, setImagem] = React.useState(pathForca + '0.png');
  const [palavraEscondida, setPalavraEscondida] = React.useState('');
  const [jogados, setJogados] = React.useState([]);
  const [iniciado, setIniciado] = React.useState(false);

  function esconderPalavra(palavra) {
    let palavraEscondida = palavra.split('').map((letra, i) => i === palavra.length - 1 ? "_" : "_ ");
    return palavraEscondida.join('');
  }

  function formatarEscondida(palavraEscondida) {
    return palavraEscondida.split('').map(letra => letra === "_" ? letra = "_ " : letra);
  }

  function tirarAcentos(palavra) {
    return palavra.normalize("NFD").replace(/[^a-zA-Z\s]/g, "");
  }

  function jogada(letra) {
    setJogados([...jogados, letra]);
    let palavraArray = tirarAcentos(palavra).split('');
    if (palavraArray.includes(letra)) {
      while (palavraArray.includes(letra)) {
        let index = palavraArray.indexOf(letra);
        let palavraEscondidaArray = palavraEscondida.split(' ');

        console.log(palavraEscondidaArray)
        palavraEscondidaArray[index] = letra;
        setPalavraEscondida(formatarEscondida(palavraEscondidaArray.join('')).join(''));
        palavraArray[index] = '*';
      }
    } else {
      setErros(erros + 1);
      setImagem(pathForca + erros + '.png');
      if (erros === 6) {
        setClassPalavra('errado');
        setPalavraEscondida(palavra);
        setIniciado(false);
      }
    }
    if (palavraEscondida === palavra) {
      setClassPalavra('certo');
      setIniciado(false);
    }
  }

  function iniciarJogo() {
    const escondida = esconderPalavra(palavra);
    setImagem(pathForca + '0.png');
    setErros(0);
    setPalavraEscondida(escondida);
    setJogados([]);
    setIniciado(true);
  }

  function escolherPalavra() {
    const novaPalavra = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavra(novaPalavra);
    setClassPalavra('em-progresso');
    iniciarJogo();
  }

  const jogo = {
    palavra: palavraEscondida,
    classe: classPalavra,
    imagem: imagem,
    escolher: escolherPalavra
  }




  return (
    <div className="App">
      <Jogo jogo={jogo} />
      <Letras jogados={jogados} jogoIniciado={iniciado} jogada={jogada} />
    </div>
  );
}

export default App;
