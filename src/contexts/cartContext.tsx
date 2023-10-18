import { createContext, useContext, useEffect, useState } from "react";
import { get } from "../services/api.services";

interface ICart {
    title: string;
    setTitle: (value: string) => void;
    teste: () => void;
}

export const CartContext = createContext<ICart>({
    title: '',
    setTitle: () => null,
    teste: () => null
});

interface ICartProviderProps {
    children: React.ReactNode
}

const CartProvider = ({ children }: ICartProviderProps) => {
    const [title, setTitle] = useState<string>('Henrique');


    const teste = () => {
        console.log('chamou')
    }

    useEffect(() => {

        const onMount = async () => {
            const lista = await get('users/henriqueSuel');
            console.log(lista);
        }

        onMount();
    }, [])



    return (
        <CartContext.Provider
            value={{
                title,
                setTitle,
                teste
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext);

export { CartProvider, useCart }