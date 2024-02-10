import { useState, useCallback } from 'react';

export const useOpen = (value: boolean = false) => {
	const [isOpen, setOpen] = useState(value);

	const handleOpen = useCallback(() => setOpen(true), []);
	const handleClose = useCallback(() => setOpen(false), []);
	const handleToggle = useCallback(() => setOpen((state) => !state), []);

	return {
		isOpen,
		handleOpen,
		handleClose,
		handleToggle,
	};
};
