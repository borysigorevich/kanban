import { useMutationCreateColumn } from '@components/pages/board/components/columns/components/create-column/hooks/useMutationCreateColumn.ts';
import { Button } from '@components/ui/button';
import { Dialog } from '@components/ui/dialog';
import { TextField } from '@components/ui/text-field';
import { Typography } from '@components/ui/typography';
import { useGetParams } from '@hooks/useGetParams.ts';
import { useOpen } from '@hooks/useOpen.ts';
import { QUERY_BOARD } from '@pages/board/gql/QUERY_BOARD.ts';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

type FormValues = {
	title: string;
};

export const CreateColumn = () => {
	const boardId = useGetParams('boardId');

	const { isOpen, handleOpen, handleClose } = useOpen();

	const { createColumn, loading } = useMutationCreateColumn();

	const methods = useForm<FormValues>();

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		createColumn({
			variables: {
				title: data.title,
				board_id: boardId,
			},
			onCompleted: () => {
				handleClose();
				toast.success('Column created successfully');
				methods.reset();
			},
			refetchQueries: [QUERY_BOARD],
		});

		handleClose();
	};

	return (
		<div className={'grid h-full flex-1 place-content-center '}>
			<Typography variant={'heading-l'}>
				This board is empty. Create a new column to get started.
			</Typography>

			<Button className={'mx-auto mt-8 w-[174px]'} size={'l'} onClick={handleOpen}>
				+ Add New Column
			</Button>

			<Dialog
				open={isOpen}
				onClose={handleClose}
				title={
					<Typography variant={'heading-l'} className={'text-white'}>
						Create Column
					</Typography>
				}
			>
				<FormProvider {...methods}>
					<form className="mt-6" onSubmit={methods.handleSubmit(onSubmit)}>
						<TextField
							name={'title'}
							label={'Column Name'}
							placeholder={'e.g. Todo'}
						/>

						<Button className={'mt-6'} isLoading={loading} type={'submit'}>
							Create Column
						</Button>
					</form>
				</FormProvider>
			</Dialog>
		</div>
	);
};
