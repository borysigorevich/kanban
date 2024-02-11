import { useMutationCreateTask } from '@components/pages/board/components/header/components/add-task/hooks/useMutationCreateTask.ts';
import { Button } from '@components/ui/button';
import { Dialog } from '@components/ui/dialog';
import { OptionType, Select } from '@components/ui/select';
import { TextField } from '@components/ui/text-field';
import { Typography } from '@components/ui/typography';
import { useGetParams } from '@hooks/useGetParams.ts';
import { useOpen } from '@hooks/useOpen.ts';
import React, { useEffect } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

type AddTaskProps = {
	loading: boolean;
	disabledButton: boolean;
	statuses?: {
		value?: string;
		label?: string;
	}[];
};

type FormValues = {
	title: string;
	description: string;
	status: string;
};

export const AddTask = ({ disabledButton, loading, statuses }: AddTaskProps) => {
	const boardId = useGetParams('boardId');

	const { isOpen, handleOpen, handleClose } = useOpen();

	const methods = useForm<FormValues>({
		defaultValues: {
			title: '',
			description: '',
			status: '',
		},
	});

	const onCompleted = () => {
		handleClose();
		toast.success('Task created successfully');
		methods.reset();
	};

	const { createTask, fetching } = useMutationCreateTask(onCompleted);

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		const statusLabel =
			statuses?.find((status) => status.value === data.status)?.label ||
			statuses?.[0]?.label ||
			'doing';
		createTask({
			title: data.title,
			description: data.description,
			status: statusLabel,
			board_id: boardId,
			column_id: data.status,
		});
	};

	useEffect(() => {
		methods.setValue('status', statuses?.[0]?.value || '');
	}, [statuses]);

	return (
		<>
			<Button
				className="w-fit px-6"
				disabled={disabledButton}
				showSkeleton={loading}
				onClick={handleOpen}
			>
				+ Add New Task
			</Button>
			<Dialog
				open={isOpen}
				onClose={handleClose}
				title={
					<Typography variant={'heading-l'} className={'text-white'}>
						Add New Task
					</Typography>
				}
			>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} className="mt-6">
						<TextField
							name={'title'}
							label={'Title'}
							placeholder={'e.g Build UI for search'}
							rules={{
								required: {
									value: true,
									message: 'Description is required',
								},
							}}
						/>

						<TextField
							multiline
							wrapperClassName={'mt-6'}
							name={'description'}
							label={'Description'}
							placeholder={
								'e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.'
							}
						/>

						<Select
							wrapperClassName="mt-6"
							name={'status'}
							label={'Status'}
							options={statuses as OptionType[]}
						/>

						<Button type={'submit'} className="mt-6" disabled={fetching}>
							Create Task
						</Button>
					</form>
				</FormProvider>
			</Dialog>
		</>
	);
};
