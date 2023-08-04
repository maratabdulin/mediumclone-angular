import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {EditArticleComponent} from 'src/app/editArticle/components/editArticle.component'
import {RouterModule} from '@angular/router'
import {ArticleFormModule} from 'src/app/shared/moudles/articleForm/articleForm.module'
import {EditArticleService} from 'src/app/editArticle/services/editArticle.service'
import {EffectsModule} from '@ngrx/effects'
import {UpdateArticleEffect} from 'src/app/editArticle/store/effects/updateArticle.effect'
import {StoreModule} from '@ngrx/store'
import {editArticleReducer} from 'src/app/editArticle/store/reducers'
import {ArticleService as SharedArticleService} from 'src/app/shared/services/article.service'
import {GetArticleEffect} from 'src/app/editArticle/store/effects/getArticle.effect'
import {LoadingModule} from 'src/app/shared/moudles/loading/loading.module'

const routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([UpdateArticleEffect, GetArticleEffect]),
    StoreModule.forFeature('editArticle', editArticleReducer),
    LoadingModule,
  ],
  declarations: [EditArticleComponent],
  providers: [EditArticleService, SharedArticleService],
})
export class EditArticleModule {}
