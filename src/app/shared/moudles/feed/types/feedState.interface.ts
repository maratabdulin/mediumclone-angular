import {GetFeedResponseInterface} from 'src/app/shared/moudles/feed/types/getFeedResponse.interface'

export interface FeedStateInterface {
  isLoading: boolean
  error: string | null
  data: GetFeedResponseInterface | null
}
