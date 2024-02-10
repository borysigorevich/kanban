import { cn } from '@utils/cn.ts';
import { useId } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

type TextFieldProps = {
	placeholder?: string;
	name: string;
	rules?: RegisterOptions;
	label?: string;
	wrapperClassName?: string;
	inputClassName?: string;
	multiline?: boolean;
};

export const TextField = ({
	placeholder,
	name,
	label,
	wrapperClassName,
	multiline,
	rules,
}: TextFieldProps) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	const helperText = errors[name]?.message;

	const isError = Boolean(errors[name]);

	const id = useId();

	const inputStyles = cn(
		`block w-full rounded-md border-0 bg-transparent px-4 py-2 text-white shadow-sm outline-none ring-1 ring-inset 
					ring-white/25 transition duration-200 placeholder:text-white/25 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm
						sm:leading-6
					`,
		{ 'ring-red': isError, 'min-h-28': multiline }
	);

	return (
		<div className={wrapperClassName}>
			<label htmlFor={id} className="text-[12px] font-bold text-white">
				{label}
			</label>
			<div className="relative mt-2 flex w-full items-center">
				{multiline ? (
					<textarea
						id={id}
						placeholder={placeholder}
						className={inputStyles}
						{...register(name, rules)}
					/>
				) : (
					<input
						id={id}
						type="text"
						placeholder={placeholder}
						className={inputStyles}
						{...register(name, rules)}
					/>
				)}

				{helperText && (
					<div className="absolute right-3.5 px-0.5 text-xs text-red backdrop-blur">
						<>{helperText}</>
					</div>
				)}
			</div>
		</div>
	);
};
