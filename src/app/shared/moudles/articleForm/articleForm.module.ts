import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ArticleFormComponent} from 'src/app/shared/moudles/articleForm/components/articleForm.component'
import {BackendErrorMessagesModule} from 'src/app/shared/moudles/backendErrorMessages/backendErrorMessages.module'
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  imports: [CommonModule, BackendErrorMessagesModule, ReactiveFormsModule],
  declarations: [ArticleFormComponent],
  exports: [ArticleFormComponent],
})
export class ArticleFormModule {}
