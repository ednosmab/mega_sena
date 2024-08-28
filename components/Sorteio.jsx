import Bola from "./Bola"

export default function Sorteio(props){

    const sortear = () => {
        const max = 60
        const min = 0
        const novaBola = Math.floor(Math.random() * (max - min) + min)
        return novaBola
    } 

    function gerarLista(valor = 6){
        let lista = []
        if (valor > 15) {
            valor = 15
        }
        for (let index = 0; index < valor; index++) {
            lista.push(<Bola numero={sortear()} key={index}/>)
        }
        console.log(valor)
        return lista
    }

    const estilo = {
        width: "60vw",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap"
    }
    return (
        <div style={estilo}>
            {gerarLista(props.quantidade)}
        </div>
    )
}