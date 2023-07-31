import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap} from 'rxjs'

import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from 'src/app/shared/moudles/popularTags/store/actions/getPopularags.action'
import {PopularTagsService} from 'src/app/shared/moudles/popularTags/services/popularTags.service'
import {PopularTagType} from 'src/app/shared/types/popularTag.type'

@Injectable()
export class GetPopularTagsEffect {
  getPopularTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(() => {
        return this.popularTagsService.getPopularTags().pipe(
          map((popularTags: PopularTagType[]) => {
            return getPopularTagsSuccessAction({popularTags})
          }),
          catchError(() => {
            return of(getPopularTagsFailureAction())
          }),
        )
      }),
    ),
  )

  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService,
  ) {}
}
