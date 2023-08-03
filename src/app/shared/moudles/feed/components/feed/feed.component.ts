import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {getFeedAction} from 'src/app/shared/moudles/feed/store/actions/getFeed.action'
import {Observable, Subscription} from 'rxjs'
import {GetFeedResponseInterface} from 'src/app/shared/moudles/feed/types/getFeedResponse.interface'
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from 'src/app/shared/moudles/feed/store/selectors'
import {environment} from 'src/environments/environment'
import {ActivatedRoute, Params, Router} from '@angular/router'
import queryString from 'query-string'

@Component({
  selector: 'mc-feed',
  templateUrl: 'feed.component.html',
  styleUrls: ['feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy, OnChanges {
  @Input('apiUrl') apiUrlProps: string

  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  feed$: Observable<GetFeedResponseInterface | null>
  baseUrl: string
  limit = environment.limit
  queryParamsSubscription: Subscription
  currentPage: number

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.initializeValues()
    this.initializeListeners()
  }

  ngOnDestroy() {
    this.queryParamsSubscription.unsubscribe()
  }

  ngOnChanges(changes: SimpleChanges) {
    const isApiUrlChanged =
      !changes['apiUrlProps'].firstChange &&
      changes['apiUrlProps'].currentValue !==
        changes['apiUrlProps'].previousValue
    if (isApiUrlChanged) {
      this.fetchFeed()
    }
  }

  initializeValues() {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.feed$ = this.store.pipe(select(feedSelector))
    this.baseUrl = this.router.url.split('?')[0]
  }

  fetchFeed() {
    const offset = this.currentPage * this.limit - this.limit
    const parsedUrl = queryString.parseUrl(this.apiUrlProps)
    const stringifiedParams = queryString.stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query,
    })
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
    this.store.dispatch(getFeedAction({url: apiUrlWithParams}))
  }

  initializeListeners() {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = Number(params['page'] || '1')
        this.fetchFeed()
      },
    )
  }
}
