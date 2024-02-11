import { RemoveTask } from '@components/pages/board/components/columns/components/column-item/components/task-card/components/remove-task';
import { UpdateTask } from '@components/pages/board/components/columns/components/column-item/components/task-card/components/update-task';
import { Menu } from '@components/shared/menu';
import { Dialog } from '@components/ui/dialog';
import { Typography } from '@components/ui/typography';
import { useOpen } from '@hooks/useOpen.ts';
import React from 'react';
import { Statuses } from '../../../../../../../../../../types';
import { Task } from '../../../../../../../../../generated/graphql.tsx';

type TaskCardProps = {
	statuses?: Statuses[];
} & Task;

export const TaskCard = (props: TaskCardProps) => {
	const { isOpen, handleOpen, handleClose } = useOpen();

	return (
		<>
			<div
				className={'group cursor-pointer rounded-lg bg-gray-dark px-4 py-6'}
				onClick={handleOpen}
			>
				<Typography
					variant="heading-m"
					className="text-white group-hover:text-purple"
				>
					{props.title}
				</Typography>
			</div>

			<Dialog
				open={isOpen}
				onClose={handleClose}
				title={
					<Typography variant={'heading-l'} className={'text-white'}>
						{props.title}
					</Typography>
				}
			>
				<div className={'absolute right-8 top-8'}>
					<Menu
						menuItems={[
							<UpdateTask key={0} {...props} />,
							<RemoveTask key={1} title={props.title} id={props.id} />,
						]}
					/>
				</div>

				<Typography variant={'body-l'} className={'medium-gray mt-6'}>
					{props.description}
				</Typography>
				<div className="mt-6 flex gap-1">
					<Typography variant={'heading-l'} className={'text-white'}>
						Current Status:{' '}
					</Typography>
					<Typography variant={'heading-l'} className={'text-gray-medium'}>
						{props.status}
					</Typography>
				</div>
			</Dialog>
		</>
	);
};
