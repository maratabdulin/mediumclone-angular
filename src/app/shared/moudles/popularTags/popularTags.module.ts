import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {PopularTagsService} from 'src/app/shared/moudles/popularTags/services/popularTags.service'
import {StoreModule} from '@ngrx/store'
import {popularTagsReducer} from 'src/app/shared/moudles/popularTags/store/reducers'
import {EffectsModule} from '@ngrx/effects'
import {GetPopularTagsEffect} from 'src/app/shared/moudles/popularTags/store/effects/getPopularTags.effect'
import {PopularTagsComponent} from 'src/app/shared/moudles/popularTags/components/popularTags/popularTags.component'
import {LoadingModule} from 'src/app/shared/moudles/loading/loading.module'
import {ErrorMessageModule} from 'src/app/shared/moudles/errorMessage/errorMessage.module'
import {RouterLink} from '@angular/router'

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', popularTagsReducer),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    LoadingModule,
    ErrorMessageModule,
    RouterLink,
  ],
  declarations: [PopularTagsComponent],
  providers: [PopularTagsService],
  exports: [PopularTagsComponent],
})
export class PopularTagsModule {}
