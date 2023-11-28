import { PaperClipIcon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string
	labelText?: string
	allowMultiple: boolean
	className?: string
	files: File[]
	maximumAllowedFiles: number
	onUpload?: (files: File[]) => void
}

export default function FileUpload({
	name,
	labelText,
	onUpload,
	allowMultiple,
	files,
	className,
	maximumAllowedFiles
}: InputProps) {
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files) return
		const files = Array.from(event.target.files)
		onUpload?.(files)
	}

	return (
		<div className={clsx('w-full', className)}>
			{labelText && (
				<label htmlFor={name} className="block text-[#0D0C18]">
					{labelText}
				</label>
			)}

			<div className="relative flex justify-between items-start">
				<input
					type="file"
					className="hidden w-full appearance-none"
					name={name}
					accept="application/pdf"
					multiple={allowMultiple}
					onChange={handleInputChange}
				/>

				<div className="mt-2 ml-4 mb-20 flex flex-wrap basis-4/5 gap-x-2 gap-y-1">
					{files.length > 0 &&
						files.length <= maximumAllowedFiles &&
						files.map((file, index) => (
							<div
								className="flex grow rounded-lg justify-between bg-[#F4F7FB] pr-4 pl-2 py-2 items-center"
								key={index}>
								<p className="text-primary line-clamp-1 text-ellipsis overflow-hidden">
									{file.name}
								</p>
							</div>
						))}
				</div>

				<button
					type="button"
					className="sticky top-0 w-full basis-1/5 cursor-pointer gap-x-1.5 text-xs text-neutral rounded-md bg-white bg-opacity-30 py-1 px-2.5"
					onClick={() => {
						const fileInput = document.querySelector(`[name=${name}]`) as HTMLInputElement
						fileInput.click()
					}}>
					<PaperClipIcon className="h-6 w-6 ml-auto mr-2 mt-2" />
				</button>
			</div>
		</div>
	)
}
