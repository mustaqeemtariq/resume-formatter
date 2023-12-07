import { useAppSelector } from 'hooks'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

export const Result = () => {
	const convertedResumes = useAppSelector(state => state.resume)

	const styles = StyleSheet.create({
		page: {
			flexDirection: 'row',
			backgroundColor: '#E4E4E4'
		},
		section: {
			margin: 10,
			padding: 10,
			flexGrow: 1
		}
	})

	return (
		<Document>
			<Page size="A4" style={styles.page}>
				<View style={styles.section}>
					<Text>Section #1</Text>
				</View>
				<View>
					<Text>Section #2</Text>
				</View>
			</Page>
		</Document>
	)
}
