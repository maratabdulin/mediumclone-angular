import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {BannerComponent} from 'src/app/shared/moudles/banner/components/banner.component'

@NgModule({
  imports: [CommonModule],
  declarations: [BannerComponent],
  exports: [BannerComponent],
})
export class BannerModule {}
