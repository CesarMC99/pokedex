import { useContext, useEffect, useState } from "react"
import { AllDataPokeContext } from "./AllDataPokeContext"
import { PokemonContext } from "../pokemon-context/PokemonContext"
import { getDataPokemons } from "../../helpers/getDataPokemons"

export const AllDataPokeProvider = ({children}) => {

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

    const {globalPokemons} = useContext(PokemonContext)
    const urls = globalPokemons.results?.map(result => (result.url))
    
    const getPokemons = async () => {
        try{
            if(!urls) return

            setDataPokemons({...dataPokemons, isLoading: true})
            
            const data = await getDataPokemons(urls, details.offset, details.limit)
            
            setDataPokemons({
                data: data,
                error: null,
                isLoading: false
            })

            setDetails({
                ...details,
                count: urls.length
            })

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
        getPokemons()
    }, [globalPokemons, details.offset])

    return (
        <AllDataPokeContext.Provider value={{dataPokemons, details, setOffset}}>
            {children}
        </AllDataPokeContext.Provider>
    )
}