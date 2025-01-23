import { useEffect, useState } from "react"
import {PokemonContext} from "./PokemonContext"

export const PokemonProvider = ({children}) => {

    const [globalPokemons, setGlobalPokemons] = useState({})
    const [types, setTypes] = useState({})

    const getGlobalPokemons = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000");
        const results = await response.json();
        setGlobalPokemons(results)
    }

    const getTypes = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/type/");
        const results = await response.json();
        setTypes(results)
    }

    useEffect(() => {
        getGlobalPokemons()
        getTypes()
    },[])

    return (
        <PokemonContext.Provider value={{globalPokemons, types}}>
            {children}
        </PokemonContext.Provider>
    )
}



