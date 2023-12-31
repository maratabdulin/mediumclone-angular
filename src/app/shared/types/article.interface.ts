import {ProfileInterface} from 'src/app/shared/types/profile.interface'

export interface ArticleInterface {
  author: ProfileInterface
  body: string
  createdAt: string
  description: string
  favorites: boolean
  favoritesCount: number
  slug: string
  tagList: string[]
  title: string
  updatedAt: string
}
