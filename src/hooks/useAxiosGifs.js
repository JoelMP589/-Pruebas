import { useState, useEffect } from "react"
import { getGifs } from "../components/helpers/getGifs"


export const useAxiosGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    })

    useEffect(() => {
        getGifs(category).then(images => {
            setState({
                data: images,
                loading: false,
            })
        })
    }, [category])

    return state
}