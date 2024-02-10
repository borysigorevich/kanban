import { Button } from '@components/ui/button';
import { Typography } from '@components/ui/typography';
import React from 'react';

export const MainLayout = () => {
	return (
		<>
			<div
				className={'bg-purple bg-opacity-[16%] text-sm font-bold text-red-light'}
			>
				MainLayout
			</div>
			<Typography component={'h2'} variant={'body-m'}>
				hello
			</Typography>
			<Button>hello</Button>
			<Button color={'destructive'}>hello</Button>
			<Button color={'secondary'}>hello</Button>
		</>
	);
};
