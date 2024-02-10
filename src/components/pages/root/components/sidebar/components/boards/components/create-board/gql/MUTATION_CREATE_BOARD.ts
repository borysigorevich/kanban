import { gql } from '@apollo/client';

export const MUTATION_CREATE_BOARD = gql`
	mutation CreateBoard($title: String!) {
		createBoard(title: $title) {
			id
			title
		}
	}
`;
