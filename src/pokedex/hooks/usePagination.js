import { useState } from "react"

export const usePagination = (count, limit, setOffset) => {

    const [currentPage, setCurrentPage] = useState(1)
      
    const maxPages = Math.ceil(count/limit) 

    const nextPage = () => {
        if(currentPage >= maxPages) return
        const nextPage = currentPage + 1
        setCurrentPage(nextPage)
        setOffset(nextPage * limit - limit)
    }   

    const beforePage = () =>  {
        if(currentPage === 1) return
        const beforePage = currentPage - 1
        setCurrentPage(beforePage)
        setOffset(beforePage * limit - limit)
    }

    return {
        currentPage,
        setCurrentPage,
        nextPage,
        beforePage
    }
}