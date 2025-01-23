import { FilterPokeContext } from "./FilterPokeContext"
import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../pokemon-context/PokemonContext";
import { getDataPokemons } from "../../helpers/getDataPokemons";

export const FilterPokeProvider = ({children}) => {

    const [params, setParams] = useState("")

    const [details, setDetails] = useState({
        count: 0,
        offset: 0,
        limit: 9
    })

    const setOffset = (newValue) => {
        setDetails({...details, offset: newValue})
    }

    const [dataPokemons, setDataPokemons] = useState({
        data: null,
        error: null,
        isLoading: true
    })

    const { globalPokemons } = useContext(PokemonContext)
    
    const getFilterPokemon = async () => {
        
        try{
            if(!globalPokemons?.results) return

            setDataPokemons({...dataPokemons, isLoading: true})

            if(params && isNaN(params)) {
                
                const filterPokemon = globalPokemons.results?.filter(poke => poke.name.includes(params.toLowerCase()))
                const urls = filterPokemon?.map(result => (result.url))

                const data = await getDataPokemons(urls, details.offset, details.limit)

                setDataPokemons({
                    data: data,
                    error: null,
                    isLoading: false
                })

                setDetails((prevDetails) => ({
                    ...prevDetails,
                    count: urls.length,
                }));

            } else if(!isNaN(params)){

                const url = [`https://pokeapi.co/api/v2/pokemon/${params}`]

                const data = await getDataPokemons(url, details.offset, details.limit)
                
                setDataPokemons({
                    data: data,
                    error: null,
                    isLoading: false
                })

                setDetails((prevDetails) => ({
                    ...prevDetails,
                    count: url.length,
                }));
            }

        } catch (error) {
            setDataPokemons({
                data: null,
                error: error.message,
                isLoading: false
            })

            setDetails({
                ...details,
                count: 0
            })
        }
        
    }

    useEffect(() => {
        getFilterPokemon()
    },[params, globalPokemons, details.offset])

    return (
        <FilterPokeContext.Provider value={{dataPokemons, details, setParams, setOffset}}>
            {children}
        </FilterPokeContext.Provider>
    )
}
