import { Board } from '@assets/svg/board.tsx';
import { Typography } from '@components/ui/typography';
import React from 'react';

type BoardItemProps = {
	id: string;
	title: string;
};

export const BoardItem = ({ title, id }: BoardItemProps) => {
	return (
		<li className="group -ml-8 flex cursor-pointer items-center gap-4 rounded-r-full py-4 pl-8 transition hover:bg-purple">
			<Board />
			<Typography
				variant={'heading-m'}
				className={'transition [text-transform:initial] group-hover:text-white'}
			>
				{title}
			</Typography>
		</li>
	);
};
