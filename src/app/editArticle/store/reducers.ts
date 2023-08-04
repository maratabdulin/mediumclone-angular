import {EditArticleStateInterface} from 'src/app/editArticle/types/editArticleState.interface'
import {createReducer, on} from '@ngrx/store'
import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccessAction,
} from 'src/app/editArticle/store/actions/editArticle.action'
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from 'src/app/editArticle/store/actions/getArticle.action'

const initialState: EditArticleStateInterface = {
  article: null,
  isLoading: false,
  isSubmitting: false,
  validationErrors: null,
}

export const editArticleReducer = createReducer(
  initialState,
  on(updateArticleAction, (state: EditArticleStateInterface) => ({
    ...state,
    isSubmitting: true,
  })),
  on(updateArticleSuccessAction, (state: EditArticleStateInterface) => ({
    ...state,
    isSubmitting: false,
  })),
  on(
    updateArticleFailureAction,
    (state: EditArticleStateInterface, action) => ({
      ...state,
      validationErrors: action.errors,
      isSubmitting: false,
    }),
  ),
  on(getArticleAction, (state: EditArticleStateInterface) => ({
    ...state,
    isLoading: true,
  })),
  on(getArticleSuccessAction, (state: EditArticleStateInterface, action) => ({
    ...state,
    isLoading: false,
    article: action.article,
  })),
  on(getArticleFailureAction, (state: EditArticleStateInterface) => ({
    ...state,
    isLoading: false,
  })),
)
