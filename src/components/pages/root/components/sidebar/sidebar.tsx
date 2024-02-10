import { Logo } from '@assets/svg';
import { Boards } from '@components/pages/root/components/sidebar/components/boards';
import React from 'react';

export const Sidebar = () => {
	return (
		<div className="h-full w-[300px] border-r border-solid border-dark bg-gray-dark p-8">
			<Logo />
			<Boards />
		</div>
	);
};
