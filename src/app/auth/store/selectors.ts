import {createSelector} from '@ngrx/store'

import {AuthStateInterface} from 'src/app/auth/types/authState.interface'
import {AppStateInterface} from 'src/app/shared/types/appState.interface'

export const authFeatureSelector = (
  state: AppStateInterface,
): AuthStateInterface => state.auth

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.isSubmitting,
)

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.validationErrors,
)
