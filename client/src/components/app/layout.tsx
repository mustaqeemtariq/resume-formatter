import React from 'react'

import { AppHeader } from 'components/app/header'
import { useDocumentTitle } from 'hooks/useDocumentTitle'

interface AppLayoutProps {
	children: React.ReactNode
	title?: string
	renderHeader?: boolean
	isSearchVisible?: boolean
}

export const AppLayout = ({
	renderHeader = true,
	children,
	title,
	isSearchVisible = false
}: AppLayoutProps) => {
	const docTitleText = title
		? `${title} | ResumeConverter`
		: 'Resume Converter - Convert resume to a standard format'

	useDocumentTitle(docTitleText)

	return (
		<div className="relative">
			{renderHeader ? <AppHeader isSearchVisible={isSearchVisible}>{children}</AppHeader> : null}
			{!renderHeader ? children : null}
		</div>
	)
}
