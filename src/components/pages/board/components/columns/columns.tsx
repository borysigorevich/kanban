import { useQueryGetColumns } from '@components/pages/board/components/columns/hooks/useQueryGetColumns.ts';
import { useGetParams } from '@hooks/useGetParams.ts';
import React from 'react';

export const Columns = () => {
	const boardId = useGetParams('boardId');

	const { columns, loading } = useQueryGetColumns({
		filter: {
			board_id: boardId,
		},
	});

	console.log({ columns });

	return <div className="p-6"></div>;
};
