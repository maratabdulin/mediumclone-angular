import {Component, OnInit} from '@angular/core'
import {ArticleInputInterface} from 'src/app/shared/types/articleInput.interface'
import {Observable} from 'rxjs'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface.'
import {select, Store} from '@ngrx/store'
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from 'src/app/createArticle/store/selectors'
import {createArticleAction} from 'src/app/createArticle/store/actions/createArticle.action'

@Component({
  selector: 'mc-create-article',
  templateUrl: 'createArticle.component.html',
  styleUrls: ['createArticle.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  initialValues: ArticleInputInterface = {
    article: {
      title: '',
      body: '',
      description: '',
      tagList: [],
    },
  }
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>

  constructor(private store: Store) {}

  ngOnInit() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  onSubmit(articleInput: ArticleInputInterface) {
    this.store.dispatch(createArticleAction({articleInput}))
  }
}
