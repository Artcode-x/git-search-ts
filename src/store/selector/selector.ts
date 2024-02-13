const mainSelector = (store: { store: any }) => store.store

export default mainSelector

export const userSelector = (store: { store: any }) => mainSelector(store).user
export const flagSelector = (store: { store: any }) => mainSelector(store).flag
export const filterSelector = (store: { store: any }) => mainSelector(store).filter
export const searchUsersSelector = (store: { store: any }) => mainSelector(store).searchUserName
export const InputSearchSelector = (store: { store: any }) => mainSelector(store).textInInputSearch
export const pageNumberSelector = (store: { store: any }) => mainSelector(store).pageNumber
export const totalPagesFoundSelector = (store: { store: any }) => mainSelector(store).totalPagesFound

