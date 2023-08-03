import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'

import {AppStateInterface} from 'src/app/shared/types/appState.interface'
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from 'src/app/auth/store/selectors'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface.'
import {LoginRequestInterface} from 'src/app/auth/types/loginRequest.interface'
import {loginAction} from 'src/app/auth/store/actions/login.action'

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>
  constructor(private store: Store<AppStateInterface>) {}

  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  ngOnInit() {
    this.initializedValues()
  }

  initializedValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  onSubmit(): void {
    const request: LoginRequestInterface = {
      user: {
        password: this.form.value.password,
        email: this.form.value.email,
      },
    }
    this.store.dispatch(loginAction({request}))
  }
}
