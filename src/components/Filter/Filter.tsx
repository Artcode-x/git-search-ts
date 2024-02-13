import { useDispatch } from "react-redux"
import * as S from "./Filter.styled"
import { filterUpdate } from "../../store/reducers/reducers"

export default function Filter() {
  const dispatch = useDispatch()

  const filterUp = () => {
    dispatch(filterUpdate(true))
  }

  const filterDown = () => {
    dispatch(filterUpdate(false))
  }

  return (
    <S.Sort>
      <S.TitleH3>Сортировать по количеству репозиториев:</S.TitleH3>
      <S.ButtonContainer>
        <S.ButtonFilter type="button" onClick={() => filterUp()}>
          По убыванию ( сначала больше репозиториев)
        </S.ButtonFilter>
        <S.ButtonFilter type="button" onClick={() => filterDown()}>
          По возрастанию ( сначала меньше репозиториев)
        </S.ButtonFilter>
      </S.ButtonContainer>
    </S.Sort>
  )
}
