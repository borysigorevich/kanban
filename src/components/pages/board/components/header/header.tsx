import { Button } from '@components/ui/button';
import { Typography } from '@components/ui/typography';
import { useGetParams } from '@hooks/useGetParams.ts';
import { useQueryGetBoard } from '@pages/board/hooks/useQueryGetBoard.ts';
import React from 'react';

export const Header = () => {
	const boardId = useGetParams('boardId');

	const { data, loading } = useQueryGetBoard(boardId);

	const title = data?.title;

	return (
		<div className="border-dar flex items-center justify-between border-b border-solid border-dark bg-gray-dark px-6 py-8">
			<Typography
				variant={'heading-xl'}
				className={'text-white'}
				showSkeleton={loading}
			>
				{title}
			</Typography>
			<Button className="w-fit px-6" disabled={false} showSkeleton={loading}>
				+ Add New Task
			</Button>
		</div>
	);
};
