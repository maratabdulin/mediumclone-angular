import {Component, OnDestroy, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'
import {filter, Observable, Subscription} from 'rxjs'
import {currentUserSelector} from 'src/app/auth/store/selectors'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface.'
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from 'src/app/settings/store/selectors'
import {updateCurrentUserAction} from 'src/app/auth/store/actions/updateCurrentUser.action'
import {CurrentUserInputInterface} from 'src/app/shared/types/currentUserInput.interface'
import {logoutAction} from 'src/app/auth/store/actions/sync.action'

@Component({
  selector: 'ms-settings',
  templateUrl: 'settings.component.html',
  styleUrls: ['settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  currentUser: CurrentUserInterface
  currentUserSubscription: Subscription
  form: FormGroup
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>

  constructor(private store: Store) {}

  ngOnInit() {
    this.initializeValues()
    this.initializeListeners()
  }

  ngOnDestroy() {
    this.currentUserSubscription.unsubscribe()
  }

  initializeListeners() {
    this.currentUserSubscription = this.store
      .pipe(select(currentUserSelector), filter(Boolean))
      .subscribe((currentUser: CurrentUserInterface) => {
        this.currentUser = currentUser
        this.form = new FormGroup({
          image: new FormControl(this.currentUser.image, [Validators.required]),
          username: new FormControl(this.currentUser.username, [
            Validators.required,
          ]),
          bio: new FormControl(this.currentUser.bio, [Validators.required]),
          email: new FormControl(this.currentUser.email, [Validators.required]),
          password: new FormControl(''),
        })
      })
  }

  initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  submit() {
    const currentUserInput: CurrentUserInputInterface = {
      ...this.currentUser,
      ...this.form.value,
    }
    this.store.dispatch(updateCurrentUserAction({currentUserInput}))
  }

  logout() {
    this.store.dispatch(logoutAction())
  }
}
