import { gql } from '@apollo/client';

export const MUTATION_UPDATE_TASK = gql`
	mutation MutationUpdateTask(
		$id: ID!
		$title: String!
		$description: String!
		$column_id: ID!
		$board_id: ID!
		$status: String!
	) {
		updateTask(
			id: $id
			title: $title
			description: $description
			column_id: $column_id
			board_id: $board_id
			status: $status
		) {
			id
			title
			description
		}
	}
`;
