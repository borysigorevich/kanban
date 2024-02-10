import { Typography } from '@components/ui/typography';
import React from 'react';

export const MainLayout = () => {
	return (
		<>
			<div className={'text-red-light'}>MainLayout</div>
			<Typography component={'h2'} variant={'body-m'}>
				hello
			</Typography>
		</>
	);
};
