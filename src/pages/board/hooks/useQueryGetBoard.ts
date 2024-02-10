import { useQuery } from '@apollo/client';
import { QUERY_BOARD } from '@pages/board/gql/QUERY_BOARD.ts';
import { Board, QueryBoardArgs } from '../../../generated/graphql.tsx';

type ResponseType = {
	Board: Board;
};

export const useQueryGetBoard = (boardId: string) => {
	const { data, loading } = useQuery<ResponseType, QueryBoardArgs>(QUERY_BOARD, {
		variables: {
			id: boardId,
		},
	});

	return {
		data: data?.Board,
		loading,
	};
};
