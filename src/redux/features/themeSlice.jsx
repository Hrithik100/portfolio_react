import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   value: JSON.parse(localStorage.getItem('darkMode')) || false
}

export const themeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode(state) {
        state.value = !state.value;
        localStorage.setItem('darkMode', JSON.stringify(state.value))
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggleDarkMode } = themeSlice.actions

export default themeSlice.reducer