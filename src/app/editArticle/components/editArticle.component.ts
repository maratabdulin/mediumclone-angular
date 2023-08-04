import {Component, OnInit} from '@angular/core'
import {ArticleInputInterface} from 'src/app/shared/types/articleInput.interface'
import {filter, map, Observable} from 'rxjs'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface.'
import {select, Store} from '@ngrx/store'
import {
  articleSelector,
  isSubmittingSelector,
  validationErrorsSelector,
} from 'src/app/editArticle/store/selectors'
import {ActivatedRoute} from '@angular/router'
import {getArticleAction} from 'src/app/editArticle/store/actions/getArticle.action'
import {ArticleInterface} from 'src/app/shared/types/article.interface'
import {updateArticleAction} from 'src/app/editArticle/store/actions/editArticle.action'

@Component({
  selector: 'mc-edit-article',
  templateUrl: 'editArticle.component.html',
  styleUrls: ['editArticle.component.scss'],
})
export class EditArticleComponent implements OnInit {
  initialValues$: Observable<ArticleInputInterface>
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>
  isLoading$: Observable<boolean>

  slug: string

  constructor(
    private store: Store,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.initializedValues()
    this.fetchData()
  }

  onSubmit(articleInput: ArticleInputInterface) {
    this.store.dispatch(updateArticleAction({articleInput, slug: this.slug}))
  }

  initializedValues() {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      filter(Boolean),
      map((article: ArticleInterface) => {
        return {
          article: {
            title: article.title,
            description: article.description,
            body: article.body,
            tagList: article.tagList,
          },
        }
      }),
    )
  }

  fetchData() {
    this.store.dispatch(getArticleAction({slug: this.slug}))
  }
}
