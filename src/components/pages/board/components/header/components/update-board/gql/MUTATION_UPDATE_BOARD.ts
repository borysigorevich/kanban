import { gql } from '@apollo/client';

export const MUTATION_UPDATE_BOARD = gql`
	mutation MutationUpdateBoard($id: ID!, $title: String!) {
		updateBoard(id: $id, title: $title) {
			id
			title
		}
	}
`;
