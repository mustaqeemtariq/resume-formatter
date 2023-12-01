import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {}

const resumeSlice = createSlice({
	name: 'resume',
	initialState,
	reducers: {
		saveResumeInfo(state, action: PayloadAction<any>) {
			return action.payload
		}
	}
})

export const { saveResumeInfo } = resumeSlice.actions
export default resumeSlice.reducer
