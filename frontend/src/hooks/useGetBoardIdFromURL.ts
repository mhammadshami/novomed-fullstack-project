import { useSearchParams } from 'next/navigation'

const useGetBoardIdFromURL = () => {
    const searchParams = useSearchParams();

    const boardId = parseInt(searchParams.get("id") as string);

    return boardId;
}

export default useGetBoardIdFromURL