import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DateTime } from 'luxon'

const initialState = {}

const resumeSlice = createSlice({
	name: 'resume',
	initialState,
	reducers: {
		saveResumeInfo(state, action: PayloadAction<any>) {
			return { ...state, [DateTime.now().toISO()]: action.payload }
		}
	}
})

export const { saveResumeInfo } = resumeSlice.actions
export default resumeSlice.reducer
