import { toast } from 'sonner';

export const onError = (error: any) => {
	const errorMessage =
		error?.networkError?.result?.errors?.[0].message ||
		'Something went wrong! Please try again later.';
	toast.error(errorMessage);
};
