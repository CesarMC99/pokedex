import { BrowserRouter } from 'react-router'
import { AllDataPokeProvider } from './pokedex/context/all-data-poke-context/AllDataPokeProvider'
import { PokemonProvider } from './pokedex/context/pokemon-context/PokemonProvider'
import { PokeRoutes } from './pokedex/routes/PokeRoutes'
import { FilterPokeProvider } from './pokedex/context/filter-poke-context/FilterPokeProvider'
import { FilterTypePokeProvider } from './pokedex/context/filter-type-poke-context/FilterTypePokeProvider'
import { DataPokeProvider } from './pokedex/context/data-poke-context/DataPokeProvider'

export const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <PokemonProvider>
          <DataPokeProvider>
            <AllDataPokeProvider>
              <FilterPokeProvider>
                <FilterTypePokeProvider>
                  <PokeRoutes />
                </FilterTypePokeProvider>
              </FilterPokeProvider>
            </AllDataPokeProvider>
          </DataPokeProvider>
        </PokemonProvider>
      </BrowserRouter>
    </>
  )
}
