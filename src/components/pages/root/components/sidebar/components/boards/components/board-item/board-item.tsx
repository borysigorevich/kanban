import { Board } from '@assets/svg/board.tsx';
import { Typography } from '@components/ui/typography';
import { useGetParams } from '@hooks/useGetParams.ts';
import { cn } from '@utils/cn.ts';
import React from 'react';
import { useNavigate } from 'react-router-dom';

type BoardItemProps = {
	id: string;
	title: string;
};

export const BoardItem = ({ title, id }: BoardItemProps) => {
	const navigate = useNavigate();

	const boardId = useGetParams('boardId');

	const handleNavigate = () => {
		navigate(`/board/${id}`);
	};

	const isActive = boardId === id;

	return (
		<li
			className={cn(
				'group  flex cursor-pointer items-center gap-4 rounded-r-full py-4 pl-8 transition hover:bg-purple',
				{
					'bg-purple': isActive,
				}
			)}
			onClick={handleNavigate}
		>
			<Board
				className={cn({
					'fill-white': isActive,
				})}
			/>
			<Typography
				variant={'heading-m'}
				className={cn(
					'transition [text-transform:initial] group-hover:text-white',
					{
						'text-white': isActive,
					}
				)}
			>
				{title}
			</Typography>
		</li>
	);
};
