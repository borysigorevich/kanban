import { Button } from '@components/ui/button';
import { Checkbox } from '@components/ui/checkbox';
import { Select } from '@components/ui/select';
import { TextField } from '@components/ui/text-field';
import { Typography } from '@components/ui/typography';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

export const MainLayout = () => {
	const methods = useForm({
		defaultValues: {
			test: 'test',
			select: '',
			checkbox: false,
		},
	});

	return (
		<FormProvider {...methods}>
			<div className={'bg-gray-dark h-full p-10'}>
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

				<Select name={'select'} />
				<Checkbox name={'checkbox'} label={'label'} />
			</div>
		</FormProvider>
	);
};
