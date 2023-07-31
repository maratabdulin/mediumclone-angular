import {PopularTagsStateInterface} from 'src/app/shared/moudles/popularTags/types/popularTagsState.interface'
import {createReducer, on} from '@ngrx/store'
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from 'src/app/shared/moudles/popularTags/store/actions/getPopularags.action'

const initialState: PopularTagsStateInterface = {
  data: null,
  isLoading: false,
  error: null,
}

export const popularTagsReducer = createReducer(
  initialState,
  on(
    getPopularTagsAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: true,
    }),
  ),
  on(
    getPopularTagsSuccessAction,
    (state, action): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
      data: action.popularTags,
    }),
  ),
  on(
    getPopularTagsFailureAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
    }),
  ),
)
