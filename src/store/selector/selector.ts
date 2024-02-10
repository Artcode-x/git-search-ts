const mainSelector = (store: { store: any }) => store.store

export default mainSelector

export const userSelector = (store: { store: any }) => mainSelector(store).user
export const flagSelector = (store: { store: any }) => mainSelector(store).flag
export const filterSelector = (store: { store: any }) => mainSelector(store).filter
