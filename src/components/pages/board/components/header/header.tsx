import { AddTask } from '@components/pages/board/components/header/components/add-task';
import { UpdateBoard } from '@components/pages/board/components/header/components/update-board';
import { Menu } from '@components/shared/menu/menu.tsx';
import { Typography } from '@components/ui/typography';
import { useGetParams } from '@hooks/useGetParams.ts';
import { useQueryGetBoard } from '@pages/board/hooks/useQueryGetBoard.ts';
import React from 'react';
import { Column } from '../../../../../generated/graphql.tsx';

export const Header = () => {
	const boardId = useGetParams('boardId');

	const { board, loading, statuses } = useQueryGetBoard(boardId);

	const title = board?.title;
	const disabledButton = !loading && !board?.Columns?.length;

	return (
		<div className="border-dar flex items-center justify-between border-b border-solid border-dark bg-gray-dark px-6 py-8">
			<Typography
				variant={'heading-xl'}
				className={'text-white'}
				showSkeleton={loading}
			>
				{title}
			</Typography>
			<div className="flex items-center gap-6">
				<AddTask
					disabledButton={disabledButton}
					loading={loading}
					statuses={statuses}
				/>

				{!loading && <Menu menuItems={[<UpdateBoard title={title} key={0} />]} />}
			</div>
		</div>
	);
};
