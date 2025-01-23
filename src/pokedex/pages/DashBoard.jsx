import { Outlet } from "react-router"
import { SearchPokemon } from "../components/SearchPokemon"
import { ListTypes } from "../components/TypesBarList"
import { MoreDetailsPokemon } from "../components/MoreDetailsPokemon"

export const DashBoard = () => {
  return (
    <>
      <header className="bg-zinc-900">
        <div 
          className="relative h-screen bg-cover bg-center border-b-4 rounded-b-[30%]"
          style={{backgroundImage: `url('https://i.pinimg.com/736x/69/26/f4/6926f4a4493a9491d91e38692ceea4c5.jpg')`}}
        >
          <img 
            className="absolute  top-5 left-1/2 transform -translate-x-1/2 aspect-auto w-[70%] "
            src="../../img/pokemon-logo.png" alt="logo-pokemon" 
          />
        </div>
      </header>
        <main className="bg-zinc-900 grid place-items-center gap-8 p-10">
            <SearchPokemon />
            <ListTypes />
            <Outlet/>
            <MoreDetailsPokemon />
        </main>
      <footer className="bg-black text-white text-center p-4">Hecho por César M.C.</footer>
    </>
  )
}