import { Button } from '@components/ui/button';
import { TextField } from '@components/ui/text-field';
import { Typography } from '@components/ui/typography';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

export const MainLayout = () => {
	const methods = useForm();
	return (
		<FormProvider {...methods}>
			<div className={'h-full bg-dark-gray'}>
				<div
					className={
						'bg-purple bg-opacity-[16%] text-sm font-bold text-red-light'
					}
				>
					MainLayout
				</div>
				<Typography component={'h2'} variant={'body-m'}>
					hello
				</Typography>
				<Button>hello</Button>
				<Button color={'destructive'}>hello</Button>
				<Button color={'secondary'}>hello</Button>

				<TextField name={'test'} placeholder={'test'} />
			</div>
		</FormProvider>
	);
};
