import { gql } from '@apollo/client';

export const MUTATION_REMOVE_BOARD = gql`
	mutation MutationDeleteBoard($id: ID!) {
		removeBoard(id: $id) {
			id
		}
	}
`;
