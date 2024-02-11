import { useMutation } from '@apollo/client';
import { MUTATION_UPDATE_TASK } from '@components/pages/board/components/columns/components/column-item/components/task-card/components/update-task/gql/MUTATION_UPDATE_TASK.ts';
import { onError } from '@utils/onError.ts';
import {
	MutationUpdateTaskArgs,
	Task,
} from '../../../../../../../../../../../../generated/graphql.tsx';

type ResponseType = {
	updateTask: Task;
};

export const useMutationUpdateTask = () => {
	const [updateTask, { loading }] = useMutation<ResponseType, MutationUpdateTaskArgs>(
		MUTATION_UPDATE_TASK,
		{
			onError,
		}
	);

	return {
		updateTask,
		loading,
	};
};
