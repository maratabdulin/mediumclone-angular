import {Component, Input, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {addToFavoritesAction} from 'src/app/shared/moudles/addToFavorites/store/actions/addToFavorites.action'
import {isLoggedInSelector} from 'src/app/auth/store/selectors'
import {Router} from '@angular/router'

@Component({
  selector: 'mc-add-to-favorites',
  templateUrl: 'addToFavorites.component.html',
  styleUrls: ['addToFavorites.component.scss'],
})
export class AddToFavoritesComponent implements OnInit {
  @Input('isFavorited') isFavoritedProps: boolean
  @Input('favoritesCount') favoritesCountProps: number
  @Input('articleSlug') articleSlugProps: string

  favoritesCount: number
  isFavorited: boolean
  isAuth: boolean

  constructor(
    private store: Store,
    private router: Router,
  ) {}

  ngOnInit() {
    this.favoritesCount = this.favoritesCountProps
    this.isFavorited = this.isFavoritedProps

    this.store.select(isLoggedInSelector).subscribe((isLoggedIn: boolean) => {
      this.isAuth = isLoggedIn
    })
  }

  handleLike() {
    if (!this.isAuth) {
      this.router.navigate(['/login'])
    }

    this.store.dispatch(
      addToFavoritesAction({
        isFavorited: this.isFavorited,
        slug: this.articleSlugProps,
      }),
    )

    if (this.isFavorited) {
      this.favoritesCount = this.favoritesCount - 1
    } else {
      this.favoritesCount = this.favoritesCount + 1
    }

    this.isFavorited = !this.isFavorited
  }
}
