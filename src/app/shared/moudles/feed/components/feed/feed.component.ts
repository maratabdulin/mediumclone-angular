import {Component, Input, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {getFeedAction} from 'src/app/shared/moudles/feed/store/actions/getFeed.action'
import {Observable} from 'rxjs'
import {GetFeedResponseInterface} from 'src/app/shared/moudles/feed/types/getFeedResponse.interface'
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from 'src/app/shared/moudles/feed/store/selectors'

@Component({
  selector: 'mc-feed',
  templateUrl: 'feed.component.html',
  styleUrls: ['feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @Input('apiUrl') apiUrlProps: string

  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  feed$: Observable<GetFeedResponseInterface | null>

  constructor(private store: Store) {}

  ngOnInit() {
    this.initializeValues()
    this.fetchData()
  }

  initializeValues() {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.feed$ = this.store.pipe(select(feedSelector))
  }

  fetchData() {
    this.store.dispatch(getFeedAction({url: this.apiUrlProps}))
  }
}
