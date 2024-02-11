import { gql } from '@apollo/client';

export const MUTATION_CREATE_COLUMN = gql`
	mutation MutationCreateColumn($title: String!, $board_id: ID!) {
		createColumn(title: $title, board_id: $board_id) {
			id
			title
		}
	}
`;
