import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {TagListComponent} from 'src/app/shared/moudles/tagList/components/tagList.component'

@NgModule({
  imports: [CommonModule],
  declarations: [TagListComponent],
  exports: [TagListComponent],
})
export class TagListModule {}
