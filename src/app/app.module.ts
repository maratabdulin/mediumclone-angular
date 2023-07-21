import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'

import {environment} from 'src/environments/environment'
import {AppRoutingModule} from 'src/app/app-routing.module'
import {AppComponent} from 'src/app/app.component'
import {AuthModule} from 'src/app/auth/auth.module'
import {TopBarModule} from 'src/app/shared/moudles/topBar/topBar.module'
import {PersistenceService} from 'src/app/shared/services/persistence.service'
import {AuthInterceptor} from 'src/app/shared/services/authinterceptor.service'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot({}),
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    TopBarModule,
  ],
  providers: [
    PersistenceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
