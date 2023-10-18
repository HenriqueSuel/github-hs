import { useState } from "react";
import { useCart } from "../../contexts/cartContext"
import { Component02 } from "../componente02"

const Component01 = () => {

    const [numero, setNumero] = useState(1)
    const { setTitle, title, teste } = useCart();


    const handleMudarNome = () => {
        teste();
        setTitle(title + numero.toString());
        setNumero(previous => previous + 1);
    }

    return (
        <>
            <h1 className="text-white">Componente 01</h1>
            <Component02></Component02>
            <button onClick={handleMudarNome}>Mudar o nome</button>
        </>
    )
}


export { Component01 }