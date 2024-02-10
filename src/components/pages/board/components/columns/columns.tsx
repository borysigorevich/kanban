import { ColumnItem } from '@components/pages/board/components/columns/components/column-item';
import { useQueryGetColumns } from '@components/pages/board/components/columns/hooks/useQueryGetColumns.ts';
import { useGetParams } from '@hooks/useGetParams.ts';
import React from 'react';
import { Task } from '../../../../../generated/graphql.tsx';

export const Columns = () => {
	const boardId = useGetParams('boardId');

	const { columns, loading } = useQueryGetColumns({
		filter: {
			board_id: boardId,
		},
	});

	if (loading) return null;

	return (
		<div className="flex gap-6 p-6">
			{columns.map((column) => (
				<ColumnItem
					key={column.id}
					title={column.title}
					tasks={column.Tasks as Task[]}
				/>
			))}
		</div>
	);
};
