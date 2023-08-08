import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {UserProfileComponent} from 'src/app/userProfile/components/userProfile.component'
import {RouterModule} from '@angular/router'
import {UserProfileService} from 'src/app/userProfile/services/userProfile.service'
import {EffectsModule} from '@ngrx/effects'
import {GetUserProfileEffect} from 'src/app/userProfile/store/effects/getUserProfile.effect'
import {StoreModule} from '@ngrx/store'
import {userProfileReducer} from 'src/app/userProfile/store/resucers'
import {FeedModule} from 'src/app/shared/moudles/feed/feed.module'

const routes = [
  {
    path: 'profiles/:slug',
    component: UserProfileComponent,
  },
  {
    path: 'profiles/:slug/favorites',
    component: UserProfileComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetUserProfileEffect]),
    StoreModule.forFeature('userProfile', userProfileReducer),
    FeedModule,
  ],
  declarations: [UserProfileComponent],
  providers: [UserProfileService],
})
export class UserProfileModule {}
