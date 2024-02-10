import { BoardItem } from '@components/shared/sidebar/components/boards/components/board-item';
import { CreateBoard } from '@components/shared/sidebar/components/boards/components/create-board';
import { useQueryGetBoards } from '@components/shared/sidebar/components/boards/hooks/useQueryGetBoards.ts';
import { Typography } from '@components/ui/typography';
import React from 'react';

export const Boards = () => {
	const { boards, loading } = useQueryGetBoards();

	if (loading) return null;

	return (
		<div className="mt-14">
			<Typography className="uppercase tracking-wide">
				All boards ({boards.length})
			</Typography>
			<ul className="mt-5 flex flex-col gap-1">
				{boards?.map((board) => <BoardItem key={board.id} {...board} />)}
				<CreateBoard />
			</ul>
		</div>
	);
};
