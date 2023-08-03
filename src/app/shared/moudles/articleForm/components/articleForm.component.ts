import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'

import {ArticleInputInterface} from 'src/app/shared/types/articleInput.interface'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface.'

@Component({
  selector: 'mc-article-form',
  templateUrl: 'articleForm.component.html',
  styleUrls: ['articleForm.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  @Input('initialValues') initialValuesProps: ArticleInputInterface
  @Input('isSubmitting') isSubmittingProps: boolean
  @Input('errors') errorProps: BackendErrorsInterface | null

  @Output('articleSubmit') articleSubmitEvent =
    new EventEmitter<ArticleInputInterface>()

  form: FormGroup

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(this.initialValuesProps.article.title, [
        Validators.required,
      ]),
      description: new FormControl(
        this.initialValuesProps.article.description,
        [Validators.required],
      ),
      body: new FormControl(this.initialValuesProps.article.body, [
        Validators.required,
      ]),
      tagList: new FormControl(
        this.initialValuesProps.article.tagList.join(' '),
        [Validators.required],
      ),
    })
  }

  onSubmit() {
    this.articleSubmitEvent.emit({
      article: {
        title: this.form.value.title,
        description: this.form.value.description,
        body: this.form.value.body,
        tagList: this.form.value.tagList.split(' '),
      },
    })
  }
}
