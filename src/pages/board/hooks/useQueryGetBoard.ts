import { useQuery } from '@apollo/client';
import { QUERY_BOARD } from '@pages/board/gql/QUERY_BOARD.ts';
import { useMemo } from 'react';
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

	const statuses = useMemo(() => {
		return data?.Board?.Columns?.map((column) => ({
			value: column?.id,
			label: column?.title,
		}));
	}, [data]);

	const columns = data?.Board?.Columns || [];

	return {
		statuses,
		columns,
		board: data?.Board,
		loading,
	};
};
