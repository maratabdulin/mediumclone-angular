import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {RouterLink, RouterModule} from '@angular/router'

import {ErrorMessageModule} from 'src/app/shared/moudles/errorMessage/errorMessage.module'
import {LoadingModule} from 'src/app/shared/moudles/loading/loading.module'
import {GetArticleEffect} from 'src/app/article/store/effects/getArticle.effect'
import {articleReducer} from 'src/app/article/store/reducers'
import {ArticleComponent} from 'src/app/article/components/article/article.component'
import {ArticleService as SharedArticleService} from 'src/app/shared/services/article.service'
import {TagListModule} from 'src/app/shared/moudles/tagList/tagList.module'

const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect]),
    StoreModule.forFeature('article', articleReducer),
    RouterLink,
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    RouterModule.forChild(routes),
    TagListModule,
  ],
  declarations: [ArticleComponent],
  exports: [],
  providers: [SharedArticleService],
})
export class ArticleModule {}
