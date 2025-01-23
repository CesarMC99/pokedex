import { useNavigate } from "react-router";
import { useForm } from "../hooks/useForm";
import { useContext } from "react";
import { FilterPokeContext } from "../context/filter-poke-context/FilterPokeContext";

export const SearchPokemon = () => {

    const { searchPoke, onInputChange } = useForm({
        searchPoke: ""
    });

    const navigate = useNavigate()
    const {setParams} = useContext(FilterPokeContext);

    const handlerSubmit = (event) => {
        event.preventDefault();
        setParams(searchPoke)
        navigate(`/pokemon/${searchPoke}`)       
    }

    return (
        <form 
            className="flex items-center gap-6"
            onSubmit={handlerSubmit} 
        >
            <input className="bg-black text-white w-[400px] border-2 outline-none p-2 px-4 rounded-3xl" value={searchPoke} name="searchPoke" onChange={onInputChange}/>
            <button className="bg-green-600  text-white border-2 px-6 py-2 rounded-3xl">Buscar</button>
        </form>
    )
}