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
};

export const ConfirmDeletion = ({
	title,
	open,
	handleDelete,
	handleClose,
	description,
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
			description={
				<Typography variant={'body-l'} className={'mt-6 text-gray-medium'}>
					{description}
				</Typography>
			}
		>
			<div className={'mt-6 flex gap-4'}>
				<Button onClick={handleDelete} color={'destructive'}>
					Delete
				</Button>
				<Button onClick={handleClose} color={'secondary'}>
					Cancel
				</Button>
			</div>
		</Dialog>
	);
};