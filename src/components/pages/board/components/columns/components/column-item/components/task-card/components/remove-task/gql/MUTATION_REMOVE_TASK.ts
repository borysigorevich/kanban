import { gql } from '@apollo/client';

export const MUTATION_REMOVE_TASK = gql`
	mutation MutationRemoveTask($id: ID!) {
		removeTask(id: $id) {
			id
		}
	}
`;
