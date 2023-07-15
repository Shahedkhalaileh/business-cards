import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children}){

    const[items,setItems] = useState(0)

    const addToCart = ()=>{
        const newItems = items + 1
        setItems(newItems )
    }

    return (
        <CartContext.Provider value={{items,addToCart}}>{children}</CartContext.Provider>
    )
}

export default CartContext;