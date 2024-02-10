import { cn } from '@utils/cn.ts';
import { cva, VariantProps } from 'class-variance-authority';
import React, { ReactNode } from 'react';

const buttonVariants = cva(
	'text-white font-bold disabled:bg-gray-600 disabled:text-white/75 disabled:cursor-default outline-none w-full focus:ring-2 focus:ring-inset focus:ring-indigo-600 transition duration-200 cursor-pointer',
	{
		variants: {
			size: {
				s: 'rounded-[20px] py-2 px-16 text-[13px] leading-[23px]',
				l: 'rounded-[24px] py-4 px-15 text-[15px] leading-[19px]',
			},
			color: {
				primary: 'bg-purple hover:bg-purple-light',
				secondary: 'bg-[#635FC729]  text-purple hover:bg-[#635FC740]',
				destructive: 'bg-red hover:bg-red-light',
			},
		},
		defaultVariants: {
			size: 's',
			color: 'primary',
		},
	}
);

type ButtonProps = {
	children: ReactNode;
	isLoading?: boolean;
	disabled?: boolean;
	onClick?: () => void;
	className?: string;
	type?: 'button' | 'submit' | 'reset';
	showSkeleton?: boolean;
} & VariantProps<typeof buttonVariants>;

export const Button = ({
	children,
	color,
	className,
	disabled,
	isLoading,
	size,
	onClick,
	type = 'button',
	showSkeleton,
}: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled || isLoading}
			type={type}
			className={cn(
				buttonVariants({
					color,
					size,
					className,
				}),
				{ 'animate-pulse bg-slate-700 text-transparent': showSkeleton }
			)}
		>
			{children}
		</button>
	);
};
