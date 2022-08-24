import { useState, useEffect } from "react";
import axios from "axios";

function Form() {

    const [ nome, setNome ] = useState([])
    const [ email, setEmail ] = useState([])
    const [ cpf, setCPF ] = useState([])

    function enviaDados(){
    useEffect(() => {
        axios.post('API', {
            nome: 'Alice',
            email: 'alice.alice@gmail.com',
            cpf: 12295633716
        })
        .then(function (response) {
            setInfo(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });  
    })
    }

    // return(
    //     <div className="enviaForm">
    //         <label for="nome">Nome</label>
    //         <input type="text" id="nome" onChance={(event) => {
    //             setNome(event.target.value)
    //         }} placeholder="Nome:" ><input/>
    //         <label for="email"></label>
    //         <input type="text" id="email" onChance={(event) => {
    //             setEmail(event.target.value)
    //         }} placeholder="E-mail:"><input/>
    //         <label htmlFor="cpf"></label>
    //         <input type="text" id="cpf" onChance={(event) => {
    //             setCPF(event.target.value)
    //         }} placeholder="CPF:"><input/>
            
    //         <button type="submit"> Enviar </button>
    //     </div>
    // )
}

export default Form
