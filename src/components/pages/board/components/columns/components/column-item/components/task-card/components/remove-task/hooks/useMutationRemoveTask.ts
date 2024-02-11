import { useMutation } from '@apollo/client';
import { MUTATION_REMOVE_TASK } from '@components/pages/board/components/columns/components/column-item/components/task-card/components/remove-task/gql/MUTATION_REMOVE_TASK.ts';
import { onError } from '@utils/onError.ts';
import {
	MutationRemoveTaskArgs,
	Task,
} from '../../../../../../../../../../../../generated/graphql.tsx';

type ResponseType = {
	removeTask: Task;
};

export const useMutationRemoveTask = () => {
	const [removeTask, { loading }] = useMutation<ResponseType, MutationRemoveTaskArgs>(
		MUTATION_REMOVE_TASK,
		{
			onError,
		}
	);

	return {
		removeTask,
		loading,
	};
};
