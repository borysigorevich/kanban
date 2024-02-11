import { useMutationUpdateBoard } from '@components/pages/board/components/header/components/update-board/hooks/useMutationUpdateBoard.ts';
import { MenuItem } from '@components/shared/menu/components/menu-item/menu-item.tsx';
import { useHandleCloseMenu } from '@components/shared/menu/menu.tsx';
import { Button } from '@components/ui/button';
import { Dialog } from '@components/ui/dialog';
import { TextField } from '@components/ui/text-field';
import { Typography } from '@components/ui/typography';
import { useGetParams } from '@hooks/useGetParams.ts';
import { useOpen } from '@hooks/useOpen.ts';
import { QUERY_BOARD } from '@pages/board/gql/QUERY_BOARD.ts';
import { onError } from '@utils/onError.ts';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

type FormValues = {
	title: string;
};

type EditBoardProps = {
	title?: string;
};

export const UpdateBoard = ({ title }: EditBoardProps) => {
	const { isOpen, handleOpen, handleClose } = useOpen();
	const closeDialogWithMenu = useHandleCloseMenu(handleClose);

	const boardId = useGetParams('boardId');

	const { updateBoard, loading } = useMutationUpdateBoard();

	const methods = useForm<FormValues>({
		defaultValues: {
			title,
		},
	});

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		updateBoard({
			variables: {
				title: data.title,
				id: boardId,
			},
			onCompleted: () => {
				closeDialogWithMenu();
				toast.success('Board updated successfully');
			},
			refetchQueries: [QUERY_BOARD],
			onError,
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
						Edit Board
					</Typography>
				}
			>
				<FormProvider {...methods}>
					<form className="mt-6" onSubmit={methods.handleSubmit(onSubmit)}>
						<TextField name={'title'} label={'Board Name'} />

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
