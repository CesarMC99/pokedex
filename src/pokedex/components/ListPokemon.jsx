import { CardPokemon } from "./CardPokemon"

export const ListPokemon = ({dataPokemons}) => {

    const { data, isLoading, error } = dataPokemons

    return (
        <>  
            <section>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-8">
                    {
                        data?.map(pokemon => (
                            <li className="" key={pokemon.id}>
                                <CardPokemon pokemon= {pokemon} />
                            </li>
                        ))
                    }
                </ul>
            </section>
        </>
    )
}