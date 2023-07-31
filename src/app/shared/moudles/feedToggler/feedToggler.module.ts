import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FeedTogglerComponent} from 'src/app/shared/moudles/feedToggler/components/feedToggler/feedToggler.component'
import {RouterLink, RouterLinkActive} from '@angular/router'

@NgModule({
  imports: [CommonModule, RouterLink, RouterLinkActive],
  declarations: [FeedTogglerComponent],
  exports: [FeedTogglerComponent],
})
export class FeedTogglerModule {}
