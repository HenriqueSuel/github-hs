import { useCart } from "../../contexts/cartContext";


const Component03 = () => {
    const { title } = useCart();

    return (
        <h1 className="text-white">Componente 03 {title}</h1>
    )
}


export { Component03 }