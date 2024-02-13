export interface IPropsForApi {
  userName: string
  filter: boolean
  page: number
}

export interface IError {
  status: number
}

export interface IforPropsSearch {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IUsers {
  login: string
  avatar: string
  url: string
  id: number
}

export interface Iresponse {
  incomplete_results: boolean
  items: IresponseArray[]
  total_count: number
}

export interface IresponseArray {
  avatar_url: string
  events_url: string
  followers_url: string
  following_url: string
  gists_url: string
  gravatar_id: string
  html_url: string
  id: number
  login: string
  node_id: string
  organizations_url: string
  received_events_url: string
  repos_url: string
  score: number
  site_admin: boolean
  starred_url: string
  subscriptions_url: string
  type: string
  url: string
}

