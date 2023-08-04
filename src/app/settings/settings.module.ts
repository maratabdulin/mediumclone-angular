import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {SettingsComponent} from 'src/app/settings/components/settings.component'
import {RouterModule} from '@angular/router'
import {StoreModule} from '@ngrx/store'
import {settingReducer} from 'src/app/settings/store/reducers'
import {ReactiveFormsModule} from '@angular/forms'
import {BackendErrorMessagesModule} from 'src/app/shared/moudles/backendErrorMessages/backendErrorMessages.module'

const routes = [
  {
    path: 'settings',
    component: SettingsComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('settings', settingReducer),
    ReactiveFormsModule,
    BackendErrorMessagesModule,
  ],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
