import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifApp = () => {
    //const categorias = ["One Punch", "Samurai X", "Dragon Ball", "Batman"];
    const [categorias, setCategorias] = useState(["One Punch", "Samurai X", "Dragon Ball", "Batman"])


    /*  const handleAdd = () => {
         setCategorias([texto, ...categorias])
     }
  */
    return (
        <>
            <h2>GifApp</h2>
            <AddCategory setCategorias={setCategorias} />
            <hr />
            <ol>
                {categorias.map((categoria) => {
                    return <GifGrid category={categoria} key={categoria} />
                })}
            </ol>
        </>
    )
}

export default GifApp