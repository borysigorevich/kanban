import { ColumnItem } from '@components/pages/board/components/columns/components/column-item';
import { CreateColumn } from '@components/pages/board/components/columns/components/create-column';
import { useGetParams } from '@hooks/useGetParams.ts';
import { useQueryGetBoard } from '@pages/board/hooks/useQueryGetBoard.ts';
import { cn } from '@utils/cn.ts';
import React from 'react';
import { Task } from '../../../../../generated/graphql.tsx';

export const Columns = () => {
	const boardId = useGetParams('boardId');

	const { loading, columns, statuses } = useQueryGetBoard(boardId);

	if (loading) return null;

	const hasColumns = columns.length;

	return (
		<div className={cn('relative flex flex-1 gap-6 p-6')}>
			{hasColumns ? (
				columns.map((column) => (
					<ColumnItem
						key={column!.id}
						title={column!.title}
						tasks={column!.Tasks as Task[]}
						statuses={statuses}
					/>
				))
			) : (
				<CreateColumn />
			)}
		</div>
	);
};
