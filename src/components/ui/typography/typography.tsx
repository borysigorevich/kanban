import { cn } from '@utils/cn.ts';
import { cva, VariantProps } from 'class-variance-authority';
import { createElement, ReactNode } from 'react';

const typographyVariants = cva('text-gray-medium font-bold', {
	variants: {
		variant: {
			'body-m': 'text-[12px] leading-[15px]',
			'body-l': 'font-medium text-[13px] leading-[23px]',
			'heading-s': 'text-[12px] leading-[25px]',
			'heading-m': 'text-[15px] leading-[19px]',
			'heading-l': 'text-[18px] leading-[23px]',
			'heading-xl': 'text-[24px] leading-[30px]',
		},
	},
	defaultVariants: {
		variant: 'heading-m',
	},
});

type TypographyProps = {
	component?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	children: ReactNode;
	className?: string;
	showSkeleton?: boolean;
} & VariantProps<typeof typographyVariants>;

export const Typography = ({
	component = 'p',
	children,
	variant,
	className,
	showSkeleton,
}: TypographyProps) => {
	if (showSkeleton) {
		return <div className={'h-10 w-24 animate-pulse rounded bg-slate-700'} />;
	}

	return createElement(
		component,
		{
			className: cn(typographyVariants({ variant, className })),
		},
		children
	);
};
