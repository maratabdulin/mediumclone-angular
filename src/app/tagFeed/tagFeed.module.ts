import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'

import {FeedModule} from 'src/app/shared/moudles/feed/feed.module'
import {BannerModule} from 'src/app/shared/moudles/banner/banner.module'
import {PopularTagsModule} from 'src/app/shared/moudles/popularTags/popularTags.module'
import {FeedTogglerModule} from 'src/app/shared/moudles/feedToggler/feedToggler.module'
import {TagFeedComponent} from 'src/app/tagFeed/components/tagFeed/tagFeed.component'

const routes = [
  {
    path: 'tags/:slug',
    component: TagFeedComponent,
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
  declarations: [TagFeedComponent],
})
export class TagFeedModule {}
