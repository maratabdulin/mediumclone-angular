import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store'

import {environment} from 'src/environments/environment'
import {AppRoutingModule} from 'src/app/app-routing.module'
import {AppComponent} from 'src/app/app.component'
import {AuthModule} from 'src/app/auth/auth.module'
import {TopBarModule} from 'src/app/shared/moudles/topBar/topBar.module'
import {PersistenceService} from 'src/app/shared/services/persistence.service'
import {AuthInterceptor} from 'src/app/shared/services/authinterceptor.service'
import {GlobalFeedModule} from 'src/app/globalFeed/globalFeed.module'
import {YourFeedModule} from 'src/app/yourFeed/yourFeed.module'
import {TagFeedModule} from 'src/app/tagFeed/tagFeed.module'
import {ArticleModule} from 'src/app/article/article.module'
import {CreateArticleModule} from 'src/app/createArticle/createArticle.module'
import {EditArticleModule} from 'src/app/editArticle/editArticle.module'
import {SettingsModule} from 'src/app/settings/settings.module'
import {UserProfileModule} from 'src/app/userProfile/userProfile.module'
import {AuthGuardService} from 'src/app/shared/services/authGuard.service'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({
      router: routerReducer,
    }),
    EffectsModule.forRoot({}),
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot(),
    TopBarModule,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    CreateArticleModule,
    EditArticleModule,
    ArticleModule,
    SettingsModule,
    UserProfileModule,
  ],
  providers: [
    PersistenceService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
