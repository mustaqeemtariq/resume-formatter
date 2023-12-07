import { useState } from 'react'
import { XCircleIcon } from '@heroicons/react/24/outline'
import { toast } from 'react-toastify'

import clsx from 'clsx'

import { FileUpload } from 'components/app/file-upload'
import { AppLayout } from 'components/app/layout'
import resumeService from 'services/resume-service'
import { Button } from 'components/app/button'
import { Spinner } from 'components/animation/spinner'
import { useAppDispatch } from 'hooks'
import { saveResumeInfo } from 'slices/resume'

export const Home = () => {
	const [showDropzone, setShowDropzone] = useState(false)
	const [files, setFiles] = useState<File[]>([])
	const [preview, setPreview] = useState<{ [name: string]: boolean }>()
	const [isLoading, setIsLoading] = useState(false)

	const dispatch = useAppDispatch()

	const handleSubmit = () => {
		setIsLoading(true)
		const resumeData = new FormData()
		files.map(file => resumeData.append('resume', file))
		resumeService
			.uploadResume(resumeData)
			.then(res => dispatch(saveResumeInfo(res)))
			.finally(() => setIsLoading(false))
	}

	const handleUpload = (newFiles: FileList) => {
		let updatedFiles: File[] = [...files, ...Array.from(newFiles)]

		updatedFiles = updatedFiles.reduce((uniqueFiles, file) => {
			const fileAlreadyExists = uniqueFiles.some(
				existingFile => existingFile.name === file.name && existingFile.size === file.size
			)

			const fileSizeExceedsLimit = file.size > 100000000

			if (fileAlreadyExists) {
				toast.error(`${file.name} already exists.`)
			}
			if (!fileAlreadyExists && !fileSizeExceedsLimit) {
				uniqueFiles.push(file)
			} else if (fileSizeExceedsLimit) {
				toast.error(`${file.name} exceeds the file size limit of 1000KB.`)
			}
			return uniqueFiles
		}, [] as File[])

		if (updatedFiles.length > 5) {
			toast.warn('For best performance maximum 5 files can be uploaded at a time.')
			updatedFiles = updatedFiles.slice(0, 5)
		}

		setFiles(updatedFiles)
	}

	const handleDelete = (index: number) => {
		const newFiles = [...files]
		newFiles.splice(index, 1)
		setFiles(newFiles)
	}

	return (
		<AppLayout>
			<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
				Convert Resume to a Presentable Format
			</h1>
			<p className="mt-6 text-lg leading-8 text-gray-600">
				Upload resume in pdf format and see how it converts it to a presentable format.
			</p>

			{!showDropzone ? (
				<div className="mt-10 flex items-center justify-center gap-x-6">
					<div
						onClick={() => setShowDropzone(true)}
						className="rounded-md cursor-pointer bg-primary hover:bg-red-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
						Get started
					</div>
					<a href="/about" className="text-sm font-semibold leading-6 text-gray-900">
						Learn more <span aria-hidden="true">→</span>
					</a>
				</div>
			) : (
				<div className="flex mt-4 justify-center flex-col gap-y-4 items-center">
					<FileUpload onUpload={handleUpload} />
					{files.length > 0 && (
						<div className="flex flex-col items-center gap-y-2 w-full">
							<h2 className="text-lg font-bold">Uploaded Files</h2>
							<div className="text-center w-8/12">
								{files.map((file, index) => (
									<div key={file.name}>
										<div
											className={clsx(
												' hover:bg-[#D3E3F1]  cursor-pointer w-full rounded-lg px-3 py-2 mb-2 flex justify-between items-center',
												preview?.[file.name] ? 'bg-[#D3E3F1]' : 'bg-[#D3E3F1]/[60%]'
											)}
											onClick={() =>
												setPreview(prev => ({ ...prev, [file.name]: !prev?.[file.name] }))
											}>
											<div className="flex gap-x-4 items-center">
												<p>
													{file.name} - ({Math.round(file.size / 1000)} kb)
												</p>
												<p className="text-[10px] italic">
													{preview?.[file.name] ? '(Click to collapse)' : '(Click to view)'}
												</p>
											</div>
											<XCircleIcon
												onClick={event => {
													event.stopPropagation()
													handleDelete(index)
												}}
												className="h-6 w-6 cursor-pointer fill-primary hover:fill-red-800 stroke-white"
											/>
										</div>
										{preview?.[file.name] && (
											<iframe
												key={file.name}
												title={file.name}
												src={URL.createObjectURL(file)}
												width="100%"
												height="400"
												className="mb-4"></iframe>
										)}
									</div>
								))}
							</div>
						</div>
					)}
					<Button disabled={files.length === 0} onClick={handleSubmit}>
						{isLoading ? (
							<div className="flex items-center justify-center gap-x-5">
								<Spinner />
								<span className="animate-pulse whitespace-nowrap">Processing, Please wait...</span>
							</div>
						) : (
							<span>Convert Resume</span>
						)}
					</Button>
				</div>
			)}
		</AppLayout>
	)
}
