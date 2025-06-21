import { useParams } from 'next/navigation'
import React from 'react'

const useGetBoardIdFromURL = () => {
    const params = useParams();

    const boardId = parseInt(params.boardId as string);

    return boardId;
}

export default useGetBoardIdFromURL