import { useMutation } from '@apollo/client';
import { MUTATION_REMOVE_COLUMN } from '@components/pages/board/components/columns/components/column-item/components/remove-column/gql/MUTATION_REMOVE_COLUMN.ts';
import { onError } from '@utils/onError.ts';
import {
	Column,
	MutationRemoveColumnArgs,
} from '../../../../../../../../../../generated/graphql.tsx';

type ResponseType = {
	removeColumn: Column;
};

export const useMutationRemoveColumn = () => {
	const [removeColumn, { loading }] = useMutation<
		ResponseType,
		MutationRemoveColumnArgs
	>(MUTATION_REMOVE_COLUMN, {
		onError,
	});

	return {
		removeColumn,
		loading,
	};
};
