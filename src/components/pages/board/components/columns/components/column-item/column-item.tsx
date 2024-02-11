import { RemoveColumn } from '@components/pages/board/components/columns/components/column-item/components/remove-column';
import { TaskCard } from '@components/pages/board/components/columns/components/column-item/components/task-card';
import { Menu } from '@components/shared/menu';
import { StrictModeDroppable } from '@components/shared/strict-mode-droppable';
import { Typography } from '@components/ui/typography';
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Statuses } from '../../../../../../../../types';
import { Task } from '../../../../../../../generated/graphql.tsx';

type ColumnItemProps = {
	title: string;
	tasks?: Task[];
	statuses?: Statuses[];
	columnId: string;
};

export const ColumnItem = ({ title, tasks, statuses, columnId }: ColumnItemProps) => {
	const tasksQuantity = tasks?.length;

	return (
		<div className="grid min-w-[280px] grid-rows-[auto_1fr]">
			<div className={'flex items-center justify-between'}>
				<Typography variant={'heading-s'}>
					{title} ({tasksQuantity})
				</Typography>
				<Menu
					menuItems={[<RemoveColumn key={0} id={columnId} title={title} />]}
				/>
			</div>

			<StrictModeDroppable droppableId={columnId}>
				{(provided) => (
					<div
						className="mt-6 flex flex-1 flex-col gap-5"
						ref={provided.innerRef}
						{...provided.droppableProps}
					>
						{tasks?.map((task, index) => (
							<TaskCard
								key={task.id}
								{...task}
								statuses={statuses}
								index={index}
							/>
						))}
					</div>
				)}
			</StrictModeDroppable>
		</div>
	);
};
