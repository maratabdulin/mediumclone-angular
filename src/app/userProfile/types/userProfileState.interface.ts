import {ProfileInterface} from 'src/app/shared/types/profile.interface'

export interface UserProfileStateInterface {
  isLoading: boolean
  data: ProfileInterface | null
  errors: string | null
}
