import { useParams } from 'react-router-dom';

export const useGetParams = (paramKey: 'boardId') => {
	return useParams()[paramKey] as string;
};
