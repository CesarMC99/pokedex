import { useContext, useState } from "react"
import { ListPokemon } from "../components/ListPokemon"
import { Pagination } from "../components/Pagination"
import { AllDataPokeContext } from "../context/all-data-poke-context/AllDataPokeContext"

export const Home = () => {

    const { dataPokemons, details, setOffset } = useContext(AllDataPokeContext)
    
    return (
        <>
            <ListPokemon dataPokemons={dataPokemons}/>
            <Pagination details={details} setOffset={setOffset}/>
        </>
    )
}