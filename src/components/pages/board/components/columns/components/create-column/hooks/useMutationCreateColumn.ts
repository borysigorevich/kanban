import { useMutation } from '@apollo/client';
import { MUTATION_CREATE_COLUMN } from '@components/pages/board/components/columns/components/create-column/gql/MUTATION_CREATE_COLUMN.ts';
import { onError } from '@utils/onError.ts';
import {
	Column,
	MutationCreateColumnArgs,
} from '../../../../../../../../generated/graphql.tsx';

type ResponseType = {
	createColumn: Column;
};

export const useMutationCreateColumn = () => {
	const [createColumn, { loading }] = useMutation<
		ResponseType,
		MutationCreateColumnArgs
	>(MUTATION_CREATE_COLUMN, {
		onError,
	});

	return {
		createColumn,
		loading,
	};
};
