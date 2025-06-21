import useBoardColumnsWithTasks from '@/features/columns/hooks/useBoardColumnsWithTasks'
import { BoardColumn } from '@/features/columns/types/types';
import useGetBoardIdFromURL from '@/hooks/useGetBoardIdFromURL';
import React from 'react'

const useStatusOptions = () => {
    const boardId = useGetBoardIdFromURL();
    const { data: columns, isLoading, isError } = useBoardColumnsWithTasks(boardId);

    const options = columns?.map((col: BoardColumn) => ({
        label: col.name,
        value: col.id
    })) || [];

    return { options, isLoading, isError }
}

export default useStatusOptions