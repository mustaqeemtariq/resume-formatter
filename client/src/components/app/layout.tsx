import React from 'react'

import { AppHeader } from 'components/app/header'
import { useDocumentTitle } from 'hooks/useDocumentTitle'

interface AppLayoutProps {
	children: React.ReactNode
	title?: string
	renderHeader?: boolean
}

export const AppLayout = ({ renderHeader = true, children, title }: AppLayoutProps) => {
	const docTitleText = title
		? `${title} | ResumeConverter`
		: 'Resume Converter - Convert resume to a standard format'

	useDocumentTitle(docTitleText)

	return (
		<div className="relative bg-gray-900 min-h-screen">
			{renderHeader ? <AppHeader /> : null}
			{children}
		</div>
	)
}
