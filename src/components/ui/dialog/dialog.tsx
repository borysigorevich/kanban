import * as UiDialog from '@radix-ui/react-dialog';
import React, { ReactNode } from 'react';

type DialogProps = {
	open: boolean;
	onClose: () => void;
	title: ReactNode;
	description?: ReactNode;
	children: ReactNode;
};

export const Dialog = ({ open, onClose, children, description, title }: DialogProps) => {
	return (
		<UiDialog.Root open={open} onOpenChange={onClose}>
			<UiDialog.Portal>
				<UiDialog.Overlay className="z-100 fixed inset-0 bg-black/50 backdrop-blur transition" />
				<UiDialog.Content className="min-auto fixed left-1/2 top-1/2 w-full max-w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray-dark p-8">
					<UiDialog.Title>{title}</UiDialog.Title>
					<UiDialog.Description>{description}</UiDialog.Description>
					{children}
				</UiDialog.Content>
			</UiDialog.Portal>
		</UiDialog.Root>
	);
};
