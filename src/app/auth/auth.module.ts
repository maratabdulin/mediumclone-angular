import {RouterModule, Routes} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'

import {RegisterComponent} from 'src/app/auth/components/register/register.component'
import {StoreModule} from '@ngrx/store'
import {authReducer} from 'src/app/auth/store/reducers'
import {AuthService} from 'src/app/auth/services/auth.service'
import {EffectsModule} from '@ngrx/effects'
import {RegisterEffect} from 'src/app/auth/store/effects/register.effect'
import {BackendErrorMessagesModule} from 'src/app/shared/moudles/backendErrorMessages/backendErrorMessages.module'
import {PersistenceService} from 'src/app/shared/services/persistence.service'
import {LoginEffect} from 'src/app/auth/store/effects/login.effect'
import {LoginComponent} from 'src/app/auth/components/login/login.component'
import {GetCurrentUserEffect} from 'src/app/auth/store/effects/getCurrentUser.effect'
import {UpdateCurrentUserEffect} from 'src/app/auth/store/effects/updateCurrentUser.effect'
import {LogoutEffect} from 'src/app/auth/store/effects/logout.effect'

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect,
      UpdateCurrentUserEffect,
      LogoutEffect,
    ]),
    BackendErrorMessagesModule,
  ],
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthService, PersistenceService],
})
export class AuthModule {}
