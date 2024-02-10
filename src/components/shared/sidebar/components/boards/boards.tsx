import { BoardItem } from '@components/shared/sidebar/components/boards/components/board-item';
import { CreateBoard } from '@components/shared/sidebar/components/boards/components/create-board';
import { useGetBoards } from '@components/shared/sidebar/components/boards/hooks/useGetBoards.ts';
import { Typography } from '@components/ui/typography';
import React from 'react';

export const Boards = () => {
	const { boards, loading } = useGetBoards();

	if (loading) return null;

	return (
		<div className="mt-14">
			<Typography className="uppercase tracking-wide">
				All boards ({boards.length})
				<ul className="mt-5 flex flex-col gap-1">
					{boards?.map((board) => <BoardItem key={board.id} {...board} />)}
					<CreateBoard />
				</ul>
			</Typography>
		</div>
	);
};
