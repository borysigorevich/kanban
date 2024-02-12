import { Board } from '@assets/svg/board.tsx';
import { useMutationCreateBoard } from '@components/pages/root/components/sidebar/components/boards/components/create-board/hooks/useMutationCreateBoard.ts';
import { Button } from '@components/ui/button';
import { Dialog } from '@components/ui/dialog';
import { TextField } from '@components/ui/text-field';
import { Typography } from '@components/ui/typography';
import { useOpen } from '@hooks/useOpen.ts';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

type FormValues = {
	boardName: string;
};

export const CreateBoard = () => {
	const { isOpen, handleOpen, handleClose } = useOpen();

	const methods = useForm<FormValues>();

	const onCompleted = () => {
		toast.success('Board created successfully');
		handleClose();
		methods.reset();
	};

	const { createBoard, loading } = useMutationCreateBoard(onCompleted);

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		createBoard(data.boardName);
	};

	return (
		<div
			className="group flex cursor-pointer items-center gap-4 rounded-r-full py-4 pl-8 transition hover:bg-purple"
			onClick={handleOpen}
		>
			<Board className={'fill-purple'} />
			<Typography
				variant={'heading-m'}
				className={
					'text-purple transition [text-transform:initial] group-hover:text-white'
				}
			>
				+ Add New Board
			</Typography>
			<Dialog
				open={isOpen}
				onClose={handleClose}
				title={
					<Typography variant={'heading-l'} className={'text-white'}>
						Add New Board
					</Typography>
				}
			>
				<FormProvider {...methods}>
					<form className="mt-6" onSubmit={methods.handleSubmit(onSubmit)}>
						<TextField
							label={'Board Name'}
							name={'boardName'}
							placeholder={'e.g. Web Design'}
						/>

						<Button isLoading={loading} className={'mt-6'} type={'submit'}>
							Add New Board
						</Button>
					</form>
				</FormProvider>
			</Dialog>
		</div>
	);
};
