import { Typography } from '@components/ui/typography';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { cn } from '@utils/cn.ts';
import React, { ReactNode } from 'react';

type ContextMenuItemProps = {
	onClick?: () => void;
	content: ReactNode;
	contentClassName?: string;
	menuItemClassName?: string;
};

export const MenuItem = ({
	menuItemClassName,
	contentClassName,
	content,
	onClick,
}: ContextMenuItemProps) => {
	return (
		<DropdownMenu.Item
			className={cn(
				'group cursor-pointer rounded-lg p-2 outline-none transition hover:bg-gray-dark',
				menuItemClassName
			)}
			onClick={onClick}
		>
			<Typography
				variant={'body-l'}
				className={cn('text-gray-medium transition', contentClassName)}
			>
				{content}
			</Typography>
		</DropdownMenu.Item>
	);
};
