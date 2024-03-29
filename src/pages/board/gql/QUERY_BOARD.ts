import { gql } from '@apollo/client';

export const QUERY_BOARD = gql`
	query GetBoard($id: ID!) {
		Board(id: $id) {
			title
			Columns {
				id
				title
				Tasks {
					id
					title
					description
					status
				}
			}
		}
	}
`;
