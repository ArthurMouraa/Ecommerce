import { createContext, useState, useEffect } from "react";
export const ProdutoContext = createContext({})


export function ProdutoProvider({children}){

  const [produtos, setProdutos] = useState([])
  const [loading , setLoading] = useState(true)
  const [offset, setOffset] = useState(0)
  const limit = 10;
  
    useEffect(() => {
      const fetchProdutos = async () => {
        try {
          const request = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`);
          const itens = await request.json();
          console.log(itens);
          if(itens != null){
            setProdutos(itens)
          }
        }catch(error){
  
          throw new Error(`Deu erro ${error}`)
  
        }finally{
          setLoading(false)
        }
      }
      fetchProdutos();
    }, [offset])


    return(
      <ProdutoContext.Provider value={{produtos, loading, setOffset, setLoading}}>
        {children}
      </ProdutoContext.Provider>
    )


}