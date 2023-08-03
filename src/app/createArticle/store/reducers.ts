import {CreateArticleStateInterface} from 'src/app/createArticle/types/createArticleState.interface'
import {createReducer, on} from '@ngrx/store'
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction,
} from 'src/app/createArticle/store/actions/createArticle.action'

const initialState: CreateArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null,
}

export const createArticleReducer = createReducer(
  initialState,
  on(createArticleAction, (state: CreateArticleStateInterface) => ({
    ...state,
    isSubmitting: true,
  })),
  on(createArticleSuccessAction, (state: CreateArticleStateInterface) => ({
    ...state,
    isSubmitting: false,
  })),
  on(
    createArticleFailureAction,
    (state: CreateArticleStateInterface, action) => ({
      ...state,
      validationErrors: action.errors,
      isSubmitting: false,
    }),
  ),
)
