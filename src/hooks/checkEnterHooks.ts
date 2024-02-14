export const checkEnterHooks = (key: string, searchClick: Function) => {
  if (key === "Enter") {
    searchClick()
  }
}
