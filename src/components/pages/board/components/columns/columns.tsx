import { ColumnItem } from '@components/pages/board/components/columns/components/column-item';
import { useGetParams } from '@hooks/useGetParams.ts';
import { useQueryGetBoard } from '@pages/board/hooks/useQueryGetBoard.ts';
import React from 'react';
import { Task } from '../../../../../generated/graphql.tsx';

export const Columns = () => {
	const boardId = useGetParams('boardId');

	const { loading, columns, statuses } = useQueryGetBoard(boardId);

	if (loading) return null;

	return (
		<div className="flex gap-6 p-6">
			{columns.map((column) => (
				<ColumnItem
					key={column!.id}
					title={column!.title}
					tasks={column!.Tasks as Task[]}
					statuses={statuses}
				/>
			))}
		</div>
	);
};
