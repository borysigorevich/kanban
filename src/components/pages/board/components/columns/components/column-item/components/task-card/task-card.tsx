import { Typography } from '@components/ui/typography';
import React from 'react';
import { Task } from '../../../../../../../../../generated/graphql.tsx';

type TaskCardProps = {} & Task;

export const TaskCard = ({
	title,
	description,
	column_id,
	status,
	board_id,
	id,
}: TaskCardProps) => {
	return (
		<div className={'group cursor-pointer rounded-lg bg-gray-dark px-4 py-6'}>
			<Typography
				variant="heading-m"
				className="text-white group-hover:text-purple"
			>
				{title}
			</Typography>
		</div>
	);
};
