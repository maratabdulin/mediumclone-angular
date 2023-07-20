import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {select, Store} from '@ngrx/store'
import {registerAction} from 'src/app/auth/store/actions/register.action'
import {Observable} from 'rxjs'
import {AppStateInterface} from 'src/app/shared/types/appState.interface'
import {isSubmittingSelector} from 'src/app/auth/store/selectors'
import {AuthService} from 'src/app/auth/services/auth.service'
import {RegisterRequestInterface} from 'src/app/auth/types/registerRequest.interface'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  isSubmitting$: Observable<boolean>
  constructor(private store: Store<AppStateInterface>) {}

  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  ngOnInit() {
    this.initializedValues()
  }

  initializedValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
  }

  onSubmit(): void {
    console.log(this.form.valid)
    const request: RegisterRequestInterface = {
      user: {
        username: this.form.value.username,
        password: this.form.value.password,
        email: this.form.value.email,
      },
    }
    this.store.dispatch(registerAction({request}))
  }
}
