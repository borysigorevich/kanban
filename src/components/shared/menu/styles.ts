import { SxProps } from '@mui/material';

export const menu: SxProps = {
	p: '4px',

	'& > div:not(:last-child)': {
		position: 'relative',
		mb: 1,

		'&::after': {
			content: '""',
			position: 'absolute',
			bottom: '-4.5px',
			right: '0',
			height: '1px',
			width: '100%',
			backgroundColor: 'var(--gray)',
		},
	},
};
