import { Sidebar } from '@components/shared/sidebar';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
	return (
		<div className="grid h-full grid-cols-[auto_1fr]">
			<Sidebar />
			<Outlet />
		</div>
	);
};
