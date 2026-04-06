import { createSlice } from '@reduxjs/toolkit'

const contentSlice = createSlice({
  name: 'content',
  initialState: {
    workFilter: 'All',
    contactSubmitted: false,
  },
  reducers: {
    setWorkFilter(state, action) {
      state.workFilter = action.payload
    },
    setContactSubmitted(state, action) {
      state.contactSubmitted = action.payload
    },
  },
})

export const { setWorkFilter, setContactSubmitted } = contentSlice.actions
export default contentSlice.reducer