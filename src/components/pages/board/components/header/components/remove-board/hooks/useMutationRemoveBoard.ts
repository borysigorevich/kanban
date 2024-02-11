import { useMutation } from '@apollo/client';
import { MUTATION_REMOVE_BOARD } from '@components/pages/board/components/header/components/remove-board/gql/MUTATION_REMOVE_BOARD.ts';
import { MutationRemoveBoardArgs } from '../../../../../../../../generated/graphql.tsx';

type ResponseType = {
	removeBoard: {
		id: string;
	};
};

export const useMutationRemoveBoard = () => {
	const [removeBoard, { loading }] = useMutation<ResponseType, MutationRemoveBoardArgs>(
		MUTATION_REMOVE_BOARD
	);

	return {
		removeBoard,
		loading,
	};
};
