import { cn } from '@utils/cn.ts';
import { cva, VariantProps } from 'class-variance-authority';
import React, { ReactNode } from 'react';

const buttonVariants = cva(
	'text-white font-bold outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 transition duration-200',
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
} & VariantProps<typeof buttonVariants>;

export const Button = ({
	children,
	color,
	className,
	disabled,
	isLoading,
	size,
	onClick,
}: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled || isLoading}
			className={cn(
				buttonVariants({
					color,
					size,
					className,
				})
			)}
		>
			{children}
		</button>
	);
};
