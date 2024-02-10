import { gql } from '@apollo/client';

export const QUERY_ALL_BOARDS = gql`
	query AllBoards {
		allBoards {
			id
			title
			description
		}
	}
`;
