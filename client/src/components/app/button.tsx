import clsx from 'clsx'

interface ButtonProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
	return (
		<button
			{...props}
			className={clsx(
				'text-sm capitalize cursor-pointer font-semibold py-2.5 px-3.5',
				className,
				props.disabled
					? 'pointer-events-none cursor-not-allowed bg-slate-400 text-slate-700'
					: 'bg-primary rounded hover:bg-red-800 text-white '
			)}>
			{children}
		</button>
	)
}
