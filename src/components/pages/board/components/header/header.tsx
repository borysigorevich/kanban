import { AddTask } from '@components/pages/board/components/header/components/add-task';
import { Button } from '@components/ui/button';
import { Typography } from '@components/ui/typography';
import { useGetParams } from '@hooks/useGetParams.ts';
import { useQueryGetBoard } from '@pages/board/hooks/useQueryGetBoard.ts';
import React from 'react';

export const Header = () => {
	const boardId = useGetParams('boardId');

	const { board, loading, statuses } = useQueryGetBoard(boardId);

	const title = board?.title;
	const disabledButton = !loading && !board?.Columns?.length;

	console.log({ board, statuses });

	return (
		<div className="border-dar flex items-center justify-between border-b border-solid border-dark bg-gray-dark px-6 py-8">
			<Typography
				variant={'heading-xl'}
				className={'text-white'}
				showSkeleton={loading}
			>
				{title}
			</Typography>
			<AddTask
				disabledButton={disabledButton}
				loading={loading}
				statuses={statuses}
			/>
		</div>
	);
};
