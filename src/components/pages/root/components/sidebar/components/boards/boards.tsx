import { BoardItem } from '@components/pages/root/components/sidebar/components/boards/components/board-item';
import { CreateBoard } from '@components/pages/root/components/sidebar/components/boards/components/create-board';
import { useQueryGetBoards } from '@components/pages/root/components/sidebar/components/boards/hooks/useQueryGetBoards.ts';
import { Typography } from '@components/ui/typography';
import React from 'react';

export const Boards = () => {
	const { boards, loading } = useQueryGetBoards();

	if (loading) return null;

	return (
		<div className="mt-14 h-full">
			<Typography className="pl-8 uppercase tracking-wide">
				All boards ({boards.length})
			</Typography>
			<ul className="mt-5 flex h-[calc(100svh-114px-20px-19px-32px)] flex-col gap-1 overflow-y-auto pr-8">
				{boards?.map((board) => <BoardItem key={board.id} {...board} />)}
				<CreateBoard />
			</ul>
		</div>
	);
};
