import { ColumnItem } from '@components/pages/board/components/columns/components/column-item';
import { CreateColumn } from '@components/pages/board/components/columns/components/create-column';
import { StrictModeDroppable } from '@components/shared/strict-mode-droppable';
import { useGetParams } from '@hooks/useGetParams.ts';
import { useQueryGetBoard } from '@pages/board/hooks/useQueryGetBoard.ts';
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Task } from '../../../../../generated/graphql.tsx';

export const Columns = () => {
	const boardId = useGetParams('boardId');

	const { loading, columns, statuses } = useQueryGetBoard(boardId);

	if (loading) return null;

	const hasColumns = columns.length;

	return (
		<div className={'overflow-hidden'}>
			{hasColumns ? (
				<DragDropContext onDragEnd={() => {}}>
					<StrictModeDroppable droppableId="droppable-list">
						{(provided) => (
							<div
								ref={provided.innerRef}
								{...provided.droppableProps}
								className={'flex h-full gap-6 overflow-x-auto p-6'}
							>
								{columns.map((column) => (
									<ColumnItem
										key={column!.id}
										id={column!.id}
										title={column!.title}
										tasks={column!.Tasks as Task[]}
										statuses={statuses}
									/>
								))}
								<CreateColumn isColumn />
							</div>
						)}
					</StrictModeDroppable>
				</DragDropContext>
			) : (
				<CreateColumn />
			)}
		</div>
	);
};
