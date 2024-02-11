import { RemoveColumn } from '@components/pages/board/components/columns/components/column-item/components/remove-column';
import { TaskCard } from '@components/pages/board/components/columns/components/column-item/components/task-card';
import { Menu } from '@components/shared/menu';
import { Typography } from '@components/ui/typography';
import React from 'react';
import { Statuses } from '../../../../../../../../types';
import { Task } from '../../../../../../../generated/graphql.tsx';

type ColumnItemProps = {
	title: string;
	tasks?: Task[];
	statuses?: Statuses[];
	id: string;
};

export const ColumnItem = ({ title, tasks, statuses, id }: ColumnItemProps) => {
	const tasksQuantity = tasks?.length;

	return (
		<div className="min-w-[280px]">
			<div className={'flex items-center justify-between'}>
				<Typography variant={'heading-s'}>
					{title} ({tasksQuantity})
				</Typography>
				<Menu menuItems={[<RemoveColumn key={0} id={id} title={title} />]} />
			</div>

			<div className="mt-6 flex flex-col gap-5">
				{tasks?.map((task) => (
					<TaskCard key={task.id} {...task} statuses={statuses} />
				))}
			</div>
		</div>
	);
};
