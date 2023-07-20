import {AuthStateInterface} from 'src/app/auth/types/authState.interface'
import {createReducer, on} from '@ngrx/store'
import {registerAction} from 'src/app/auth/store/actions/register.action'

const initialState: AuthStateInterface = {
  isSubmitting: false,
}

export const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
    }),
  ),
)
