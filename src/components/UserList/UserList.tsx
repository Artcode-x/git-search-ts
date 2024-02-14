import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as S from "./UserList.styled"
import { searchUsersSelector } from "../../store/selector/selector"
import { flagUpdate, userUpdate } from "../../store/reducers/reducers"
import { getUserInfo } from "../../api/api"
import { IUsersList, IUser, IUsers } from "../../interface/interface"

export default function UserList() {
  const dispatch = useDispatch()
  const [disabled, setDisabled] = useState<number>(-1)

  const usersList: IUsersList[] = useSelector(searchUsersSelector)
  const clickToUser = async (user: IUsers, index: number) => {
    try {
      setDisabled(index)
      const response: IUser = await getUserInfo(user.login)
      dispatch(userUpdate(response))
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(flagUpdate(true))
      setDisabled(-1)
    }
  }
  return (
    <S.Parent>
      {usersList.length > 0 ? (
        <S.UserListBlock>
          {usersList.map((user: IUsers, index: number) => (
            <S.UserInfo key={user.id}>
              <S.UserDivForImg>
                <S.UserAva src={user.avatar} />
              </S.UserDivForImg>
              <S.UserLogin>{user.login}</S.UserLogin>
              <S.TextUrl>{user.url}</S.TextUrl>
              <S.GoToUser
                disabled={disabled === index}
                onClick={() => {
                  clickToUser(user, index)
                }}
              >
                {disabled === index ? "Загружаю..." : "Подробнее"}
              </S.GoToUser>
            </S.UserInfo>
          ))}
        </S.UserListBlock>
      ) : (
        <S.UserText>Введите пользователя которого хотите найти!</S.UserText>
      )}
    </S.Parent>
  )
}
