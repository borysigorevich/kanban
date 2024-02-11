import { SxProps } from '@mui/material';

export const item: SxProps = {
	minWidth: '80px',
	p: 1,
	px: '12px',
	borderRadius: '4px',
	transition: 'background-color 0.2s ease-in-out',
	cursor: 'pointer',
	'&:hover': {
		backgroundColor: 'rgba(0, 0, 0, 0.04)',
	},
};
