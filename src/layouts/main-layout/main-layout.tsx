import { Sidebar } from '@components/shared/sidebar';
import React from 'react';
import { useForm } from 'react-hook-form';

export const MainLayout = () => {
	return (
		<div className="grid h-full grid-cols-[auto_1fr]">
			<Sidebar />
		</div>
	);
};
