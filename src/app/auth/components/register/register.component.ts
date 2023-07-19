import {Component} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {Store} from '@ngrx/store'
import {registerAction} from 'src/app/auth/store/actions/register.action'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private store: Store) {}

  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  onSubmit(): void {
    console.log(this.form.valid)
    this.store.dispatch(
      registerAction({
        username: this.form.value.username,
        password: this.form.value.password,
        email: this.form.value.email,
      }),
    )
  }
}
