import {createReducer, on} from '@ngrx/store'
import {routerNavigationAction} from '@ngrx/router-store'
import {ArticleStateInterface} from 'src/app/article/types/aritcleState.interface'
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from 'src/app/article/store/actions/getArticle.action'

const initialState: ArticleStateInterface = {
  isLoading: false,
  error: null,
  data: null,
}

export const articleReducer = createReducer(
  initialState,
  on(
    getArticleAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: true,
    }),
  ),
  on(
    getArticleSuccessAction,
    (state, action): ArticleStateInterface => ({
      ...state,
      isLoading: false,
      data: action.article,
    }),
  ),
  on(
    getArticleFailureAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: false,
    }),
  ),
  on(routerNavigationAction, (): ArticleStateInterface => initialState),
)
