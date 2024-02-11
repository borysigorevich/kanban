import { TaskCard } from '@components/pages/board/components/columns/components/column-item/components/task-card';
import { Typography } from '@components/ui/typography';
import React from 'react';
import { Task } from '../../../../../../../generated/graphql.tsx';

type ColumnItemProps = {
	title: string;
	tasks?: Task[];
};

export const ColumnItem = ({ title, tasks }: ColumnItemProps) => {
	const tasksQuantity = tasks?.length;

	return (
		<div className="min-w-[280px]">
			<Typography variant={'heading-s'}>
				{title} ({tasksQuantity})
			</Typography>

			<div className="mt-6 flex flex-col gap-5">
				{tasks?.map((task) => <TaskCard key={task.id} {...task} />)}
			</div>
		</div>
	);
};