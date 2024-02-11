import { Columns } from '@components/pages/board/components/columns';
import { Header } from '@components/pages/board/components/header';
import React from 'react';

export const Board = () => {
	return (
		<div className={'grid grid-rows-[auto_1fr]'}>
			<Header />
			<Columns />
		</div>
	);
};
