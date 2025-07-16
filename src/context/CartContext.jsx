import { createContext, useContext, useState } from "react";
export const CartContext = createContext({})



export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addCart = ({ id, title, price, category, images }) => {

    setCart(() => {
      return [
        ...cart,
        {
          id: id,
          title: title,
          price: price,
          category: category,
          image: images[0]
        }

      ]
    })

  }

  const produtoExiste = true;

  const limparCart = () => {
    setCart([])
  }

  const removeCart = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }



  return (
    <CartContext.Provider value={{ cart, addCart, removeCart, limparCart }}>
      {children}
    </CartContext.Provider>
  )

}