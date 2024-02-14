export interface IDataUsers {
  userName: string
  filter: boolean
  page: number
}

export interface IError {
  status: number
}

export interface IforLoaderOpen {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IUsers {
  login: string
  avatar: string
  url: string
  id: number
}

export interface IRespUsers {
  incomplete_results: boolean
  items: IRespUsersArray[]
  total_count: number
}

export interface IRespUsersArray {
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

export interface IUser {
  avatar_url: string
  login: string
  location: null | string
  public_repos: number
  followers: number
  url: string
  html_url: string
  bio: null | string
}

export interface IUsersList {
  login: string
  avatar: string
  url: string
  id: number
}
