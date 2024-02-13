import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as S from "./Pagination.styled"
import {
  InputSearchSelector,
  filterSelector,
  pageNumberSelector,
  totalPagesFoundSelector,
} from "../../store/selector/selector"
import searchQuerryGetUsers from "../../api/api"
import { searchUserNameUpdate, pageNumberUpdate } from "../../store/reducers/reducers"
import { Iresponse } from "../../interface/interface"

export default function Pagination() {
  const dispatch = useDispatch()

  const userName = useSelector(InputSearchSelector)
  const filter = useSelector(filterSelector)
  const currentPage = useSelector(pageNumberSelector)
  const AllPagesCount = useSelector(totalPagesFoundSelector)

  const [disabled, setDisabled] = useState<boolean>(false)
  const [showError, setShowError] = useState<string>("")

  const sendRequestToApi = async (newCurrentPage: number) => {
    try {
      setDisabled(true)
      const response: Iresponse = await searchQuerryGetUsers({
        userName,
        filter,
        page: newCurrentPage,
      })
      const users = response.items.map((user) => ({
        login: user.login,
        avatar: user.avatar_url,
        url: user.url,
        id: user.id,
      }))

      dispatch(searchUserNameUpdate(users))
    } catch (error: any) {
      if (error.response.status === 403) {
        setShowError("Слишком много запросов, повторите позднее!")
      } else if (error.response.status === 422) {
        setShowError("Ошибка на сервере, повторите позднее!")
      } else if (error.response.status === 503) {
        setShowError("Сервер устал, повторите позднее!")
      }
    } finally {
      setDisabled(false)
    }
  }

  const prev = () => {
    if (currentPage > 1) {
      const newCurrentPage = currentPage - 1
      dispatch(pageNumberUpdate(newCurrentPage))
      sendRequestToApi(newCurrentPage)
    }
  }

  const next = () => {
    if (currentPage < AllPagesCount) {
      const newCurrentPage = currentPage + 1
      dispatch(pageNumberUpdate(newCurrentPage))
      sendRequestToApi(newCurrentPage)
    }
  }
  return (
    <>
      <S.PagesContainer>
        <S.BtnPrev disabled={disabled} type="button" onClick={prev}>
          Назад
        </S.BtnPrev>

        <S.CurrentNumberPageDiv>{currentPage}</S.CurrentNumberPageDiv>
        <S.BtnNext disabled={disabled} type="button" onClick={next}>
          Вперед
        </S.BtnNext>
      </S.PagesContainer>
      {showError && <S.ForErrors>{showError}</S.ForErrors>}
    </>
  )
}
