import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import { FilterTypePokeContext } from "../context/filter-type-poke-context/FilterTypePokeContext"
import { ListPokemon } from "../components/ListPokemon"
import { Pagination } from "../components/Pagination"

export const PokeType = () => {

    const { type } = useParams()

    const { dataPokemons, details, setOffset, setParams } = useContext(FilterTypePokeContext)

    useEffect(() => {
      setParams(type)
    },[type])

    return (
      <>
          <ListPokemon dataPokemons={dataPokemons}/>
          <Pagination details={details} setOffset={setOffset}/>
      </>
    )
}