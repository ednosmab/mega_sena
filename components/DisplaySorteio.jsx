import Sorteio from "./Sorteio"
import Botao from "./Botao"
import { useState } from "react"

const DisplaySorteio = () => {
    const [qta, setQta] = useState("")
    const [qtaInf, setQtaInf] = useState("")
    const [mostrarBolas, setMostrarBolas] = useState(false)
    const [msg, setMsg] = useState("")

    function mostrar(){
        
        setMsg(qtaInf < 6 || qtaInf > 15 ? "Valor padrão do sorteio é de 6 a 15 bolas" : "")
        
        if(qtaInf < 0 || qtaInf == ""){
            setQta(0)
        }
        
        if(qta == "" || qta < 6){
            setQta(6)
            
        }
        
        if(qtaInf < 5){
            setQta(6)
            
        }
        
        if(qtaInf > 6 && qtaInf < 15){
            setQta(qtaInf)
        }
        
        if(qtaInf >= 15){
            setQta(15)
            
        }

        setMostrarBolas(true)
        
        setQtaInf("")
    }
    function infQta(qtaInformado){
        setQtaInf(qtaInformado.target.value)
        setMostrarBolas(false)
    }

    const estilo = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    }
    const estiloMsg = {
        fontSize: "2rem",
        fontFamily: "sans serife"
    }
    const estiloInput = {
        width: "60px",
        height: "40px",
        fontSize: "2rem",
        textAlign: "center",
        margin: "3rem 0",
    }
    const estiloBotao = {
        marginTop: "3rem"
    }
    return (
        <div style={estilo}>
            {msg ? <span style={estiloMsg}>{msg}</span> : ""}
            <input style={estiloInput} type="text" value={qtaInf} onChange={infQta}/>
            { mostrarBolas ? <Sorteio quantidade={qta}/> : ""}
            <span style={estiloBotao}>
                <Botao texto="Gerar" funcao={mostrar}/>
            </span>
        </div>
    )
}

export default DisplaySorteio