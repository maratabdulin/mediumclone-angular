import {Injectable} from '@angular/core'
import {RegisterRequestInterface} from 'src/app/auth/types/registerRequest.interface'
import {map, Observable} from 'rxjs'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'
import {HttpClient} from '@angular/common/http'
import {environment} from 'src/environments/environment'
import {AuthResponseInterface} from 'src/app/auth/types/authResponse.interface'
import {LoginRequestInterface} from 'src/app/auth/types/loginRequest.interface'
import {CurrentUserInputInterface} from 'src/app/shared/types/currentUserInput.interface'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url: string = environment.apiUrl + '/users'
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url: string = environment.apiUrl + '/users/login'
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map((res) => res.user))
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/user'
    return this.http.get(url).pipe(map(this.getUser))
  }

  updateCurrentUser(
    currentUserInput: CurrentUserInputInterface,
  ): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/user'
    return this.http.put(url, currentUserInput).pipe(map(this.getUser))
  }
}
