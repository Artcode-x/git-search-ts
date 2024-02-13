import { useDispatch, useSelector } from "react-redux"
import * as S from "./Modal.styled"
import { userSelector } from "../../store/selector/selector"
import { flagUpdate } from "../../store/reducers/reducers"

export default function Modal() {
  const dispatch = useDispatch()
  const user = useSelector(userSelector)

  const closeForm = () => {
    dispatch(flagUpdate(false))
  }

  return (
    <S.Modal>
      <S.Parent>
        <S.UserBlock>
          <S.UserDivForImg>
            <S.UserAva src={user.avatar_url} />
          </S.UserDivForImg>
          <S.UserLogin>Никнейм: {user.login}</S.UserLogin>
          <S.Location>Location: {user.location}</S.Location>
          <S.RepoCount>Количество репозиториев: {user?.public_repos}</S.RepoCount>
          <S.Subscribers>Подписчиков: {user.followers}</S.Subscribers>
          <S.TextUrl>{user.url}</S.TextUrl>
          <S.LinkProf>Ссылка на профиль: {user.html_url}</S.LinkProf>
          <S.Bio>Биография: {user.bio}</S.Bio>
          <S.GoToUser onClick={closeForm}>закрыть</S.GoToUser>
        </S.UserBlock>
      </S.Parent>
    </S.Modal>
  )
}
