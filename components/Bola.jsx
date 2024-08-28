const estilo={
    width: "60px",
    height: "60px",
    borderRadius: "calc(60px /2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "2rem 1rem",
    backgroundColor: "#fff",
    color: "#0c4e50",
    fontSize: "3rem",
    fontFamily: 'Sans serif'
}

const Bola = (props) => {
    return (
        <div style={estilo}>
            {props.numero}
        </div>
    )
}

export default Bola