import { CheckIcon } from '@radix-ui/react-icons';
import * as UiCheckbox from '@radix-ui/react-checkbox';
import { cn } from '@utils/cn.ts';
import React, { useId } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

type CheckboxProps = {
	label: string;
	name: string;
};

export const Checkbox = ({ name, label }: CheckboxProps) => {
	const { control } = useFormContext();

	const id = useId();

	return (
		<div className="flex w-full max-w-[350px] items-center rounded bg-gray-very-dark p-3 transition duration-200 hover:bg-purple/25">
			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<UiCheckbox.Root
						id={id}
						checked={field.value}
						className={cn(
							'flex h-4 w-4  items-center justify-center rounded-sm border-red  bg-gray-dark shadow-[0_0_0_1px_rgba(130,143,164,26%)] outline-none',
							{ 'bg-purple shadow-[unset]': field.value }
						)}
						onCheckedChange={field.onChange}
						{...field}
					>
						<UiCheckbox.Indicator className="text-white">
							<CheckIcon />
						</UiCheckbox.Indicator>
					</UiCheckbox.Root>
				)}
			/>
			<label
				className="pl-[15px] text-[12px] font-bold leading-none text-white"
				htmlFor={id}
			>
				{label}
			</label>
		</div>
	);
};
