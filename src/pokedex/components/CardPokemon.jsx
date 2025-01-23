import { useContext } from "react"
import { DataPokeContext } from "../context/data-poke-context/DataPokeContext"

export const CardPokemon = ({pokemon}) => {

    const {setDetailsPokemon} = useContext(DataPokeContext);
    const {id, name, sprites, types} = pokemon;

    let nameEdit = name.split("");
    nameEdit.splice(0,1, name[0].toUpperCase());
    nameEdit = nameEdit.join("");

    const showDetailsPokemon = () => {
        setDetailsPokemon({data: {...pokemon, name: nameEdit}, isDisplay: "block"})
    }

    return (
        <article 
            className="flex flex-col justify-between items-center w-[400px] h-[450px] p-8 border-2 rounded-xl bg-bottom"
            style={{backgroundImage: `url('https://i.pinimg.com/736x/53/04/11/53041131ded5dd048c662ae254968d5b.jpg')`}}
        >
            <img className="text-white aspect-auto h-[150px]" src={sprites} alt={name} />
            <h3 className="flex flex-col items-center text-purple-500 text-2xl font-semibold">
                <span className="text-white"># {id}</span>
                {nameEdit}
            </h3>
            <ul className="flex gap-4">
                {
                    types.map((type, index) => (
                        <li key={index}>
                            <img className="border-2 border-white rounded-lg h-[30px]" src={type.img} alt={type.name} />
                        </li>
                    ))
                }
            </ul>
            <button 
                className="bg-cyan-600 text-white text-lg border-2 rounded-xl px-4 py-2"
                onClick={showDetailsPokemon}    
            >+ Mas detalles</button>
        </article>
    )
}