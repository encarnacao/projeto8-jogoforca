import { palavras } from './palavras.js';
import React, { useState } from 'react';
import Jogo from './components/Jogo.js';
import Letras from './components/Letras.js';
import Chute from './components/Chute.js';

function App() {
  const [erros, setErros] = React.useState(0);
  const pathForca = "./assets/images/forca";
  const [palavra, setPalavra] = React.useState('');
  const [classPalavra, setClassPalavra] = React.useState('em-progresso');
  const [imagem, setImagem] = React.useState(pathForca + '0.png');
  const [palavraEscondida, setPalavraEscondida] = React.useState('');
  const [jogados, setJogados] = React.useState([]);
  const [iniciado, setIniciado] = React.useState(false);

  function tirarAcentos(palavra) {
    return palavra.normalize("NFD").replace(/[^a-zA-Z\s]/g, "");
  }

  function revelarLetras(letra, arrayPalavra, arrayPalavraEscondida) {
    while (arrayPalavra.indexOf(letra) !== -1) {
      let index = arrayPalavra.indexOf(letra);
      arrayPalavraEscondida[index] = palavra[index];
      arrayPalavra[index] = "_";
    }
    return arrayPalavraEscondida;
  }

  function jogadaErrada(erros) {
    setErros(erros + 1, () => {
      setImagem(pathForca + erros + ".png");
    });
  }

  function checkVitoria() {
    if (palavraEscondida === palavra) {
      setClassPalavra('certo');
      setPalavraEscondida(palavra);
      setIniciado(false);
    }
  }


  function jogada(letra) {
    setJogados([...jogados, letra]);
    let palavraArray = tirarAcentos(palavra).split('');
    let palavraEscondidaArray = palavraEscondida.split('');
    if (palavraArray.indexOf(letra) !== -1) {
      let palavraEscondidaNova = revelarLetras(letra, palavraArray, palavraEscondidaArray);
      setPalavraEscondida(palavraEscondidaNova.join(''), checkVitoria);
    } else {
      jogadaErrada(erros);
      if (erros === 6) {
        setClassPalavra('errado');
        setPalavraEscondida(palavra);
        setIniciado(false);
      }
    }
  }

  function iniciarJogo() {
    setImagem(pathForca + '0.png');
    setErros(0);
    setJogados([]);
    setIniciado(true);
  }

  function esconderPalavra(palavra) {
    let palavraEscondida = palavra.split('').map(letra => "_");
    setPalavraEscondida(palavraEscondida.join(''));
  }


  function escolherPalavra() {
    const novaPalavra = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavra(novaPalavra);
    esconderPalavra(novaPalavra);
    console.log(palavra);
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
      <Chute />
    </div>
  );
}

export default App;
