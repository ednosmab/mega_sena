const estilo = {
    padding: "1rem 2rem",
    fontSize: "2.5rem",
}

const Botao = (props) => {
    return (
        <>
            <button style={estilo} onClick={props.funcao} >{props.texto}</button>
        </>
    )
}

export default Botao