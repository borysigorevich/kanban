import React, { useEffect, useState } from 'react';
import { Droppable, DroppableProps } from 'react-beautiful-dnd';

export const StrictModeDroppable = ({ children, ...rest }: DroppableProps) => {
	const [enabled, setEnabled] = useState(import.meta.env.MODE === 'production');

	useEffect(() => {
		const animation = requestAnimationFrame(() => setEnabled(true));

		return () => {
			cancelAnimationFrame(animation);
			setEnabled(false);
		};
	}, []);

	if (!enabled) {
		return null;
	}

	return <Droppable {...rest}>{children}</Droppable>;
};
