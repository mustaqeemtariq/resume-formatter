import { useState } from 'react'
import { ChevronRightIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

import clsx from 'clsx'

import { FileUpload } from 'components/app/file-upload'
import { AppLayout } from 'components/app/layout'
import resumeService from 'services/resume-service'
import { Button } from 'components/app/button'
import { Spinner } from 'components/animation/spinner'

export const Home = () => {
	const [showDropzone, setShowDropzone] = useState(false)
	const [files, setFiles] = useState<File[]>([])
	const [preview, setPreview] = useState<{ [name: string]: boolean }>()
	const [isLoading, setIsLoading] = useState(false)
	const [fetchingDocument, setFetchingDocument] = useState(false)
	const [downloadLink, setDownloadLink] = useState<any>()

	const handleSubmit = () => {
		setIsLoading(true)
		const resumeData = new FormData()
		files.map(file => resumeData.append('resume', file))
		resumeService
			.uploadResume(resumeData)
			.then(res => {
				resumeService
					.getConvertedFile(res.id)
					.then(response => {
						const href = URL.createObjectURL(
							new Blob([response], { type: files.length > 1 ? 'application/zip' : 'octet-stream' })
						)
						const a = Object.assign(document.createElement('a'), {
							href,
							style: 'display: none',
							download: res.name
						})
						setDownloadLink(a)
					})
					.catch(() => toast.error('Error occured while converting'))
					.finally(() => setFetchingDocument(false))
			})
			.catch(() => toast.error('Failed to convert. Please try again'))
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

		if (updatedFiles.length > 10) {
			toast.warn('For best performance maximum 10 files can be uploaded at a time.')
			updatedFiles = updatedFiles.slice(0, 10)
		}

		setFiles(updatedFiles)
	}

	const handleDelete = (index: number) => {
		const newFiles = [...files]
		newFiles.splice(index, 1)
		setFiles(newFiles)
	}

	if (fetchingDocument) {
		return (
			<AppLayout>
				<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-50">
					<div className="fixed inset-1/2">
						<Spinner className=" h-8 w-8 mb-2" />
						<span className="whitespace-nowrap text-black -ml-[86px] text-xl animate-pulse">
							Converting, Please Wait...
						</span>
					</div>
				</div>
			</AppLayout>
		)
	}

	return (
		<AppLayout>
			<h1
				className={clsx(
					'mt-20 font-bold tracking-tight text-gray-900',
					showDropzone ? 'text-2xl sm:text-4xl' : 'text-4xl  sm:text-6xl'
				)}>
				Convert Resume to a Presentable Format
			</h1>
			<p className="mt-6 text-lg leading-8 text-gray-600">
				Upload resume in pdf or doc format and see how it converts it to a presentable format.
			</p>

			{!showDropzone ? (
				<div className="mt-10 flex items-center justify-center gap-x-6">
					<div
						onClick={() => setShowDropzone(true)}
						className="rounded-md cursor-pointer bg-primary hover:bg-red-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
						Get started
					</div>
					<Link to="/about" className="text-sm font-semibold leading-6 text-gray-900">
						Learn more <span aria-hidden="true">→</span>
					</Link>
				</div>
			) : (
				<div className="flex mt-4 justify-center flex-col gap-y-4 items-center">
					<FileUpload onUpload={handleUpload} />
					{files.length > 0 && (
						<div className="flex flex-col items-center gap-y-2 w-full">
							<h2 className="text-lg font-bold">Uploaded Files</h2>
							<div className="text-center w-8/12 max-h-48 overflow-y-auto">
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
											</div>
											<XCircleIcon
												onClick={event => {
													event.stopPropagation()
													setDownloadLink(undefined)
													handleDelete(index)
												}}
												className="h-6 w-6 shrink-0 cursor-pointer fill-primary hover:fill-red-800 stroke-white"
											/>
										</div>
									</div>
								))}
							</div>
						</div>
					)}
					<div className="flex gap-x-4 justify-center pt-2 pb-4">
						<Button
							className={clsx('rounded-lg', {
								'shadow-lg shadow-red-200': files.length !== 0 && !isLoading
							})}
							disabled={files.length === 0 || isLoading}
							onClick={handleSubmit}>
							{isLoading ? (
								<div className="flex items-center justify-center gap-x-5">
									<Spinner />
									<span className="animate-pulse whitespace-nowrap">
										Processing, Please wait...
									</span>
								</div>
							) : (
								<span>Convert Resume</span>
							)}
						</Button>
						{downloadLink && (
							<a
								download={downloadLink.download}
								href={downloadLink}
								className="py-2.5 px-3 text-sm bg-green-500 text-white shadow-lg shadow-green-200 rounded-lg font-semibold">
								Download Resume
							</a>
						)}
					</div>
				</div>
			)}
		</AppLayout>
	)
}
