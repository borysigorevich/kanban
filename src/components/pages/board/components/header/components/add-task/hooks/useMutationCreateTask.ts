import { useMutation } from '@apollo/client';
import { MUTATION_CREATE_TASK } from '@components/pages/board/components/header/components/add-task/gql/MUTATION_CREATE_TASK.ts';
import { QUERY_BOARD } from '@pages/board/gql/QUERY_BOARD.ts';
import { onError } from '@utils/onError.ts';
import {
	MutationCreateTaskArgs,
	Task,
} from '../../../../../../../../generated/graphql.tsx';

type ResponseType = {
	createTask: Task;
};

export const useMutationCreateTask = (onCompleted: VoidFunction) => {
	const [mutation, { data, loading }] = useMutation<
		ResponseType,
		MutationCreateTaskArgs
	>(MUTATION_CREATE_TASK, {
		onCompleted,
		refetchQueries: [QUERY_BOARD],
	});

	const createTask = async ({
		title,
		description,
		column_id,
		board_id,
		status,
	}: MutationCreateTaskArgs) => {
		const response = await mutation({
			variables: {
				title,
				description,
				column_id,
				board_id,
				status,
			},
			onError,
		});
		return response.data?.createTask;
	};

	return {
		createTask,
		fetching: loading,
	};
};
