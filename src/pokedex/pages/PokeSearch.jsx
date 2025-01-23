import { useContext, useEffect, useState } from "react"
import { ListPokemon } from "../components/ListPokemon"
import { Pagination } from "../components/Pagination"
import { FilterPokeContext } from "../context/filter-poke-context/FilterPokeContext"
import { useParams } from "react-router"

export const PokeSearch = () => {
    
    const { search } = useParams()

    const { dataPokemons, details, setOffset, setParams } = useContext(FilterPokeContext)

    useEffect(() => {
        setParams(search)
    },[search])

    return (
        <>
            <ListPokemon dataPokemons={dataPokemons}/>
            <Pagination details={details} setOffset={setOffset}/>
        </>
    )
}