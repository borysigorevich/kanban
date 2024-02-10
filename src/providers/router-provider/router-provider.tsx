import { MainLayout } from '@layouts/main-layout';
import { Board } from '@pages/board';
import { Routes } from '@providers/router-provider/routes.ts';
import { createBrowserRouter, RouterProvider as Provider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: Routes.ROOT,
		element: <MainLayout />,
		children: [
			{
				path: Routes.BOARD,
				element: <Board />,
			},
		],
	},
]);

export const RouterProvider = () => {
	return <Provider router={router} />;
};
