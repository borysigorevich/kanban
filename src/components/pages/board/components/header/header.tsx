import { Button } from '@components/ui/button';
import { Typography } from '@components/ui/typography';
import React from 'react';

type HeaderProps = {
	title: string;
	disableAddButton?: boolean;
};

export const Header = ({ title, disableAddButton }: HeaderProps) => {
	return (
		<div className="border-dar flex items-center justify-between border-b border-solid border-dark bg-gray-dark px-6 py-8">
			<Typography variant={'heading-xl'} className={'text-white'}>
				{title}
			</Typography>
			<Button className="w-fit px-6" disabled={disableAddButton}>
				+ Add New Task
			</Button>
		</div>
	);
};
