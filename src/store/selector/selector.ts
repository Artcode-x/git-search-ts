const mainSelector = (store: {store: any}) => store.store;

export default mainSelector;

export const userSelector = (store: {store: any}) => mainSelector(store).user;