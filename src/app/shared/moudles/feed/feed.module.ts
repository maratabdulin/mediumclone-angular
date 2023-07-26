import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FeedComponent} from 'src/app/shared/moudles/feed/components/feed/feed.component'
import {EffectsModule} from '@ngrx/effects'
import {GetFeedEffect} from 'src/app/shared/moudles/feed/store/effects/getFeed.effect'
import {StoreModule} from '@ngrx/store'
import {feedReducer} from 'src/app/shared/moudles/feed/store/reducers'
import {FeedService} from 'src/app/shared/moudles/feed/services/feed.service'
import {RouterLink, RouterModule} from '@angular/router'
import {ErrorMessageModule} from 'src/app/shared/moudles/errorMessage/errorMessage.module'
import {LoadingModule} from 'src/app/shared/moudles/loading/loading.module'

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', feedReducer),
    RouterLink,
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
