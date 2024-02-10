import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ApolloClientProvider } from '@providers/apollo-client-provider';
import { RouterProvider } from '@providers/router-provider';
import { Toaster } from 'sonner';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ApolloClientProvider>
			<RouterProvider />
			<Toaster richColors />
		</ApolloClientProvider>
	</React.StrictMode>
);
