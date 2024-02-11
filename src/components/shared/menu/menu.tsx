import { useOpen } from '@hooks/useOpen.ts';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { DotsVerticalIcon } from '@radix-ui/react-icons';
import { createContext, MouseEvent, ReactElement, useContext, useState } from 'react';

type ContextMenuProps = {
	menuItems?: ReactElement[];
	disabled?: boolean;
	triggerButton?: (onClick: (event: MouseEvent<HTMLElement>) => void) => ReactElement;
	stopPropagation?: boolean;
};

const Context = createContext({
	handleCloseMenu: () => {},
});

export const Menu = ({
	menuItems,
	disabled,
	triggerButton,
	stopPropagation,
}: ContextMenuProps) => {
	const { isOpen, handleOpen, handleClose } = useOpen();

	const handleOpenMenu = (event: MouseEvent<HTMLElement>) => {
		stopPropagation && event.stopPropagation();
		if (disabled) return;
		handleOpen();
	};

	const handleCloseMenu = () => {
		handleClose();
	};

	return (
		<>
			<Context.Provider value={{ handleCloseMenu }}>
				<DropdownMenu.Root open={isOpen}>
					<DropdownMenu.Trigger asChild onClick={handleOpenMenu}>
						{triggerButton?.(handleOpenMenu) || (
							<DotsVerticalIcon
								className={'w-5 cursor-pointer text-gray-medium'}
								width={24}
								height={24}
							/>
						)}
					</DropdownMenu.Trigger>

					<DropdownMenu.Portal>
						<DropdownMenu.Content
							onInteractOutside={handleCloseMenu}
							onEscapeKeyDown={handleCloseMenu}
							className="min-w-40 rounded-lg bg-gray-very-dark p-1 shadow-sm shadow-gray-medium"
							alignOffset={8}
							sideOffset={10}
							align={'center'}
						>
							{menuItems}
						</DropdownMenu.Content>
					</DropdownMenu.Portal>
				</DropdownMenu.Root>
			</Context.Provider>
		</>
	);
};

export const useHandleCloseMenu = (callback?: VoidFunction) => {
	const context = useContext(Context);

	return () => {
		context?.handleCloseMenu();
		callback && callback();
	};
};
