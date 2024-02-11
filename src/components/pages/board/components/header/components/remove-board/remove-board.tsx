import { useMutationRemoveBoard } from '@components/pages/board/components/header/components/remove-board/hooks/useMutationRemoveBoard.ts';
import { QUERY_ALL_BOARDS } from '@components/pages/root/components/sidebar/components/boards/gql/QUERY_ALL_BOARDS.ts';
import { ConfirmDeletion } from '@components/shared/confirm-deletion';
import { MenuItem } from '@components/shared/menu/components/menu-item/menu-item.tsx';
import { useHandleCloseMenu } from '@components/shared/menu/menu.tsx';
import { useGetParams } from '@hooks/useGetParams.ts';
import { useOpen } from '@hooks/useOpen.ts';
import { onError } from '@utils/onError.ts';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

type RemoveBoardProps = {
	title: string;
};

export const RemoveBoard = ({ title }: RemoveBoardProps) => {
	const { isOpen, handleOpen, handleClose } = useOpen();
	const closeDialogWithMenu = useHandleCloseMenu(handleClose);
	const boardId = useGetParams('boardId');
	const navigate = useNavigate();

	const { removeBoard, loading } = useMutationRemoveBoard();

	const handleDelete = () => {
		removeBoard({
			variables: {
				id: boardId,
			},
			onCompleted: () => {
				toast.success('Board deleted successfully');
				closeDialogWithMenu();
				navigate('/');
			},
			refetchQueries: [QUERY_ALL_BOARDS],
			onError,
		});
	};

	return (
		<>
			<MenuItem
				onClick={handleOpen}
				content={'Delete Board'}
				contentClassName={'text-red group-hover:text-white'}
				menuItemClassName={'hover:bg-[#ef4444]'}
			/>

			<ConfirmDeletion
				open={isOpen}
				handleClose={closeDialogWithMenu}
				handleDelete={handleDelete}
				loading={loading}
				title={'Delete this board?'}
				description={`Are you sure you want to delete the ‘${title}’ board? This action will remove all columns and tasks and cannot be reversed.`}
			/>
		</>
	);
};
