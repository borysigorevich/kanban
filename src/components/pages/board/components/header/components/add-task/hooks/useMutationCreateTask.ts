import { useMutation } from '@apollo/client';
import { MUTATION_CREATE_TASK } from '@components/pages/board/components/header/components/add-task/gql/MUTATION_CREATE_TASK.ts';
import { QUERY_ALL_BOARDS } from '@components/pages/root/components/sidebar/components/boards/gql/QUERY_ALL_BOARDS.ts';
import { QUERY_BOARD } from '@pages/board/gql/QUERY_BOARD.ts';
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
		});
		return response.data?.createTask;
	};

	return {
		createTask,
		fetching: loading,
	};
};
