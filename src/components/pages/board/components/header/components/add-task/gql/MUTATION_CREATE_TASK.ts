import { gql } from '@apollo/client';

export const MUTATION_CREATE_TASK = gql`
	mutation CreateTask(
		$title: String!
		$description: String!
		$column_id: ID!
		$board_id: ID!
		$status: String!
	) {
		createTask(
			title: $title
			description: $description
			column_id: $column_id
			board_id: $board_id
			status: $status
		) {
			id
			title
			description
			status
		}
	}
`;
