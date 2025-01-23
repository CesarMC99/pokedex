import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { usePagination } from "../hooks/usePagination"

export const Pagination = ({details, setOffset}) => {

    const { search } = useParams()
    const { type } = useParams()

    const { count, limit } = details

    const {currentPage, setCurrentPage, nextPage, beforePage} = usePagination(count, limit, setOffset)

    useEffect(() => {
        setCurrentPage(1)
        setOffset(0)
    },[search, type])

    return (
        <div className="flex justify-center items-center bg-fuchsia-700 border-2 border-white rounded-lg">
            <button className="text-white font-semibold w-[60px] h-[40px]" onClick={beforePage}>{"<"}</button>
            <p className="text-white font-semibold w-[50px] h-[40px] content-center text-center">{currentPage}</p>
            <button className="text-white font-semibold w-[60px] h-[40px]" onClick={nextPage}>{">"}</button>
        </div>
    )
}