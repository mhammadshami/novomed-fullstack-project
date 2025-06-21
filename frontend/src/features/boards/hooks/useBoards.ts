import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getBoards } from '../api/api'

const useBoards = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["boards"],
        queryFn: getBoards
    })

    return { data, isLoading, isError }
}

export default useBoards