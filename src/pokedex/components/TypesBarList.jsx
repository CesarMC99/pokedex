import { Link } from "react-router"
import { useGetIconsType } from "../hooks/useGetIconsType"

export const ListTypes = () => {

    const { typesIcons } = useGetIconsType()
    const { data, isLoading } = typesIcons

    const filterData = data?.filter(icon => (icon.name !== "unknown" && icon.name !== "stellar"))

    return (
        <div className="bg-black p-3 border-2 border-white rounded-[30px]">
            <ul className="flex items-center gap-2">
                {
                    filterData?.map(icon => (
                        <li key={icon.name}>
                            <Link to={`/pokemon/type/${icon.name}`}>
                                <div 
                                    className="bg-left bg-cover w-[34px] h-[34px] rounded-[100%]"
                                    style={{backgroundImage: `url('${icon.img}')`}}
                                />
                                {/* <img src={icon.img} alt={icon.name}/> */}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}