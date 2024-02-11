import { MenuItem } from '@components/shared/menu/components/menu-item/menu-item.tsx';
import { Dialog } from '@components/ui/dialog';
import { Typography } from '@components/ui/typography';
import { useOpen } from '@hooks/useOpen.ts';
import React from 'react';

export const EditBoard = () => {
	const { isOpen, handleOpen, handleClose } = useOpen();

	return (
		<>
			<MenuItem onClick={handleOpen} content={'Test'} />

			<Dialog
				open={isOpen}
				onClose={handleClose}
				title={
					<Typography variant={'heading-l'} className={'text-white'}>
						Edit Board
					</Typography>
				}
			>
				test
			</Dialog>
		</>
	);
};
