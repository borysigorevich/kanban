import { useQuery } from '@apollo/client';
import { QUERY_ALL_COLUMNS } from '@components/pages/board/components/columns/gql/QUERY_ALL_COLUMNS.ts';
import { Column, QueryAllColumnsArgs } from '../../../../../../generated/graphql.tsx';

type ResponseType = {
	allColumns: Column[];
};

export const useQueryGetColumns = (variables: QueryAllColumnsArgs) => {
	const { data, loading } = useQuery<ResponseType, QueryAllColumnsArgs>(
		QUERY_ALL_COLUMNS,
		{
			variables,
		}
	);

	return {
		columns: data?.allColumns || [],
		loading,
	};
};
