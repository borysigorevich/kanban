import { useMutationRemoveColumn } from '@components/pages/board/components/columns/components/column-item/components/remove-column/hooks/useMutationRemoveColumn.ts';
import { ConfirmDeletion } from '@components/shared/confirm-deletion';
import { useHandleCloseMenu } from '@components/shared/menu';
import { MenuItem } from '@components/shared/menu/components/menu-item';
import { useOpen } from '@hooks/useOpen.ts';
import { QUERY_BOARD } from '@pages/board/gql/QUERY_BOARD.ts';
import React from 'react';
import { toast } from 'sonner';

type RemoveColumnProps = {
	title: string;
	id: string;
};

export const RemoveColumn = ({ title, id }: RemoveColumnProps) => {
	const { isOpen, handleOpen, handleClose } = useOpen();
	const closeDialogWithMenu = useHandleCloseMenu(handleClose);

	const { removeColumn, loading } = useMutationRemoveColumn();

	const handleDelete = () => {
		removeColumn({
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
				content={'Remove Column'}
				contentClassName={'text-red group-hover:text-white'}
				menuItemClassName={'hover:bg-[#ef4444]'}
			/>

			<ConfirmDeletion
				open={isOpen}
				handleClose={closeDialogWithMenu}
				handleDelete={handleDelete}
				loading={loading}
				title={'Delete this task?'}
				description={`Are you sure you want to delete the '${title}' column? This action cannot be reversed.`}
			/>
		</>
	);
};
