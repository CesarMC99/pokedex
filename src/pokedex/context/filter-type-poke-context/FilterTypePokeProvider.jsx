import { useEffect, useState } from "react"
import { FilterTypePokeContext } from "./FilterTypePokeContext"
import { getDataPokemons } from "../../helpers/getDataPokemons"

export const FilterTypePokeProvider = ({children}) => {

    const [params, setParams] = useState("")
    const [offset, setOffset] = useState(0)

    const [details, setDetails] = useState({
        count: 0,
        offset: 0,
        limit: 9
    })

    const [dataPokemons, setDataPokemons] = useState({
        data: null,
        error: null,
        isLoading: true
    })

    const getPokeByType = async () => {
        if(params) {
            const response = await fetch(`https://pokeapi.co/api/v2/type/${params}`)
            const results = await response.json()
            
            const urls = results.pokemon.map(pokemon => (pokemon.pokemon.url))

            const data = await getDataPokemons(urls, offset, details.limit)
            
            setDataPokemons({
                data: data,
                error: null,
                isLoading: false
            })

            setDetails((prevDetails) => ({
                ...prevDetails,
                count: urls.length,
            }));
        }
    }

    useEffect(() => {
        getPokeByType()
    }, [params, offset])

    return (
        <FilterTypePokeContext.Provider value={{dataPokemons, details, setOffset, setParams}}>
            {children}
        </FilterTypePokeContext.Provider>
    )
}