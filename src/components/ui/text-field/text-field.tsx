import { cn } from '@utils/cn.ts';
import { RegisterOptions, useFormContext } from 'react-hook-form';

type TextFieldProps = {
	placeholder?: string;
	name: string;
	rules?: RegisterOptions;
};

export const TextField = ({ placeholder, name }: TextFieldProps) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	const helperText = errors[name]?.message || 'some error';

	const isError = Boolean(errors[name]) || true;

	return (
		<div className="relative flex w-fit items-center">
			<input
				type="text"
				placeholder={placeholder}
				className={cn(
					`text-white bg-transparent ring-white/25 focus:ring-indigo-600 placeholder:text-white/25 block rounded-md border-0 px-4 
					py-2 shadow-sm outline-none ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm
						sm:leading-6
					`,
					{ 'ring-red': isError }
				)}
				{...register(name)}
			/>
			{helperText && (
				<div className="absolute right-3.5 px-0.5 text-xs text-red backdrop-blur">
					<>{helperText}</>
				</div>
			)}
		</div>
	);
};
