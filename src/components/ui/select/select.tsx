import { ChevronDownIcon } from '@radix-ui/react-icons';
import * as UiSelect from '@radix-ui/react-select';
import { cn } from '@utils/cn.ts';
import React, { ComponentRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

type UiSelectItemProps = {
	children: React.ReactNode;
	className?: string;
	value: string;
};

const UiSelectItem = React.forwardRef<ComponentRef<'div'>, UiSelectItemProps>(
	({ children, className, ...props }, forwardedRef) => {
		return (
			<UiSelect.Item
				className={cn(
					'relative flex h-[25px] cursor-pointer items-center rounded p-2 text-[13px] leading-[23px] text-gray-medium transition duration-200 hover:bg-gray-light  hover:text-gray-dark data-[state=checked]:bg-gray-light data-[state=checked]:text-gray-dark data-[highlighted]:outline-none',
					className
				)}
				{...props}
			>
				<UiSelect.ItemText>{children}</UiSelect.ItemText>
			</UiSelect.Item>
		);
	}
);

type SelectProps = {
	name: string;
};

export const Select = ({ name }: SelectProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<UiSelect.Root onValueChange={field.onChange} value={field.value}>
					<UiSelect.Trigger
						className="flex w-[200px] items-center justify-between rounded bg-transparent px-4 py-2 text-[13px] leading-[23px] text-white outline-none ring-1 ring-inset
					ring-white/25 transition duration-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 data-[state=open]:ring-purple"
					>
						<UiSelect.Value placeholder="UiSelect a fruit…" />
						<UiSelect.Icon>
							<ChevronDownIcon />
						</UiSelect.Icon>
					</UiSelect.Trigger>
					<UiSelect.Portal>
						<UiSelect.Content
							className="w-[200px] overflow-hidden rounded-md bg-gray-very-dark p-1"
							align={'center'}
							side={'bottom'}
							position={'popper'}
							sideOffset={8}
						>
							<UiSelect.Viewport className={'flex flex-col gap-0.5'}>
								<UiSelectItem value="apple">Apple</UiSelectItem>
								<UiSelectItem value="banana">Banana</UiSelectItem>
								<UiSelectItem value="blueberry">Blueberry</UiSelectItem>
								<UiSelectItem value="grapes">Grapes</UiSelectItem>
								<UiSelectItem value="pineapple">Pineapple</UiSelectItem>
							</UiSelect.Viewport>
						</UiSelect.Content>
					</UiSelect.Portal>
				</UiSelect.Root>
			)}
		/>
	);
};
