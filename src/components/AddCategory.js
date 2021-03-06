import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategorias }) => {
    const [texto, setTexto] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        if (texto.trim().length > 2) {
            setCategorias(categorias => [texto, ...categorias])
            setTexto("")
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={texto} onChange={(e) => {
                setTexto(e.target.value)
                console.log("entre en el onchage");
            }} placeholder="Categoria" />
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}

export default AddCategory