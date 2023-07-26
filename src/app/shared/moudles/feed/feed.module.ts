import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FeedComponent} from 'src/app/shared/moudles/feed/components/feed/feed.component'
import {EffectsModule} from '@ngrx/effects'
import {GetFeedEffect} from 'src/app/shared/moudles/feed/store/effects/getFeed.effect'
import {StoreModule} from '@ngrx/store'
import {feedReducer} from 'src/app/shared/moudles/feed/store/reducers'
import {FeedService} from 'src/app/shared/moudles/feed/services/feed.service'
import {RouterLink, RouterModule} from '@angular/router'

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', feedReducer),
    RouterLink,
    RouterModule,
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
