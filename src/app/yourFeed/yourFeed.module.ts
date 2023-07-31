import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'

import {FeedModule} from 'src/app/shared/moudles/feed/feed.module'
import {BannerModule} from 'src/app/shared/moudles/banner/banner.module'
import {PopularTagsModule} from 'src/app/shared/moudles/popularTags/popularTags.module'
import {FeedTogglerModule} from 'src/app/shared/moudles/feedToggler/feedToggler.module'
import {YourFeedComponent} from 'src/app/yourFeed/components/yourFeed/yourFeed.component'

const routes = [
  {
    path: 'feed',
    component: YourFeedComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule,
  ],
  declarations: [YourFeedComponent],
})
export class YourFeedModule {}
