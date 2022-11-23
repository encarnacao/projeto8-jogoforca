export default function Jogo(props){
    return (
        <div className="jogo">
            <div className="forca">
                <img src={props.jogo.imagem} alt="Forca" />
            </div>
            <div className="palavra">
                <button className="escolher-palavra" onClick={props.jogo.escolher}>Escolher Palavra</button>
                <h1 className={props.jogo.classe}>{props.jogo.palavra}</h1>
            </div>
        </div>
    );
}