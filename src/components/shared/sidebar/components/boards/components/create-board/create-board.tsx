import { Board } from '@assets/svg/board.tsx';
import { Typography } from '@components/ui/typography';
import React from 'react';

export const CreateBoard = () => {
	return (
		<div className="group -ml-8 flex cursor-pointer items-center gap-4 rounded-r-full py-4 pl-8 transition hover:bg-purple">
			<Board className={'fill-purple'} />
			<Typography
				variant={'heading-m'}
				className={
					'text-purple transition [text-transform:initial] group-hover:text-white'
				}
			>
				+ Create New Board
			</Typography>
		</div>
	);
};
