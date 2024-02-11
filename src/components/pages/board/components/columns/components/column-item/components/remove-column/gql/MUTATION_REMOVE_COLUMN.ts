import { gql } from '@apollo/client';

export const MUTATION_REMOVE_COLUMN = gql`
	mutation MutationRemoveColumn($id: ID!) {
		removeColumn(id: $id) {
			id
		}
	}
`;
