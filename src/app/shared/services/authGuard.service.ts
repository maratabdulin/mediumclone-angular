import {Injectable} from '@angular/core'
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router'
import {select, Store} from '@ngrx/store'
import {isLoggedInSelector} from 'src/app/auth/store/selectors'
import {Observable, tap} from 'rxjs'

@Injectable()
export class AuthGuardService {
  constructor(
    private route: Router,
    private store: Store,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    return this.store.pipe(
      select(isLoggedInSelector),
      tap((isLogged) => {
        if (isLogged === false) {
          this.route.navigateByUrl('/login')
        }
      }),
    )
  }
}
