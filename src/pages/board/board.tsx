import { Header } from '@components/pages/board/components/header';
import { useGetParams } from '@hooks/useGetParams.ts';
import { useQueryGetBoard } from '@pages/board/hooks/useQueryGetBoard.ts';
import React from 'react';

export const Board = () => {
	return (
		<div>
			<Header />
		</div>
	);
};
