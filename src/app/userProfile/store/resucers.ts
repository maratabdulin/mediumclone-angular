import {UserProfileStateInterface} from 'src/app/userProfile/types/userProfileState.interface'
import {createReducer, on} from '@ngrx/store'
import {
  getUserProfileAction,
  getUserProfileFailureAction,
  getUserProfileSuccessAction,
} from 'src/app/userProfile/store/actions/getUserProfile.action'

const initialState: UserProfileStateInterface = {
  isLoading: false,
  errors: null,
  data: null,
}

export const userProfileReducer = createReducer(
  initialState,
  on(
    getUserProfileAction,
    (state): UserProfileStateInterface => ({
      ...state,
      isLoading: true,
    }),
  ),
  on(
    getUserProfileSuccessAction,
    (state, action): UserProfileStateInterface => ({
      ...state,
      isLoading: false,
      data: action.userProfile,
    }),
  ),
  on(
    getUserProfileFailureAction,
    (state): UserProfileStateInterface => ({
      ...state,
      isLoading: false,
    }),
  ),
)
