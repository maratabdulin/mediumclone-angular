import {AppStateInterface} from 'src/app/shared/types/appState.interface'
import {createSelector} from '@ngrx/store'
import {SettingsStateInterface} from 'src/app/settings/types/settingsState.interface'

export const settingFeatureSelector = (
  state: AppStateInterface,
): SettingsStateInterface => state.settings

export const isSubmittingSelector = createSelector(
  settingFeatureSelector,
  (settingState: SettingsStateInterface) => settingState.isSubmitting,
)

export const validationErrorsSelector = createSelector(
  settingFeatureSelector,
  (settingState: SettingsStateInterface) => settingState.validationErrors,
)
