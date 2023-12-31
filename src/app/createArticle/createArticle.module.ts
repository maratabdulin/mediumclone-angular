import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {CreateArticleComponent} from 'src/app/createArticle/components/createArticle.component'
import {RouterModule} from '@angular/router'
import {ArticleFormModule} from 'src/app/shared/moudles/articleForm/articleForm.module'
import {CreateArticleService} from 'src/app/createArticle/services/createArticle.service'
import {EffectsModule} from '@ngrx/effects'
import {CreateArticleEffect} from 'src/app/createArticle/store/effects/createArticle.effect'
import {StoreModule} from '@ngrx/store'
import {createArticleReducer} from 'src/app/createArticle/store/reducers'

const routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([CreateArticleEffect]),
    StoreModule.forFeature('createArticle', createArticleReducer),
  ],
  declarations: [CreateArticleComponent],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}
