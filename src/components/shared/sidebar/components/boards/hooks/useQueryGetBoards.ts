import { useQuery } from '@apollo/client';
import { QUERY_ALL_BOARDS } from '@components/shared/sidebar/components/boards/gql/QUERY_ALL_BOARDS.ts';
import { Board, QueryAllBoardsArgs } from '../../../../../../generated/graphql.tsx';

type ResponseType = {
	allBoards: Board[];
};

export const useQueryGetBoards = () => {
	const { data, loading } = useQuery<ResponseType, QueryAllBoardsArgs>(
		QUERY_ALL_BOARDS
	);

	return {
		boards: data?.allBoards || [],
		loading,
	};
};
