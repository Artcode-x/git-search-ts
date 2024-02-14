import * as S from "./Search.styled"
import getUsers from "../../api/api"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { filterSelector } from "../../store/selector/selector"
import { IforLoaderOpen, IRespUsers } from "../../interface/interface"
import {
  searchUserNameUpdate,
  textInInputSearchUpdate,
  totalPagesFoundUpdate,
} from "../../store/reducers/reducers"
import { checkEnterHooks } from "../../hooks/checkEnterHooks"

export default function Search({ setLoading }: IforLoaderOpen) {
  const dispatch = useDispatch()
  const filter: boolean = useSelector(filterSelector)
  const [userName, setUserName] = useState<string>("")
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [match, setMatch] = useState<number>(0)
  const [showError, setShowError] = useState<string>("")
  const page: number = 1

  const searchClick = async () => {
    try {
      setLoading(true)
      setIsDisabled(true)

      const response: IRespUsers = await getUsers({
        userName,
        filter,
        page,
      })
      setMatch(response.total_count)

      const PageforShow: number = 8
      const resultAllPages: number = Math.ceil(response.total_count / PageforShow)

      dispatch(totalPagesFoundUpdate(resultAllPages))

      const users = response.items.map((user) => ({
        login: user.login,
        avatar: user.avatar_url,
        url: user.url,
        id: user.id,
      }))

      dispatch(searchUserNameUpdate(users))
      dispatch(textInInputSearchUpdate(userName))
    } catch (error: any) {
      if (error.response.status === 403) {
        setShowError("Превышено количество запросов, повторите позднее!")
      } else if (error.response.status === 422) {
        setShowError("Ошибка на сервере, повторите позднее!")
      } else if (error.response.status === 503) {
        setShowError("Сервер не доступен, повторите позднее!")
      }
    } finally {
      setIsDisabled(false)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!userName) return
    searchClick()
  }, [filter])

  return (
    <S.SearchContainer>
      <S.TitleH3>Github Search Users</S.TitleH3>
      <S.SearchBlock>
        <S.SearchInput
          type="search"
          placeholder="Поиск"
          onKeyDown={(e) => checkEnterHooks(e.key, searchClick)}
          onChange={(e) => {
            setUserName(e.target.value)
          }}
        />
        <S.SearchButton disabled={isDisabled} onClick={searchClick}>
          {isDisabled ? "идет поиск..." : "Поиск"}
        </S.SearchButton>
      </S.SearchBlock>
      <S.AllResults>Всего найдено результатов: {match}</S.AllResults>
      {showError && <S.ForErrors>{showError}</S.ForErrors>}
    </S.SearchContainer>
  )
}
