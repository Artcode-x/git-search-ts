import { useState } from "react"
import * as S from "./Main.styled"
import { useSelector } from "react-redux"
import Modal from "../components/modal/modal"
import Search from "../components/Search/Search"
import Filter from "../components/Filter-repo/filter"
import CircleLoader from "../components/Loader/loader"
import UserList from "../components/UserList/UserList"
import Pagination from "../components/pagination/pagination"
import { flagSelector } from "../../store/selector/selector"

function Main() {
  const [loading, setLoading] = useState<boolean>(false)
  const flagForOpenModal: boolean = useSelector(flagSelector)

  return (
    <S.GeneralBlock>
      <Search setLoading={setLoading} />
      <Filter />
      {flagForOpenModal && <Modal />}
      {loading ? <CircleLoader /> : <UserList />}
      <Pagination />
    </S.GeneralBlock>
  )
}
export default Main
