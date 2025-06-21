import { useQuery } from '@tanstack/react-query'
import { getBoardColumnsWithTasks } from '../api/api'

const useBoardColumnsWithTasks = (boardId: number) => {
 return useQuery({
    queryKey: ["columns-with-tasks", boardId],
    queryFn: getBoardColumnsWithTasks,
    enabled: !!boardId
 })
}

export default useBoardColumnsWithTasks