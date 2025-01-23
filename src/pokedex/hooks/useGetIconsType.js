import { useContext, useEffect, useState } from "react"
import { PokemonContext } from "../context/pokemon-context/PokemonContext"

export const useGetIconsType = () => {

    const [typesIcons, setTypesIcons] = useState({
        data: null,
        error: null,
        isLoading: true
    })

    const { types } = useContext(PokemonContext)
    const urls = types.results?.map(result => (result.url))

    const getTypes = async () => {
        if(!urls) return

        setTypesIcons({data: null, error: null, isLoading: true})

        const typesIcons = await Promise.all(urls?.map(async (url) => {
            const response = await fetch(url);
            const results = await response.json()
            let img;

            if(results.name === "stellar"){
                img
            } else {
                img = results.sprites["generation-vii"]["lets-go-pikachu-lets-go-eevee"]["name_icon"]
            }
            

            return {name: results.name , img: img}
        })) 

        setTypesIcons({data: typesIcons, error: null, isLoading: false})
    }

    useEffect(() => {
        getTypes()
    },[types])

    return { typesIcons }
}