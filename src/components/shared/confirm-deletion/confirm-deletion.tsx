import { Button } from '@components/ui/button';
import { Dialog } from '@components/ui/dialog';
import { Typography } from '@components/ui/typography';
import React from 'react';

type ConfirmDeletionProps = {
	title: string;
	description: string;
	handleDelete: () => void;
	handleClose: () => void;
	open: boolean;
	loading?: boolean;
};

export const ConfirmDeletion = ({
	title,
	open,
	handleDelete,
	handleClose,
	description,
	loading,
}: ConfirmDeletionProps) => {
	return (
		<Dialog
			open={open}
			onClose={handleClose}
			title={
				<Typography className={'text-red'} variant={'heading-l'}>
					{title}
				</Typography>
			}
		>
			<>
				<Typography variant={'body-l'} className={'mt-6 text-gray-medium'}>
					{description}
				</Typography>
				<div className={'mt-6 flex gap-4'}>
					<Button
						onClick={handleDelete}
						color={'destructive'}
						disabled={loading}
					>
						Delete
					</Button>
					<Button onClick={handleClose} color={'secondary'} disabled={loading}>
						Cancel
					</Button>
				</div>
			</>
		</Dialog>
	);
};
