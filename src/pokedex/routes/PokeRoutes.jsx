import { Route, Routes } from "react-router"
import { Home } from "../pages/Home"
import { DashBoard } from "../pages/DashBoard"
import { PokeSearch } from "../pages/PokeSearch"
import { PokeType } from "../pages/PokeType"

export const PokeRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<DashBoard />}>
            <Route index element={<Home />}/>
            <Route path="pokemon/:search" element={<PokeSearch />}/>
            <Route path="pokemon/type/:type" element={<PokeType />}/>

            <Route path="*" element={<Home />}/>
        </Route>
    </Routes>
  )
}