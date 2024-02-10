import { MainLayout } from '@layouts/main-layout';
import { Routes } from '@providers/router-provider/routes.ts';
import { createBrowserRouter, RouterProvider as Provider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: Routes.ROOT,
		element: <MainLayout />,
	},
]);

export const RouterProvider = () => {
	return <Provider router={router} />;
};
