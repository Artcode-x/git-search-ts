import axios from "axios"
import { IPropsForApi } from "../interface/interface"

const way = "https://api.github.com"

export default async function searchQuerryGetUsers({ userName, filter, page }: IPropsForApi) {
  const order = `&order=${filter ? "desc" : "asc"}`

  const response = await axios(
    `${way}/search/users?q=${userName}&sort=repositories${order}&per_page=8&page=${page}`,
    {
      method: "GET",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  )

  return response.data
}

export async function getUserInfo(userName: string) {
  const response = await axios(`${way}/users/${userName}`, {
    method: "GET",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  })
  return response.data
}
