import { Header } from '@components/pages/board/components/header';
import { useGetParams } from '@hooks/useGetParams.ts';
import { useQueryGetBoard } from '@pages/board/hooks/useQueryGetBoard.ts';
import React from 'react';

export const Board = () => {
	const boardId = useGetParams('boardId');

	const { data, loading } = useQueryGetBoard(boardId);

	const title = loading ? 'Loading...' : (data?.title as string);

	return (
		<div>
			<Header title={title} />
		</div>
	);
};
