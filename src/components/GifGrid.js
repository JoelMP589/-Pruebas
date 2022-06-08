import React from 'react'
import { useAxiosGifs } from '../hooks/useAxiosGifs'
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
    const { data: images, loading } = useAxiosGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Cargando...</p>}
            <div className='card-grid animate__animated animate__backInLeft'>
                {images?.map((img) => {
                    return (
                        <GifGridItem key={img.id} {...img} />
                    )
                })}
            </div>
        </>
    )
}

export default GifGrid