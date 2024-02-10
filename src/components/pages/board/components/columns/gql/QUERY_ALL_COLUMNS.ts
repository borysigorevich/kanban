import { gql } from '@apollo/client';

export const QUERY_ALL_COLUMNS = gql`
	query QueryAllColumns {
		allColumns {
			id
			title
			board_id
			Tasks {
				id
				title
				status
				column_id
				board_id
			}
		}
	}
`;
