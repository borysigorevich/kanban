import { useMutation } from '@apollo/client';
import { MUTATION_CREATE_BOARD } from '@components/pages/root/components/sidebar/components/boards/components/create-board/gql/MUTATION_CREATE_BOARD.ts';
import { QUERY_ALL_BOARDS } from '@components/pages/root/components/sidebar/components/boards/gql/QUERY_ALL_BOARDS.ts';
import { onError } from '@utils/onError.ts';
import { Board, BoardInput } from '../../../../../../../../../../generated/graphql.tsx';

type ResponseType = {
	board: Board;
};

export const useMutationCreateBoard = (onCompleted: VoidFunction) => {
	const [mutate, { data, loading }] = useMutation<ResponseType, BoardInput>(
		MUTATION_CREATE_BOARD,
		{
			refetchQueries: [QUERY_ALL_BOARDS],
			onCompleted,
			onError,
		}
	);

	const createBoard = (title: string) => {
		mutate({
			variables: { title },
		});
	};

	return {
		createBoard,
		loading,
		board: data?.board,
	};
};
