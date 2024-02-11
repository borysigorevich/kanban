import { useMutation } from '@apollo/client';
import { MUTATION_UPDATE_BOARD } from '@components/pages/board/components/header/components/update-board/gql/MUTATION_UPDATE_BOARD.ts';
import { onError } from '@utils/onError.ts';
import {
	Board,
	MutationUpdateBoardArgs,
} from '../../../../../../../../generated/graphql.tsx';

type ResponseType = {
	updateBoard: Board;
};

export const useMutationUpdateBoard = () => {
	const [updateBoard, { loading }] = useMutation<ResponseType, MutationUpdateBoardArgs>(
		MUTATION_UPDATE_BOARD
	);

	return {
		updateBoard,
		loading,
	};
};
