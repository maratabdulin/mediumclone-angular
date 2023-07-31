import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {GlobalFeedComponent} from 'src/app/globalFeed/components/globalFeed/globalFeed.component'
import {RouterModule} from '@angular/router'
import {FeedModule} from 'src/app/shared/moudles/feed/feed.module'
import {BannerModule} from 'src/app/shared/moudles/banner/banner.module'
import {PopularTagsModule} from 'src/app/shared/moudles/popularTags/popularTags.module'

const routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
  ],
  declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
