import React, { useState } from 'react'
import AddCategory from './components/AddCategory'

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
                    return <li key={categoria}>{categoria}</li>
                })}
            </ol>
        </>
    )
}

export default GifApp