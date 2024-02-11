import { useMutationRemoveTask } from '@components/pages/board/components/columns/components/column-item/components/task-card/components/remove-task/hooks/useMutationRemoveTask.ts';
import { ConfirmDeletion } from '@components/shared/confirm-deletion';
import { useHandleCloseMenu } from '@components/shared/menu';
import { MenuItem } from '@components/shared/menu/components/menu-item';
import { useOpen } from '@hooks/useOpen.ts';
import { QUERY_BOARD } from '@pages/board/gql/QUERY_BOARD.ts';
import React from 'react';
import { toast } from 'sonner';

type RemoveCardProps = {
	id: string;
	title: string;
};

export const RemoveTask = ({ title, id }: RemoveCardProps) => {
	const { isOpen, handleOpen, handleClose } = useOpen();
	const closeDialogWithMenu = useHandleCloseMenu(handleClose);

	const { removeTask, loading } = useMutationRemoveTask();

	const handleDelete = () => {
		removeTask({
			variables: {
				id,
			},
			onCompleted: () => {
				closeDialogWithMenu();
				toast.success('Task deleted successfully');
			},
			refetchQueries: [QUERY_BOARD],
		});
	};

	return (
		<>
			<MenuItem
				onClick={handleOpen}
				content={'Remove Card'}
				contentClassName={'text-red group-hover:text-white'}
				menuItemClassName={'hover:bg-[#ef4444]'}
			/>

			<ConfirmDeletion
				open={isOpen}
				handleClose={closeDialogWithMenu}
				handleDelete={handleDelete}
				loading={loading}
				title={'Delete this task?'}
				description={`Are you sure you want to delete the '${title}' task? This action cannot be reversed.`}
			/>
		</>
	);
};
