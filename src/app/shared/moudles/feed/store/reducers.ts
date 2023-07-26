import {FeedStateInterface} from 'src/app/shared/moudles/feed/types/feedState.interface'
import {createReducer, on} from '@ngrx/store'
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from 'src/app/shared/moudles/feed/store/actions/getFeed.action'
import {routerNavigationAction} from '@ngrx/router-store'

const initialState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null,
}

export const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true,
    }),
  ),
  on(
    getFeedSuccessAction,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoading: false,
      data: action.feed,
    }),
  ),
  on(
    getFeedFailureAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: false,
    }),
  ),
  on(routerNavigationAction, (): FeedStateInterface => initialState),
)
