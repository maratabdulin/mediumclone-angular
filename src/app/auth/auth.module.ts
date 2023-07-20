import {RouterModule, Routes} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'

import {RegisterComponent} from 'src/app/auth/components/register/register.component'
import {StoreModule} from '@ngrx/store'
import {authReducer} from 'src/app/auth/store/reducers'

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducer),
  ],
  declarations: [RegisterComponent],
})
export class AuthModule {}
