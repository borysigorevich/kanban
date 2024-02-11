import { useMutationUpdateTask } from '@components/pages/board/components/columns/components/column-item/components/task-card/components/update-task/hooks/useMutationUpdateTask.ts';
import { useHandleCloseMenu } from '@components/shared/menu';
import { MenuItem } from '@components/shared/menu/components/menu-item';
import { Button } from '@components/ui/button';
import { Dialog } from '@components/ui/dialog';
import { OptionType, Select } from '@components/ui/select';
import { TextField } from '@components/ui/text-field';
import { Typography } from '@components/ui/typography';
import { useGetParams } from '@hooks/useGetParams.ts';
import { useOpen } from '@hooks/useOpen.ts';
import { QUERY_BOARD } from '@pages/board/gql/QUERY_BOARD.ts';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Statuses } from '../../../../../../../../../../../../types';
import { Task } from '../../../../../../../../../../../generated/graphql.tsx';

type FormValues = {
	title: string;
	description: string;
	status: string;
};

type UpdateTaskProps = {
	statuses?: Statuses[];
} & Task;

export const UpdateTask = ({
	statuses,
	status,
	description,
	title,
	id,
}: UpdateTaskProps) => {
	const { isOpen, handleOpen, handleClose } = useOpen();
	const closeDialogWithMenu = useHandleCloseMenu(handleClose);
	const boardId = useGetParams('boardId');

	const defaultStatus = statuses?.find((s) => s.label === status)?.value;

	console.log({ statuses, status });

	const { updateTask, loading } = useMutationUpdateTask();

	const methods = useForm<FormValues>({
		defaultValues: {
			title,
			description,
			status: defaultStatus,
		},
	});

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		const statusLabel = statuses?.find((s) => s.value === data.status)?.label;

		updateTask({
			variables: {
				id,
				title: data.title,
				description: data.description,
				column_id: data.status,
				board_id: boardId,
				status: statusLabel,
			},
			onCompleted: () => {
				closeDialogWithMenu();
				toast.success('Task updated successfully');
			},
			refetchQueries: [QUERY_BOARD],
		});
	};

	return (
		<>
			<MenuItem onClick={handleOpen} content={'Edit Board'} />

			<Dialog
				open={isOpen}
				onClose={closeDialogWithMenu}
				title={
					<Typography variant={'heading-l'} className={'text-white'}>
						Edit Task
					</Typography>
				}
			>
				<FormProvider {...methods}>
					<form className="mt-6" onSubmit={methods.handleSubmit(onSubmit)}>
						<TextField name={'title'} label={'title'} />

						<TextField multiline name={'description'} label={'Description'} />

						<Select
							name={'status'}
							wrapperClassName={'mt-6'}
							label={'Status'}
							options={statuses as OptionType[]}
						/>

						<Button
							className={'mt-6'}
							type={'submit'}
							disabled={loading || !methods.formState.isDirty}
						>
							Save Changes
						</Button>
					</form>
				</FormProvider>
			</Dialog>
		</>
	);
};
