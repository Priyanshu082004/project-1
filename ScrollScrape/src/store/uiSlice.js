import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    ishotstarOpen: false,
    selectedContent: null,
    notifications: [],
    ismobileMenuOpen: false,
  },
  reducers: {
    openHotstar(state, action) {
      state.ishotstarOpen = true
      state.selectedContent = action.payload
    },
    closeHotstar(state) {
      state.ishotstarOpen = false
      state.selectedContent = null
    },
    toggleMobileMenu(state) {
      state.ismobileMenuOpen = !state.mobileMenuOpen
    },
    closeMobileMenu(state) {
      state.ismobileMenuOpen = false
    },
    addNotification(state, action) {
      state.notifications.push({ id: nanoid(), ...action.payload })
    },
    removeNotification(state, action) {
      state.notifications = state.notifications.filter(n => n.id !== action.payload)
    },
  },
})

export const {
  openHotstar, closeHotstar,
  toggleMobileMenu, closeMobileMenu,
  addNotification, removeNotification,
} = uiSlice.actions

export default uiSlice.reducer