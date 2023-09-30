import { Link } from "react-router-dom";

export default function Erro(){

    return (
        <>
            <h1>PÁGINA NÃO ENCONTRADA</h1>
            <p>Voltar para a página inicial : <span> <Link to="/">VOLTAR</Link>  </span></p>
        </>
    ) 
}