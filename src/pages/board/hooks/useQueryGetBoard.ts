import { useQuery } from '@apollo/client';
import { QUERY_BOARD } from '@pages/board/gql/QUERY_BOARD.ts';
import { useEffect, useMemo, useState } from 'react';
import { OnDragEndResponder } from 'react-beautiful-dnd';
import { Board, Column, QueryBoardArgs } from '../../../generated/graphql.tsx';

type ResponseType = {
	Board: Board;
};

export const useQueryGetBoard = (boardId: string) => {
	const { data, loading } = useQuery<ResponseType, QueryBoardArgs>(QUERY_BOARD, {
		variables: {
			id: boardId,
		},
	});

	const statuses = useMemo(() => {
		return data?.Board?.Columns?.map((column) => ({
			value: column?.id,
			label: column?.title,
		}));
	}, [data]);

	const columns = data?.Board?.Columns || [];

	const [columnsWidthOrderedTasks, setColumnsWidthOrderedTasks] = useState<Column[]>(
		[]
	);

	const handleOnDragEnd: OnDragEndResponder = (result) => {
		if (!result.destination) return;

		const destinationDroppableId = result.destination.droppableId;
		const sourceDroppableId = result.source.droppableId;
		const propertyId = result.draggableId;
		const newIndex = result.destination.index;
		const sourceIndex = result.source.index;

		if (destinationDroppableId === sourceDroppableId && sourceIndex === newIndex)
			return;

		setColumnsWidthOrderedTasks((columns) => {
			debugger;
			const columnsCopy = JSON.parse(JSON.stringify(columns)) as Column[];
			const sourceColumn = columnsCopy.find(
				(column) => column.id === sourceDroppableId
			);
			const sourceTask = sourceColumn?.Tasks?.find(
				(task) => task?.id === propertyId
			);
			const sourceTaskIndex = sourceColumn?.Tasks?.findIndex(
				(task) => task?.id === propertyId
			);

			sourceColumn?.Tasks?.splice(sourceTaskIndex!, 1);

			const destinationColumn = columnsCopy.find(
				(column) => column.id === destinationDroppableId
			);
			destinationColumn?.Tasks?.splice(newIndex, 0, sourceTask!);

			return columnsCopy;
		});
	};

	useEffect(() => {
		setColumnsWidthOrderedTasks(columns as Column[]);
	}, [columns]);

	return {
		statuses,
		columns,
		board: data?.Board,
		loading,
		columnsWidthOrderedTasks,
		handleOnDragEnd,
	};
};
