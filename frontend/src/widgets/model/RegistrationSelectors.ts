import type { RootState } from 'app/store'

export const allPets = (state: RootState) =>
  state.RegistrationSlice.allPets

  export const myPets = (state: RootState) =>
  state.RegistrationSlice.myPets

  export const allAdvs = (state: RootState) =>
  state.RegistrationSlice.allAdvs