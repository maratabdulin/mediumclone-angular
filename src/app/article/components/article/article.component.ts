import {Component, OnDestroy, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {getArticleAction} from 'src/app/article/store/actions/getArticle.action'
import {ActivatedRoute} from '@angular/router'
import {ArticleInterface} from 'src/app/shared/types/article.interface'
import {combineLatest, map, Observable, Subscription} from 'rxjs'
import {
  articleSelector,
  errorSelector,
  isLoadingSelector,
} from 'src/app/article/store/selectors'
import {currentUserSelector} from 'src/app/auth/store/selectors'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'
import {deleteArticleAction} from 'src/app/article/store/actions/deleteArticle.action'

@Component({
  selector: 'mc-article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  slug: string
  article: ArticleInterface | null
  articleSubscription: Subscription
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  isAuthor$: Observable<boolean>

  constructor(
    private store: Store,
    private route: ActivatedRoute,
  ) {}
  ngOnInit() {
    this.initializeValues()
    this.initializeListeners()
    this.fetchData()
  }

  ngOnDestroy() {
    this.articleSubscription.unsubscribe()
  }

  initializeValues() {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.error$ = this.store.pipe(select(errorSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.isAuthor$ = combineLatest(
      this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector)),
    ).pipe(
      map(
        ([article, currentUser]: [
          ArticleInterface | null,
          CurrentUserInterface | null,
        ]) => {
          if (!article || !currentUser) {
            return false
          }
          return currentUser.username === article.author.username
        },
      ),
    )
  }

  fetchData() {
    this.store.dispatch(getArticleAction({slug: this.slug}))
  }

  initializeListeners() {
    this.articleSubscription = this.store
      .pipe(select(articleSelector))
      .subscribe((article: ArticleInterface | null) => {
        this.article = article
      })
  }

  deleteArticle() {
    this.store.dispatch(deleteArticleAction({slug: this.slug}))
  }
}
