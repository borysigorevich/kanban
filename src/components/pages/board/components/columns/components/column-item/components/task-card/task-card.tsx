import { RemoveTask } from '@components/pages/board/components/columns/components/column-item/components/task-card/components/remove-task';
import { UpdateTask } from '@components/pages/board/components/columns/components/column-item/components/task-card/components/update-task';
import { Menu } from '@components/shared/menu';
import { Dialog } from '@components/ui/dialog';
import { Typography } from '@components/ui/typography';
import { useOpen } from '@hooks/useOpen.ts';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Statuses } from '../../../../../../../../../../types';
import { Task } from '../../../../../../../../../generated/graphql.tsx';

type TaskCardProps = {
	statuses?: Statuses[];
	index: number;
} & Task;

export const TaskCard = (props: TaskCardProps) => {
	const { isOpen, handleOpen, handleClose } = useOpen();

	return (
		<>
			<Draggable draggableId={props.id} index={props.index}>
				{(provided) => (
					<div
						className={
							'group cursor-pointer rounded-lg bg-gray-dark px-4 py-6'
						}
						onClick={handleOpen}
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
					>
						<Typography
							variant="heading-m"
							className="text-white group-hover:text-purple"
						>
							{props.title}
						</Typography>
					</div>
				)}
			</Draggable>

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
