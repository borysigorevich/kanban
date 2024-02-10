import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ReactNode } from 'react';

const client = new ApolloClient({
	uri: 'http://localhost:3000/graphql',
	cache: new InMemoryCache(),
});

type ApolloClientProviderProps = {
	children: ReactNode;
};

export const ApolloClientProvider = ({ children }: ApolloClientProviderProps) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
