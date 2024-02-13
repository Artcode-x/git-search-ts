import { useState } from "react"
import * as S from "./Main.styled"
import { useSelector } from "react-redux"
import Modal from "../../components/Modal/Modal"
import Search from "../../components/Search/Search"
import Filter from "../../components/Filter/Filter"
import Loader from "../../components/Loader/Loader"
import UserList from "../../components/UserList/UserList"
import Pagination from "../../components/Pagination/Pagination"
import { flagSelector } from "../../store/selector/selector"

function Main() {
  const [loading, setLoading] = useState<boolean>(false)
  const flagForOpenModal: boolean = useSelector(flagSelector)

  return (
    <S.GeneralBlock>
      <Search setLoading={setLoading} />
      <Filter />
      {flagForOpenModal && <Modal />}
      {loading ? <Loader /> : <UserList />}
      <Pagination />
    </S.GeneralBlock>
  )
}
export default Main
