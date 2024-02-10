import { ChevronDownIcon } from '@radix-ui/react-icons';
import * as UiSelect from '@radix-ui/react-select';
import { cn } from '@utils/cn.ts';
import React, { ComponentRef, useId, useLayoutEffect, useRef, useState } from 'react';
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

export type OptionType = {
	label: string;
	value: string;
};

type SelectProps = {
	name: string;
	options: OptionType[];
	label?: string;
	className?: string;
	wrapperClassName?: string;
	placeholder?: string;
};

export const Select = ({
	name,
	options,
	label,
	className,
	wrapperClassName,
	placeholder,
}: SelectProps) => {
	const { control } = useFormContext();

	const id = useId();

	const [contentWidth, setContentWidth] = useState<number | null>(null);
	const triggerButtonRef = useRef<ComponentRef<'button'>>(null);

	useLayoutEffect(() => {
		if (triggerButtonRef.current) {
			setContentWidth(triggerButtonRef.current.offsetWidth);
		}
	}, []);

	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<UiSelect.Root onValueChange={field.onChange} value={field.value}>
					<div className={wrapperClassName}>
						{label && (
							<label
								htmlFor={id}
								className="text-[12px] font-bold text-white"
							>
								{label}
							</label>
						)}
						<UiSelect.Trigger
							id={id}
							ref={triggerButtonRef}
							className={cn(
								'mt-1 flex w-full items-center justify-between rounded bg-transparent px-4 py-2 text-[13px] leading-[23px] text-white outline-none ring-1 ring-inset ring-white/25 transition duration-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 data-[state=open]:ring-purple',
								className
							)}
						>
							<UiSelect.Value
								placeholder={placeholder}
								className={'text-white/25'}
							/>
							<UiSelect.Icon>
								<ChevronDownIcon />
							</UiSelect.Icon>
						</UiSelect.Trigger>
						<UiSelect.Portal>
							<UiSelect.Content
								className="w-full overflow-hidden rounded-md bg-gray-very-dark p-1"
								align={'center'}
								side={'bottom'}
								position={'popper'}
								sideOffset={8}
								style={{ width: contentWidth || 100 }}
							>
								<UiSelect.Viewport className={'flex flex-col gap-0.5'}>
									{options.map((option) => (
										<UiSelectItem
											key={option.value}
											value={option.value}
										>
											{option.label}
										</UiSelectItem>
									))}
								</UiSelect.Viewport>
							</UiSelect.Content>
						</UiSelect.Portal>
					</div>
				</UiSelect.Root>
			)}
		/>
	);
};
