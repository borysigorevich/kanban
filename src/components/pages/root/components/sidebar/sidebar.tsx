import { Logo } from '@assets/svg';
import { Boards } from '@components/pages/root/components/sidebar/components/boards';
import React from 'react';

export const Sidebar = () => {
	return (
		<div className="h-full w-[300px] border-r border-solid border-dark bg-gray-dark py-8">
			<div className="pl-8">
				<Logo />
			</div>
			<Boards />
		</div>
	);
};
